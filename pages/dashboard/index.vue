<template>
  <div class="dashboard">
    <ApiModal />
    <DashMenu />

    <div class="main-content">
      <div class="row">
        <div class="col-12">
          <div class="widget-style dash-links">
            <div class="widget-header">
              <div class="widget-title">حساب کاربری</div>
            </div>
            <div class="widget-body">
              <div class="row">
                <div class="col-md-6">
                  <NuxtLink to="/dashboard/chart" class="btn btn-primary">
                    <i class="far fa-chart-line"></i>
                    <span>صفحه ترید</span>
                  </NuxtLink>
                </div>
                <div class="col-md-6">
                  <NuxtLink to="/dashboard/market" class="btn btn-success">
                    <i class="far fa-bullseye-pointer"></i>
                    <span>بازار</span>
                  </NuxtLink>
                </div>
                <div class="col-md-6">
                  <NuxtLink to="/dashboard/setting" class="btn btn-warning">
                    <i class="far fa-user"></i>
                    <span>پروفایل</span>
                  </NuxtLink>
                </div>
                <div class="col-md-6">
                  <NuxtLink to="/dashboard/apikey" class="btn btn-secondary">
                    <i class="far fa-key"></i>
                    <span>Api Key</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="widget-style">
            <div class="widget-header">
              <div class="widget-title">ارزهای شما</div>
              <div>
                <!-- <NuxtLink to="/dashboard/chart" class="btn btn-primary"
                  >ورود به صفحه ترید</NuxtLink
                > -->
                <NuxtLink
                  to="/dashboard/account-details"
                  class="btn btn-secondary"
                  >گزارش های اکانت</NuxtLink
                >
              </div>
              <form @submit.prevent>
                <label class="d-flex justify-content-between"
                  >انتخاب اکانت</label
                >
                <select
                  class="form-control"
                  v-model="selectedAccount"
                  @change="getBalances"
                >
                  <option :value="null" :id="1000" :key="1" disabled>
                    انتخاب اکانت
                  </option>
                  <option
                    v-for="item in accounts"
                    :value="item"
                    :key="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </form>
            </div>
            <div class="widget-body">
              <bar-chart
                ref="chart1"
                id="myChart1"
                :data="barChartData"
                :options="barChartOptions"
                :height="200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// document.getElementById("backToTop").classList.add("d-none");
// backToTop toie `/dashboard/...` nadarim
import axios from "axios";
import env from "~/env.js";

import BarChart from "~/components/BarChart";

const chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
};

