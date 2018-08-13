import axios from 'axios'
import global from './global'
import Vue from 'vue'

//请求前拦截
axios.interceptors.request.use(config => {
	//显示loading
	//	store.commit('UPDATE_LOADING',true);
	return config
}, error => {
	return Promise.reject(error)
})

//响应前拦截
axios.interceptors.response.use(response => {
	return response
}, error => {
	return Promise.resolve(error.response)
});

//状态码判断
function errorState(response) {
	//隐藏loading
	//	store.commit('UPDATE_LOADING',false);
	console.log(response);
	if(response && (response.status === 200 || response.status === 304 || response.status === 400)) {
		return response.data;
	} else {
		//网络错误提示
    Vue.prototype.$Modal.error({
      title:'错误提示',
      content:'网络错误'
    })
	}
}

//后端返回状态码统一提示
function successState(res,type, callback) {
	//隐藏loading
	//	store.commit('UPDATE_LOADING',false);
  if(res.data){
    if(res.data.status == 0) {
      Vue.prototype.$Modal.error({
        title:'错误提示',
        content:res.data.data || '网络异常'
      })
    } else if(res.data.status == 1) {
      //判断接口模块
      switch (type){
        case 'login':
          break;
        case 'download':
          break;
        case 'upload':
          Vue.prototype.$Modal.success({
            title:'提示',
            content:res.data.data
          })
          break;
        case 'list':
          break;
        case 'detail':
          break;
        case 'submit':
          Vue.prototype.$Modal.success({
            title:'提示',
            content:res.data.data,
            onOk:()=>{
              if(callback==1){
                window.history.go(-1)
              }
            }
          })
          break;
      }
    } else if(res.data.status==2){
        Vue.prototype.$backLogin();
    }
  }else{

  }
}

const httpServer = (opts, data)=> {
	//http默认配置
	let httpDefaultOpts = {
		method: 'post',
		baseURL:global.getBaseUrl(),
		url: opts.url,
		timeout: opts.type=='upload'?60000:10000,
		data: data,
		headers: {
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'multipart/form-data; charset=UTF-8'
		},
    //该方法允许在请求发送到服务器之前修改该请求，而且，此方法最后必须返回一个string、ArrayBuffer或者Stream。
    transformRequest: [function (data) {
      var params = new FormData;
      params.append('data', JSON.stringify(data));
      return params;
    }],
	}
	let promise=new Promise(function(resolve,reject){
		axios(httpDefaultOpts).then(
			(res)=>{
				successState(res,opts.type,opts.callback);
				resolve(res.data);
			}
		).catch(
			(response)=>{
				errorState(response);
				reject(response);
			}
		)
	})
	return promise;
}
export default httpServer
