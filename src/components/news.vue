<template>
  <div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["50%", "70%"],
          center: ["30%", "50%"],
          avoidLabelOverlap: false,
          animation: false,
          data: [
            {
              value: res.data.onTime,
              name: "正常打卡" + res.data.onTime + "人"
            },
            {
              value: res.data.notOnTime,
              name: "异常打卡" + res.data.notOnTime + "人"
            },
            { value: res.data.leave, name: "请假" + res.data.leave + "人" },
            {
              value: res.data.notShift,
              name: "休息" + res.data.notShift + "人"
            }
          ],
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "26",
                fontWeight: "bold"
              },
              formatter: "{d}%"
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            },
            normal: {
              label: {
                show: false //隐藏标示文字
              },
              labelLine: {
                show: false //隐藏标示线
              }
            }
          }
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
series: [
{
name: '访问来源',
type: 'pie',
radius: ['50%', '70%'],
center: ['30%', '50%'],
avoidLabelOverlap: false,
animation: false,
data: [
{ value: res.data.onTime, name: '正常打卡' + res.data.onTime + '人' },
{ value: res.data.notOnTime, name: '异常打卡' + res.data.notOnTime + '人' },
{ value: res.data.leave, name: '请假' + res.data.leave + '人' },
{ value: res.data.notShift, name: '休息' + res.data.notShift + '人' }],
label: {
normal: {
show: false,
position: 'center'
},
emphasis: {
show: true,
textStyle: {
fontSize: '26',
fontWeight: 'bold'
},
formatter: '{d}%'
}
},
itemStyle: {
emphasis: {
shadowBlur: 10,
shadowOffsetX: 0,
shadowColor: 'rgba(0, 0, 0, 0.5)'
},
normal: {
label: {
show: false //隐藏标示文字
},
labelLine: {
show: false //隐藏标示线
}
}
}
}
]
</style>
