<template>
  <div class="dashboard">
    <ApiModal />
    <DashMenu />

    <div class="main-content">
      <WelcomeBox />
      <AccountStatus :profile="profile" />

      <div class="row">
        <div class="col-12">
          <div class="widget-style mb-3">
            <div class="widget-header">
              <div>
                <!-- <NuxtLink to="/dashboard/chart" class="btn btn-primary"
                  >ورود به صفحه ترید</NuxtLink
                > -->
                <NuxtLink
                  to="/dashboard/account-details"
                  class="btn btn-primary"
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
                    v-for="item in $store.state.user.accounts"
                    :value="item"
                    :key="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </form>
            </div>
            <div class="widget-body">
              <div class="row mx-0">
                <div class="col-md-6">
                  <div v-if="selectedAccount" class="account-item">
                    <div class="pl-2 wrapping">
                      <p class="title">
                        نام اکانت : {{ selectedAccount.name }}
                      </p>
                      <p class="desc wrapping">
                        apiKey
                        {{ selectedAccount.apiKey }}
                      </p>
                      <p class="desc">
                        توضیحات
                        {{ selectedAccount.description }}
                      </p>
                    </div>
                    <div class="pr-2">
                      <button
                        class="btn btn-secondary hint--top"
                        aria-label="ادیت اکانت"
                        data-toggle="collapse"
                        data-target="#editBox"
                        aria-expanded="false"
                        aria-controls="editBox"
                      >
                        <i class="fal fa-pen"></i>
                      </button>
                      <button
                        class="btn btn-danger hint--top"
                        aria-label="حذف اکانت"
                        @click="deleteAccoutItem()"
                      >
                        <i class="fal fa-trash"></i>
                      </button>
                    </div>
                  </div>

                  <div class="collapse" id="editBox">
                    <div class="card card-body p-0">
                      <form
                        class="row"
                        action=""
                        v-on:submit.prevent="editAccoutItem()"
                      >
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            name="account-name"
                            id="account-name"
                            placeholder="اسم اکانت"
                            v-model="editAccount.name"
                          />
                        </div>
                        <!-- <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            name="account-api"
                            id="account-api"
                            placeholder="API"
                            v-model="editAccount.apiKey"
                          />
                        </div>
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            name="account-secretKey"
                            id="account-secretKey"
                            placeholder="Secret Key"
                          />
                        </div> -->
                        <div class="col-12">
                          <textarea
                            class="form-control"
                            name="account-description"
                            id="account-description"
                            placeholder="توضیحات اکانت"
                            v-model="editAccount.name"
                          ></textarea>
                        </div>
                        <div class="col-12">
                          <div class="text-left">
                            <button
                              class="btn btn-green"
                              v-on:submit.prevent="editAccoutItem()"
                            >
                              ثبت و ارسال
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div v-if="$store.state.balances" class="col-md-6">
                  <!-- <bar-chart
                  ref="chart1"
                  id="myChart"
                    :data="barChartData"
                    :options="barChartOptions"
                    :height="200"
                  /> -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="col-md-5">
          <div class="alert-box mb-3">
            <a href="#">
              به دلیل فعالیت های پیگیرانه شما در مکس بکس، از ۴۰ درصد تخفیف
              بهرمند شدید!
            </a>
          </div>

          <div class="widget-style mt-3">
            <div class="widget-header">
              <div class="widget-title">آخرین اطلاعیه ها</div>
            </div>
            <div class="widget-body">
              <a href="#" class="news-item">
                <span class="text-right"
                  >هم اکنون اپلیکیشن نسخه اندروید مکس بکس در دسترس است</span
                >
                <span class="text-left">۲۴ اسفند ۱۳۹۸</span>
              </a>
              <a href="#" class="news-item">
                <span class="text-right"
                  >در سال ۲۰۲۱ بیشتر رشد بیتکوین را خواهیم دید</span
                >
                <span class="text-left">۷ خرداد ۱۳۹۹</span>
              </a>
              <a href="#" class="news-item">
                <span class="text-right"
                  >هم اکنون اپلیکیشن نسخه IOS مکس بکس را دانلود کنید</span
                >
                <span class="text-left">۲۴ اسفند ۱۳۹۸</span>
              </a>
            </div>
          </div>

          <div class="widget-style mt-3">
            <div class="widget-header">
              <div class="widget-title"><a href="#">مرکز وظایف</a></div>
              <div class="fw-300 text-color">انجام بدید، جایزه ببرید</div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import env from "~/env.js";
//import Binance from "binance-api-node";
//const client = Binance();

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
  middleware: ["check-auth", "auth"],
  data() {
    return {
      title: "داشبورد",
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

      barChartData2: {
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
          content: "توضیحات داشبورد در این قسمت",
        },
      ],
    };
  },
  created() {},
  mounted() {
    this.getProfile();
    this.getAccounts();
    this.getBalances();
    this.initChart();
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
      console.log("store.balances", self.$store.state.balances);

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
    deleteAccoutItem() {
      // confirm("آیا مطمئن هستید؟");
      self = this;
      try {
        axios
          .delete(env.api.url + "/users/me/accounts", {
            headers: {
              Authorization: "Bearer " + self.$store.state.token,
              AccountId: "" + self.selectedAccount.id,
            },
          })
          .then((res) => {
            console.log("editAccounts", res?.data);
            alert("deleted succesfully");
          });
      } catch {}
      this.getAccounts();
    },
    editAccoutItem() {
      self = this;
      try {
        axios
          .post(env.api.url + "/users/me/updateAccounts", self.editAccount, {
            headers: {
              Authorization: "Bearer " + self.$store.state.token,
              AccountId: "" + self.selectedAccount.id,
            },
          })
          .then((res) => {
            console.log("editAccounts", res?.data);
            alert("edited succesfully");
            self.getAccounts();
          });
      } catch {}
    },
    getAccounts() {
      var self = this;
      // self.accounts = this.$store.state.user.accounts
      // self.selectedAccount=self.accounts[0]
      // self.$store.dispatch("setAccount", self.accounts[0]);

      try {
        axios
          .get(env.api.url + "/users/me/accounts", {
            headers: {
              Authorization: "Bearer " + self.$store.state.token,
            },
          })
          .then((res) => {
            console.log("getAccounts", res?.data);
            self.accounts = res?.data.accounts;
            self.selectedAccount = res?.data.accounts.pop();
            //self.$store.dispatch("setAccount", self.accounts[0]);
          });
      } catch {}
    },
    getBalances() {
      //console.log(this.selectedAccount)
      var self = this;

      //this.$store.dispatch("setAccount", self.selectedAccount);

      axios
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
        //amounts.push(balances2[i].amount)
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
    getProfile: function () {
      var self = this;
      axios
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
  // computed:{
  //   total_balances(){
  //     return this.totalamounts__.reducer((this.total.item)=>{return total+=item.balance})
  //   }
  // }
};
</script>
<style scoped>
.wrapping {
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}
</style>