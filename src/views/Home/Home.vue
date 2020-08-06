<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8">
            <el-card shadow="hover" style="height: 290px; margin-bottom: 20px">
                <div class="user">
                    <img :src="userImg" alt="">
                    <div class="userinfo">
                        <p class="name">Nick</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登陆时间:<span>2020-07-25</span></p>
                    <p>上次登陆地点:<span>武威</span></p>
                </div>
            </el-card>
            <el-card shadow="hover" style="height: 522px">
              <el-table :data="tableData">
                  <el-table-column show-overflow-tooltip v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
              </el-table>
            </el-card>
        </el-col>
        <el-col :span="16">
            <div class="num">
                <el-card shadow="hover" v-for="item in countData" :key="item.name" body-style="display: flex; padding: 0">
                    <i class="icon" :class="`el-icon-${item.icon}`"  :style="{background: item.color }"></i>
                    <div class="detail">
                        <p class="num">￥ {{item.value}}</p>
                        <p class="txt">{{item.name}}</p>
                    </div>
                </el-card>
            </div>
            <el-card shadow="hover">
                <EChart style="height:280px" :chart-data="echartData.order"></EChart>
            </el-card>
            <div class="graph">
                <el-card shadow="hover">
                    <EChart :chartData="echartData.user" style="height:260px;"></EChart>
                </el-card>
                <el-card shadow="hover">
                    <EChart
                            :chartData="echartData.video"
                            :isAxisChart="false"
                            style="height:260px;"
                    ></EChart>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import EChart from "../../components/EChart";
    export default {
        components: {
            EChart
        },
        name: "Home",
        // mounted() {
        //     this.$http.get('/home/getData').then(res => {
        //         console.log(res.data)
        //         },
        //         error => {
        //         console.log(error)
        //         }
        //     )
        //
        // },
        methods: {
            getTableData() {
                this.$http.get('/home/getData').then(res => {
                    res = res.data;
                    this.tableData = res.data.tableData;
                    const order = res.data.orderData;
                    this.echartData.order.xData = order.date;

                    let keyArray = Object.keys(order.data[0])
                    console.log(keyArray);
                    keyArray.forEach(key => {
                        this.echartData.order.series.push({
                            name: key === 'wechat' ? '小程序' : key,
                            data: order.data.map(item => item[key]),
                            type: 'line'
                        });
                        // 用户柱状图
                        this.echartData.user.xData = res.data.userData.map(
                            (item) => item.date
                        );
                        this.echartData.user.series.push({
                            name: "新增用户",
                            data: res.data.userData.map((item) => item.new),
                            type: "bar",
                        });
                        this.echartData.user.series.push({
                            name: "活跃用户",
                            data: res.data.userData.map((item) => item.active),
                            type: "bar",
                            barGap: 0,
                        });
                        // 视频饼图
                        this.echartData.video.series.push({
                            data: res.data.videoData,
                            type: "pie",
                        });
                    });
                })
            }
        },
        created() {
            this.getTableData();
        },
        data() {
           return {
               userImg: require('../../assets/images/user.png'),
               countData: [
                   {
                       name: "今日支付订单",
                       value: 1234,
                       icon: "success",
                       color: "#2ec7c9",
                   },
                   {
                       name: "今日收藏订单",
                       value: 210,
                       icon: "star-on",
                       color: "#ffb980",
                   },
                   {
                       name: "今日未支付订单",
                       value: 1234,
                       icon: "s-goods",
                       color: "#5ab1ef",
                   },
                   {
                       name: "本月支付订单",
                       value: 1234,
                       icon: "success",
                       color: "#2ec7c9",
                   },
                   {
                       name: "本月收藏订单",
                       value: 210,
                       icon: "star-on",
                       color: "#ffb980",
                   },
                   {
                       name: "本月未支付订单",
                       value: 1234,
                       icon: "s-goods",
                       color: "#5ab1ef",
                   },
               ],
               tableData: [],
               tableLabel: {
                   name: "课程",
                   todayBuy: "今日购买",
                   monthBuy: "本月购买",
                   totalBuy: "总购买",
               },
               echartData: {
                   order: {
                       xData: [],
                       series: []
                   },
                   user: {
                       xData: [],
                       series: []
                   },
                   video: {
                       series: []
                   }
               }
           }
        }
    }
</script>

<style scoped lang="scss">
@import '../../assets/scss/home.scss';
</style>