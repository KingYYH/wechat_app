<template>
  <div class="statistial">
    <div class="title">
      <img src="../../assets/images/banner.png" alt="">
    </div>
    <div class="number-data">
      <span class="line"></span><span class="line-num">数据总览</span>
      <p>在２017年度内，濡江财富共发布905个融资项目，为借款人实现融资61944.90万元，为投资人赚取的收益为755.72万元，平均收益率13.8%。</p>
    </div>
    <div class="month">
      <!-- <div class="mon-title">2017年度各月份融资额（单位 : 万元）</div> -->
      <div id="myChart1" class="myChart"></div>
      <div id="myChart2" class="myChart"></div>
      <div id="myChart3" class="myChart"></div>
    </div>
    <div class="number-data">
      <span class="line"></span><span class="line-num">用户分析</span>
      <p>2017年度内，濡江财富新增注册用户数达597个，濡江财富平台
注册人数在2017年度后期涨幅较大。同时，2017年累计注册用户较2016年同比增长率达46.32%。</p>
    </div>
     <div class="month">
      <div id="myChart4" class="myChart"></div>
      <div id="myChart5" class="myChart"></div>
      <div id="myChart6" class="myChart"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      category: ["小王", "小李", "小赵", "小马", "小刘", "小张", "小齐"],
      barData: [3100, 2142, 1218, 581, 431, 383, 163]
    };
  },
  created() {},
  mounted() {
    this.drawLine1();
    this.drawLine2();
    this.drawLine3();
    this.drawLine4();
    this.drawLine5();
    this.drawLine6();
  },
  methods: {
    drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart1"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "2017年度各月份融资额（单位 : 万元）",
          left: "center",
          textStyle: {
            //文字颜色
            color: "#333333",
            //字体大小
            fontSize: 16
          }
        },
        grid: {
          left: 50
        },
        xAxis: {
          type: "category",
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        },
        yAxis: {
          type: "value",
          data: ["1000", "2000", "300", "4000", "5000", "6000", "7000", "8000"]
        },
        series: [
          {
            data: [
              1927,
              3137,
              4505,
              4426,
              5045,
              6040,
              5865,
              5644,
              6670,
              5734,
              7137,
              5816
            ],
            type: "bar",
            barWidth: 12,
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
              emphasis: {
                barBorderRadius: 5
              },

              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [5, 5, 0, 0],
                label: {
                  show: true, //是否展示
                  position: "top",
                  textStyle: {
                    // fontWeight: "bolder",
                    fontSize: "8",
                    fontFamily: "PingFangSC-Regular",
                    color: "#333333"
                  }
                },
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#15D1F1" },
                  { offset: 1, color: "#6F90FA" }
                ])
              }
            }
          }
        ]
      });
    },
    drawLine2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      myChart.setOption({
        color: ["#86DFFD", "#FF676C", "#ffdb56", "#AD5FEC", "#FFBA30"],
        // tooltip: {
        //   trigger: "item",
        //   formatter: "{a} <br/>{b}: {c} ({d}%)"
        // },
        legend: {
          type: "scroll",
          orient: "vertical",
          left: 200,
          top: 70,
          bottom: 10,
          itemGap: 15,
          itemWidth: 8,
          itemHeight: 8,
          data: [
            { name: "30万（含30万）以下155项", icon: "circle" },
            { name: "30-60万（含60万）281项", icon: "circle" },
            { name: "60-90万（含90万）198项", icon: "circle" },
            { name: "90万以上271项", icon: "circle" }
          ],
          textStyle: {
            fontSize: "8",
            color: "#000"
          }
        },

        title: [
          {
            text: "2017年度融资额区间占比",
            left: "50%",
            // top: '45%',
            textAlign: "center",
            textBaseline: "middle",
            textStyle: {
              color: "#333333",
              fontWeight: "normal",
              fontSize: 12
            }
          }
        ],
        series: [
          {
            name: "具体数值",
            type: "pie",
            radius: ["30%", "50%"],
            center: ["30%", "40%"],
            avoidLabelOverlap: false,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              },
              normal: {
                borderColor: "#FFFFFF",
                // borderWidth: 3,
                label: {
                  show: false //隐藏标示文字
                },
                labelLine: {
                  show: false //隐藏标示线
                }
              }
            },

            label: {
              normal: {
                show: false,
                formatter: "{b}\n{d}%",
                position: "center"
              },
              emphasis: {
                show: true,
                position: "center",
                labelLine: {
                  show: false
                },
                textStyle: {
                  fontSize: "12"
                },
                formatter: "{d}%"
              }
            },
            data: [
              { value: 335, name: "30万（含30万）以下155项" },
              { value: 310, name: "30-60万（含60万）281项" },
              { value: 234, name: "60-90万（含90万）198项" },
              { value: 195, name: "90万以上271项" }
            ]
          }
        ]
      });
    },
     drawLine3() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart3"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "2016-2017年度投资收益额（单位 : 万元）",
          left: "center",
          textStyle: {
            //文字颜色
            color: "#333333",
            //字体大小
            fontSize: 16
          }
        },
        grid: {
          left: 50
        },
        xAxis: {
          type: "category",
          data: ["2016", "2017"]
        },
        yAxis: {
          type: "value",
          data: ["150", "300", "450", "600", "750", "900"]
        },
        series: [
          {
            data: [
              212.73,
              755.72,
            ],
            type: "bar",
            barWidth: 24,
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
              emphasis: {
                barBorderRadius: 5
              },

              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [10, 10, 0, 0],
                label: {
                  show: true, //是否展示
                  position: "top",
                  textStyle: {
                    // fontWeight: "bolder",
                    fontSize: "8",
                    fontFamily: "PingFangSC-Regular",
                    color: "#333333"
                  }
                },
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#15D1F1" },
                  { offset: 1, color: "#6F77FA" }
                ])
              }
            }
          }
        ]
      });
    },
    drawLine4() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart4"));
      // 绘制图表
      myChart.setOption({
        title: [
          {
            text: "2017年每月累计注册用户数",
            left: "50%",
            // top: '45%',
            textAlign: "center",
            textBaseline: "middle",
            textStyle: {
              color: "#333333",
              fontWeight: "normal",
              fontSize: 12
            }
          }
        ],
        grid: {
          left: 50
        },
        xAxis: {
          type: "category",
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        },
        yAxis: {
          type: "value",
          data: ["200", "400", "600", "800", "1000", "1200"]
        },
        series: [
          {
            data: [430, 492, 536, 562, 581, 605, 652, 728, 775, 819, 976, 1005],
            type: "line",
            smooth: true,
            symbolSize: 4, //折线点的大小
            symbol: "circle", //折线点设置为实心点
            itemStyle: {
              normal: {
                color: "#4FA7F7", //折线点的颜色
                lineStyle: {
                  color: "#4FA7F7" //折线的颜色
                },
                label: { show: true }
              },
              label: {
                emphasis: {
                  textStyle: {
                    fontSize: "12"
                  }
                }
              }
            }
          }
        ]
      });
    },
    drawLine5() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart5"));
      // 绘制图表
      myChart.setOption({
        color: ["#FE6786", "#4ADAED"],
        title: [
          {
            text: "投资者性别比例",
            left: "50%",
            // top: '45%',
            textAlign: "center",
            textBaseline: "middle",
            textStyle: {
              color: "#333333",
              fontWeight: "normal",
              fontSize: 12
            }
          }
        ],
        grid: {
          left: 100
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          right: 100,
          top: 80,
          height: 120,
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 10,
          textStyle: {
            color: "#333",
            fontSize: 10
          },
          orient: "vertical",
          data: [{ name: "男", icon: "circle" }, { name: "女", icon: "circle" }]
        },

        calculable: true,
        series: [
          {
            name: "半径模式",
            type: "pie",
            radius: [20, 90],
            center: ["30%", "50%"],
            roseType: "radius",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false,
                labelLine: {
                  show: false
                }
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              },
              normal: {
                borderColor: "#FFFFFF",
                label: {
                  show: false //隐藏标示文字
                },
                labelLine: {
                  show: false //隐藏标示线
                }
              }
            },
            lableLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            data: [{ value: 40, name: "男" }, { value: 60, name: "女" }]
          }
        ]
      });
    },
    drawLine6() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart6"));
      var data = [
        {
          value: 25,
          name: "29岁及29岁以下"
        },
        {
          value: 32,
          name: "30岁-39岁"
        },
        {
          value: 28,
          name: "40岁-49岁"
        },
        {
          value: 15,
          name: "50岁及50岁以上"
        }
      ];
      // 绘制图表
      myChart.setOption({
        color: ["#FE6786", "#4ADAED"],
        title: [
          {
            text: "投资者年龄分布",
            left: "50%",
            // top: '45%',
            textAlign: "center",
            textBaseline: "middle",
            textStyle: {
              color: "#333333",
              fontWeight: "normal",
              fontSize: 12
            }
          }
        ],
        tooltip: {
          show: false,
          trigger: "item",
          formatter: "{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          top: 70,
          right: 0,
          top: "30%",
          data: [
            { name: "29岁及29岁以下", icon: "circle" },
            { name: "30岁-39岁", icon: "circle" },
            { name: "40岁-49岁", icon: "circle" },
            { name: "50岁及50岁以上", icon: "circle" }
          ]
        },
        series: [
          {
            type: "pie",
            selectedMode: "single",
            radius: ["40%", "58%"],
            center: ["30%", "40%"],
            color: [
              "#86D560",
              "#AF89D6",
              "#59ADF3",
              "#FF999A",
              "#FFCC67",
              "#FCC667",
              "#CC5962"
            ],
            label: {
              normal: {
                position: "inner",
                formatter: "{d}%",
                textStyle: {
                  color: "#fff",
                  fontSize: 12
                }
              }
            },
             itemStyle : {
                normal : {
                    label:{
                        show : true,
                        position : 'inner',
                        formatter: '{d}%',
                        distance : 0.7 ,//这项是标识距离中心点的距离
                        textStyle : {                   
                            align : 'center',
                            baseline : 'middle',
                            fontSize : 12,
                         }
                    },
                    labelLine:{
                        show : false
                    }
                }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: data
          }
        ]
      });
    }
  }
};
</script>
<style lang="less" scoped>
.statistial {
  padding: 25px 37px 0px 38px;
  box-sizing: border-box;
  font-family: "PingFangSC-Regular";

  .title {
    width: 675px;
    height: 161px;
    margin-bottom: 40px;
    img {
      width: 675px;
      height: 161px;
    }
  }
  .number-data {
    margin-bottom: 41px;
    .line {
      width: 8px;
      height: 30px;
      background: rgba(61, 158, 255, 1);
      display: inline-block;
      vertical-align: middle;
    }
    .line-num {
      font-size: 26px;
      color: rgba(61, 158, 255, 1);
      line-height: 38px;
      margin-left: 16px;
      vertical-align: middle;
    }
    p {
      font-size: 22px;
      color: #333333;
      line-height: 34px;
    }
  }
  .month {
    text-align: center;
    .myChart {
      width: 100%;
      height: 640px;
      margin-bottom: 60px;
    }
  }
}
title {
  font-size: 24px;
  color: #333333;
}
</style>