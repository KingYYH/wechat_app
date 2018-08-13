//获取全局公共url
function getBaseUrl(){
  let url='/api';
  let ishttps='https:'==document.location.protocol?true:false;
  let hostname;
  if(ishttps){
    hostname='https://'+document.location.host+'/index.php?s=headward';
  }else{
    hostname='http://'+document.location.host+'/index.php?s=headward';
  }
  return url;
  // return hostname;
}

//获取全局下载
function  getMainUrl() {
  let url='https://www.tctongrenkeji.com';
  let ishttps='https:'==document.location.protocol?true:false;
  let hostname;
  if(ishttps){
    hostname='https://'+document.location.host;
  }else{
    hostname='http://'+document.location.host;
  }
  return url;
  // return hostname;
}

//添加图片路径
function getImagePath() {
  let url='/static/img';
  let hostname='/Public/headward/dist/static/img';
  return url;
  // return hostname;
}

export default {
  getBaseUrl,
  getMainUrl,
  getImagePath,
}