export default {
  middleware:['auth'],
  async asyncData({$axios,store}){
    // env ro peida mikonee :)
            console.log('log 1 from asyncData in procees :' + (process.client ? 'client' : 'server') )

      let response = await $axios.get(env.api.url + "/users/me/accounts", {
          headers: {
            Authorization: "Bearer " + store.state.token,
          },
        })
        .then(async (res) => {
          //console.log("getAccounts", res?.data);
          // inja be self o ina dastrasi nadari
          // bayad to store zakhire koni ya
          // in chizi k goftam ro bayad raayat koni
          // ya to store set kon ya return kon
          // self.accounts = res?.data.accounts;
          // self.selectedAccount = res?.data.accounts[0];
 
          // intori pas bedi :
          return {
            // in accountsi ke inja minevisi mosavi hast ba data 
            // yani engar injast 
            accounts : res?.data.accounts
          } 
          //console.log("selectedAccount", self.selectedAccount);
          
          //self.$store.dispatch("setAccount", self.accounts[0]);
        });
    // this.accounts 
  },
  data() {
    return {
      //  inja
      // harchi az asyncData return mishe engar injast
      title: "حساب کاربری",
      profile: {
        firstName: "",
        lastName: "",
        email: "",
        id: "",
        accounts: [],
        //coins: [],
      },
      accounts: [],
      balances2: [],
      balances: [],
      uploadBalances: false,
      totalamounts__: 0,
      selectedAccount: {},
      editAccount: {
        name: "",
        description: "",
        apiKey: "",
      },
      coins: [],
      amounts: [],
      prices2: [],
      symbols2: [],
      prices: [
        {
          symbol: "",
          price: 0,
        },
      ],
      barChartData: {
        labels: [],
        datasets: [
          {
            label: "coins",
            backgroundColor: [
              "red",
              "orange",
              "yellow",
              "green",
              "blue",
              "violet",
              "red",
              "pink",
              "brown",
              "green",
              "blue",
              "violet",
            ],
            // backgroundColor: [ 
            //   chartColors.red,
            //   chartColors.orange,
            // ],
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
          content: "توضیحات حساب کاربری در این قسمت",
        },
      ],
    };
  },
  created() {
    
  },
  async mounted() {
    await this.getProfile();
    await this.getAccounts();
    await this.getBalances();
    await this.initChart();
    //this.initChart2();
    this.getPrices();
  },

  components: {
    BarChart,
  },

  methods: {
  
    async initChart2() {
      var self = this;
      console.log("-this.balances---------------", this.balances);
      this.getAccounts();
      var accounts = self.accounts;
      var totalcoins = this.balances.map((balance) => balance.coin);
      var totalamounts = this.balances.map((balance) => balance.amount);
      // self.selectedAccount=self.accounts[0] 
      console.log("-totalcoins---------------", totalcoins);
      console.log("-totalamounts---------------", totalamounts);
      // var totalcoins= ['q','s','w','d']
      // var totalamounts= [1,3,2,2]
      //var balances2=await this.getBalances2()
      console.log("-self.accounts---------------", accounts);
      for (let j = 0; j < accounts.length; j++) {
        //self.selectedAccount=accounts[j]
        console.log("-accounts[j]--------------", accounts[j]);
        await this.getBalances2(accounts[j]);
        console.log("this.balances2-------------", this.balances2);
        //self.amounts = await self.getBalanceAmounts()
        var balancescoins = this.balances2.map((balance) => balance.coin);
        var balancesamounts = this.balances2.map((balance) => balance.amount);
        //  var balancescoins= ['q','w','d']
        //  var balancesamounts= [1,3,2]
        console.log("balancescoins--------------", balancescoins);
        console.log("balancesamounts--------------", balancesamounts);
        //  if(totalamounts.length>balancesamounts.length){
        //    let len
        //    len=totalamounts.length
        //    }else{
        //      len=balancesamounts.length
        //    }
        // for(let k=0;k<totalamounts.length;k++){
        //  for(let i=0;i<balancesamounts.length;i++){
        //   if(totalcoins[k]==balancescoins[i]){
        //     if(isNaN(balancesamounts[i]) || isNaN(totalcoins[k])){
        //        balancesamounts[i]=0

        //       totalamounts[k] += balancesamounts[i]
        //     }else{totalamounts[k] += balancesamounts[i]}

        //   }
        //  }
        // }

        // const countries = ['US', 'FR', 'IT']
        // const area = [100, 105, 110, 115, 120, 125, 130]
        // const merged = totalamounts.reduce((merged, c) => {
        //   balancesamounts.forEach((a) => {
        //     merged.push(c + a);
        //   });
        //   return merged;
        // }, []);
        // console.log('merged',merged);

        console.log("-totalamounts---------------", totalamounts);
      }

      // let coins  = await this.getBalanceCoins();
      // let amounts = await this.getBalanceAmounts();
      let chartData2 = Object.assign(this.barChartData2, {});
      // chartData2.labels = total.coins ;
      // chartData2.datasets[0].data = total.amounts ;
      chartData2.labels = ["g", "f", "d"];
      chartData2.datasets[0].data = [1, 2, 3];
      let options = this.barChartOptions;
      this.$refs["chart2"].renderChart(this.chartData2, options);
      //this.updateChart(coins,amounts)
    },
    async initChart() {
      this.selectedAccount = this.$store.state.selectedAccount;
      this.balances = this.$store.state.balances;
      console.log("store.balances", this.$store.state.balances);

      let coins = await this.getBalanceCoins();
      let amounts = await this.getBalanceAmounts();
      let chartData = Object.assign(this.barChartData, {});
      chartData.labels = coins;
      chartData.datasets[0].data = amounts;
      let options = this.barChartOptions;
      this.$refs["chart1"].renderChart(chartData, options);
      //this.updateChart(coins,amounts)
    },
    async updateChart() {
      let coins = await this.getBalanceCoins();
      let amounts = await this.getBalanceAmounts();

      console.log("**********************coins*****",coins);
      console.log("***********************amounts****",amounts);
      let coins2 = coins;
      let amounts2 = amounts;
      //amounts =await this.updateAmounts()
      let chartData = Object.assign(this.barChartData, {});
      // if(coins.length>14){//limit of chartjs in show data
      //   for(let i=0;i<13;i++){
      //     coins2[i]=coins[i]
      //     amounts2[i]=amounts[i]
      //   }
      // }
      chartData.labels = coins2;
      chartData.datasets[0].data = amounts2;
      let options = this.barChartOptions;
      this.$refs["chart1"].renderChart(chartData, options);
    },
    updateAccountData() {
      console.log(this.selectedAccount);
      console.log("***************************");
      // this.$store.state.token =  this.selectedAccount.token,
      this.selectedAccount.id = this.selectedAccount.id;
      this.getBalances();
    },
    setSelectedAccount() {
      const self = this;
      this.selectedAccount = this.$store.state.selectedAccount;
      // this.$store.dispatch("setAccount", self.selectedAccount);
      // console.log(this.selectedAccount);
    },
    async getAccounts() {
      var self = this;
      // self.accounts = this.$store.state.user.accounts
      // self.selectedAccount=self.accounts[0]
      // self.$store.dispatch("setAccount", self.accounts[0]);

      try {
       await axios
          .get(env.api.url + "/users/me/accounts", {
            headers: {
              Authorization: "Bearer " + self.$store.state.token,
            },
          })
          .then(async (res) => {
            // console.log("getAccounts", res?.data);
            self.accounts = res?.data.accounts;
            self.selectedAccount = res?.data.accounts[0];
            await self.getBalances
            //self.$store.dispatch("setAccount", self.accounts[0]);
          });
      } catch {}
    },
    async getBalances() {
      //console.log(this.selectedAccount) 
      var self = this;

      //this.$store.dispatch("setAccount", self.selectedAccount);

      await axios
        .get(env.api.url + "/spot/wallet/balances", {
          headers: {
            Authorization: "Bearer " + self.$store.state.token,
            AccountId: self.selectedAccount.id,
          },
        })
        .then(async (res) => {
          console.log("Balances22222", res?.data);
          self.balances = res?.data.response;
          //self.$store.dispatch("setBalances", res?.data.response);
          //self.uploadBalances=true
          self.coins = await self.getBalanceCoins();
          self.amounts = await self.getBalanceAmounts();
          //this.updateAmounts()
          this.updateChart();
        });
    },
    async getBalances2(account) {
      //console.log(this.selectedAccount)
      var self = this;
      //this.$store.dispatch("setAccount", self.selectedAccount);
      await axios
        .get(env.api.url + "/spot/wallet/balances", {
          headers: {
            Authorization: "Bearer " + self.$store.state.token,
            AccountId: account.id,
          },
        })
        .then(async (res) => {
          self.balances2 = res?.data.response;
          console.log("Balances2did", self.balances2);
        });
    },
    async updateAmounts() {
      var self = this;
      let coins = await self.getBalanceCoins();
      let amounts = await self.getBalanceAmounts();
      for (let i = 0; i < coins.length; i++) {
        for (let j = 0; j < self.symbols2.length; j++) {
          if (coins[i] == self.symbols2[j]) {
            amounts[i] *= self.prices2;
            if (amounts[i] <= 0.00001) {
              //console.log('amounts[i]',amounts[i])
              delete amounts[i];
            }
          }
        }
      }
      return amounts;
    },
    getBalanceAmounts() {
      var self = this;
      var balances2 = this.balances;

      var amounts = [];
      const len = balances2.length;
      for (let i = 0; i < len; i++) {
        var Rounded = parseFloat(balances2[i].amount + 0).toFixed(4);
        //console.log('balances2[i].amount',Rounded)
        amounts.push(Rounded);
        // console.log('balances2[i].amount',balances2[i].amount)
      }

      return amounts;
    },
    getBalanceCoins() {
      var self = this;
      var coins = this.balances.map((balance) => balance.coin);
      return coins;
    },
    async getProfile() {
      var self = this;
      await axios
        .get(env.api.url + "/users/me", {
          headers: {
            Authorization: "Bearer " + self.$store.state.token,
          },
        })
        .then((res) => {
          console.log("profile", res?.data);
          self.profile = res?.data.user;
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    getPrices() {
      const self = this;
      axios.get(env.api.url + "/markets/price").then((res) => {
        console.log("prices", res?.data.response);
        self.prices = res?.data.response;
        self.calCoinPrice();
      });
    },
    calCoinPrice() {
      let self = this;
      let secondCoins2 = "TDSU";
      let symbols = [];
      let pricesNew = [];

      var length2 = this.prices.length;

      for (var i = 0; i < length2; i++) {
        pricesNew.push(self.prices[i].price);
        symbols.push(self.prices[i].symbol);
      }
      //console.log('prices2',prices2)
      for (let i = 0; i < length2; i++) {
        let coinReverse = symbols[i].split("").reverse().join("");
        if (secondCoins2 == coinReverse.slice(0, 4)) {
          //'usdt'
          let length3 = coinReverse.length - 4;
          self.symbols2[i] = symbols[i].slice(0, length3);
          self.prices2[i] = pricesNew[i];
        }
      }
      //give prices2 & symbols2 arrays ,that are prices by usdt ,but symbols array has all pairs
      // console.log('prices2',self.prices2)
      // console.log('symbols2',self.symbols2)
    },
  },
};
</script>