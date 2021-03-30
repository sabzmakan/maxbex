<template>
  <div class="dashboard">
    <ApiModal />
    <DashMenu />

    <div class="main-content">
      <div class="row">
        <div class="col-12">
          <div class="widget-style">
            <div class="widget-header border-bottom-0">
              <div class="widget-title">جزئیات حساب کاربری</div>
              <div>
                <form @submit.prevent>
                  <label class="d-flex justify-content-between">انتخاب اکانت</label>
                <select
                  class="form-control"
                  v-model="selectedAccount"
                  @change="getBalances"
                >
                  <option  :value="null" :id="1000" :key=1  disabled > انتخاب اکانت</option>
                  <option v-for="item in $store.state.user.accounts" :value="item" :key="item.id">
                    {{ item.name }}
                  </option>
                </select>
              </form>
                <!-- <a href="#" class="btn btn-default">سپرده</a> -->
                <!-- <a href="#" class="btn btn-transparent">برداشت</a> -->
              </div>
            </div>
            <div class="widget-body py-0">
              <!-- <ul class="balance-details-list">
                <li class="active"><a href="#">Spot</a></li>
                <li><a href="#">P2P</a></li>
                <li><a href="#">Margin</a></li>
                                <li><a href="#">Futures</a></li>
                                <li><a href="#">WizardX</a></li>
                                <li><a href="#">Pool</a></li>
              </ul> -->
              <div class="widget-body">
                      <bar-chart
                      ref="chart1"
                        :data="barChartData"
                        :options="barChartOptions"
                        :height="200"
                      />
                  </div>

              <div>
                <p class="text-color fw-300 mb-2 ">موجودی حساب:</p>
                <p class="font-size-2x black-color ltr-text">
                  <!-- <span>0.00005280</span>
                  <sub>BTC</sub> -->
                  <table>
                    <tr class="tableRow">
                      <th>
                          <p> موجودی به دلار</p>
                        </th>
                        <th>
                          <p>موجودی</p>
                        </th>
                        <th>
                          <p>کوین</p>
                        </th>
                    </tr>
                    <tr v-if="usdtAmount">
                      <th>
                          <div class="tableRow">
                            <p> </p>
                          </div>
                        </th>
                        <th>
                          <div  class="tableRow">
                            <p>{{usdtAmount}} </p>
                          </div>
                        </th>
                        <th>
                          <div class="tableRow">
                            <p> USDT</p>
                          </div>
                        </th>
                    </tr>
                    <tr>
                      <th>
                        <div  v-for="i in amounts" :key="i"  class="tableRow">
                           <p>{{i}}</p>
                        </div>
                      </th>
                      <th>
                        <div  v-for="(coinAmou,index) in coinAmounts" :key="index"  class="tableRow">
                          <p>{{coinAmou}}</p>
                        </div>
                      </th>
                      <th>
                        <div  v-for="coin in coins" :key="coin"  class="tableRow">
                          <p>{{coin}}</p>
                        </div>
                      </th>
                    </tr>
                    
                  </table>
                  
                </p>

                <!-- <div class="mt-3">selectedAccountId:{{$store.state.selectedAccountId}} </div> -->

                <!-- <p class="text-color fw-300 mb-1">ارزش تخمینی:</p>
                <p class="black-color font-size-2x ltr-text">$0.60</p>

                <p class="text-color fw-300 mb-1">ارزش تخمینی:</p>
                <p class="black-color font-size-2x ltr-text"></p> --> 
                  
              </div>
            </div>



              

                  

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import env from "~/env.js";
import BarChart from "~/components/BarChart";

export default {
  //middleware:['auth','check-auth'],
  middleware:['check-auth'],
  data() {
    return {
      title: "جزئیات حساب کاربری",
      
      profile:{
        accounts: [],
        //coins: [],
      },
      balances:[],
      uploadBalances:false,
      selectedAccount: {},
      coins:[],
      amounts:[],
      coinAmounts:[],
      amountsPrice:[],
      usdtAmount:0,
      prices2:[],//array of prics for usdt of coin
      symbols2:[],//array of symbols for usdt of coin
      prices:[
        {
          symbol:'',
          price:0
          }
      ],

      barChartData: {
         labels: [],
        datasets: [
          {
            label: "Income",
            backgroundColor: ["red", "orange", "yellow","green","blue","violet","red", "pink", "brown","green","blue","violet"],
            data: [],
          },
        ],
      },

      barChartOptions: {
        responsive: true,
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: "لیست کوین های شما",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "توضیحات جزئیات حساب کاربری در این قسمت",
        },
      ],
    };
  }, 
  mounted() {
    this.getPrices()
    this.getBalances()
    
  },components: {
    BarChart,
  },
  methods :{
    //  sort(){
    //   //self.coins.sortself.balances.coin
    //   var arr=self.coins
    //   var len = arr.length;
    //   var max = 0;
    //   for(let i=0;i<14;i++){
    //     while (len--) {
    //        if (arr[len] > self.coins[i]) {
    //         self.coins[i] = arr[len];
    //        }
    //     }
    //   }
    // },
    
    getBalances(){
       console.log(this.selectedAccount)
       var self=this
        axios.get(env.api.url + '/spot/wallet/balances',{
              headers: {
                'Authorization': 'Bearer ' + self.$store.state.token ,
                'AccountId' : self.selectedAccount.id
              }}).then(res => {
                    console.log('Balances',res?.data)
                    self.balances = res?.data.response
                    self.updateAmounts()
                   //self.updateChart()
                    })

    },
     updateAmounts(){
      var self=this
      let coins = this.balances.map(balance => balance.coin);
      let amounts = this.balances.map(balance => balance.amount);
      self.coinAmounts = this.balances.map(balance => balance.amount);
//console.log('self.coinAmounts[i]-+++++---',self.coinAmounts)
       
      let amountsPrice =[]
      //= amounts.map(amount=> Math.floor(amount) * Math.floor(Math.random() * 2) + 1)
    //console.log('amountsPrice[i]-+++++---',amountsPrice)
      for(let i=0;i<coins.length-1;i++){
        for(let j=0;j<self.symbols2.length;j++){
          if (coins[i]=='USDT'){
            delete coins[i]
            self.usdtAmount=amounts[i]
            delete amounts[i]
          }else{
            if(coins[i]==self.symbols2[j]){
            amountsPrice[i]=amounts[i] *self.prices2[j]
            // if(amountsPrice[i]<= 0.1){
             //console.log('amountsPrice[i]----',amountsPrice[i])
            //   //delete amounts[i]
            // }
          }
          }
        }
      }
      self.coins=coins
      self.amounts=amountsPrice
      self.updateChart()
    },
    getBalanceAmounts(){
      var self=this
      var balances2= this.balances
      
      var amounts=[]
      const len = balances2.length
      for(let i=0;i<len;i++){
        //amounts.push(balances2[i].amount)
        var Rounded=parseFloat(balances2[i].amount+0).toFixed(4)
        console.log('balances2[i].amount',Rounded)
        amounts.push(Rounded)
       // console.log('balances2[i].amount',balances2[i].amount)
      }
    
      return amounts

    },
    getPrices(){
       const self =this
       axios.get(env.api.url + '/markets/price').then(res => {
                    console.log('prices',res?.data.response)
                    self.prices = res?.data.response
                    self.calCoinPrice()
                    })
          
     },
    calCoinPrice(){
       let self=this
       let secondCoins2 = 'TDSU'
       let symbols=[]
       let pricesNew=[]

       var length2=this.prices.length


       for (var i=0;i<length2;i++){
         pricesNew.push(self.prices[i].price)
         symbols.push(self.prices[i].symbol)
       }
       //console.log('prices2',prices2)
       for(let i=0;i<length2;i++){
         let coinReverse=symbols[i].split("").reverse().join("")
         if (secondCoins2 == coinReverse.slice(0,4)){//'usdt'
           let length3=(coinReverse.length)-4
           self.symbols2[i]=symbols[i].slice(0,length3)
           self.prices2[i]=pricesNew[i]
         }
       }//give prices2 & symbols2 arrays ,that are prices by usdt ,but symbols array has all pairs
       console.log('prices2',self.prices2)
       console.log('symbols2',self.symbols2)
      
     },
   updateChart(){
     var self= this

      var shown_coins=this.coins
      var shown_amounts =this.amounts
      var coins2=this.coins
      var amounts2 =this.amounts
      var max=[]
      var index=0
      if(coins2.length>11)
      {for(let j=0;j<10;j++){
       
          max[j]=0
        for(let i=0;i<(coins2.length)-j;i++){
        if(amounts2[i]>max[j])
        {
        max[j]=amounts2[i]
        index=i
        }
      }
      shown_coins.push(coins2[index])
      shown_amounts.push(amounts2[index])
      console.log('coins[index]',coins2[index])
      console.log('amounts[index]',amounts2[index])
      delete coins2[index]
      delete amounts2[index]
      

      }
      }
      // let shown_coins = this.coins.slice(0,12) ;
      // let shown_amounts = this.amounts.slice(0,12) ;
      // let coins  = await this.getBalanceCoins();
      // let coins2 =[]
      // let amounts2 =[]
      // let amounts = await this.getBalanceAmounts();
      //amounts =await this.updateAmounts()
      let chartData = Object.assign(this.barChartData , {}) ;
      // if(self.coins.length>14){//limit of chartjs in show data
      //   for(let i=0;i<13;i++){
      //     coins2[i]=self.coins[i]
      //     amounts2[i]=self.amountsPrice[i]
      //   }
      // }


      // chartData.labels = shown_coins ;
      // chartData.datasets[0].data = shown_amounts ;
      // let options = this.barChartOptions
      // this.$refs["chart1"].renderChart(chartData, options) 
    },
  }
};
</script>
<style scoped>
.tableRow{
  font-weight: 8;
}
th, td {
  padding-left: 25px;
}
</style>