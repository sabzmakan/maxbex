<template>
  <div class="dashboard">
    <button class="back-btn" @click="$router.back()"><i class="far fa-arrow-left"></i></button>

    <!-- <ApiModal /> -->
    <!-- <DashMenu /> -->
    <div class="main-content">
      <div class="tradingview-widget-container">
        <div id="tradingview_79fd0"></div>
      </div>

      <div class="mt-3"></div>

      <div class="row mx-2">
        <div class="col-12">
          <div class="widget-style flex">
            <!-- <div class="widget-header">
              <div class="widget-title">تغییر ارز</div>
              <span>ارز مورد نظر خود را تغییر دهید</span>
            </div> -->
            <div class="widget-body">
              <div class="row mx-0">
                <div class="col-12">
                  <select
                    class="form-control"
                    type="search"
                    name="change-coin"
                    style="flex: 1"
                    id="change-coin"
                    v-model="selectedCurrencyPair"
                    @change="getCurrency()"
                  >
                    <option :value="null" :id="1" :key="1" selected disabled>
                      ارز مورد نظر خود را انتخاب کنید
                    </option>
                    <option
                      v-for="item2 in currencies"
                      :value="item2"
                      :key="item2.id"
                    >
                      {{ item2 }}
                    </option>
                  </select>
                </div>

                <div class="col-12">
                  <select
                    class="form-control"
                    name="change-account"
                    style="flex: 2"
                    id="change-account"
                    v-model="selectedAccount"
                    @change="getBalances()"
                  >

                  <!-- <model-select 
                    class="form-control"
                    name="change-account" 
                    style="flex: 2" 
                    id="change-account" 
                    v-model="selectedAccount" 
                    @change="getBalances()">
                  </model-select> -->

                    <option :value="null" :id="1000" :key="1" disabled>
                      اکانت مورد نظر خود را انتخاب کنید
                    </option>
                    <option
                      v-for="item in accounts"
                      :value="item"
                      :key="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>

                <div class="col-12">
                  <!-- <v-select :options="options"></v-select> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mx-2">
        <div class="col-sm-6 col-md-3">
          <div class="widget-style">
            <div class="widget-header">
              <div><span class="fw-700">قیمت</span></div>
              <div><span class="fw-700">مقدار</span></div>
            </div>
            <div class="widget-body">
              <div></div>
              <div class="rowLine" v-for="(ask, index) in asks" :key="index">
                <div class="green-color">{{ ask[0] }}</div>
                <div class="green-color">{{ ask[1] }}</div>
                <!-- <div class="green-color">{{ Rounding(ask.price) }}</div>
              <div class="red-color">{{ Rounding(ask.quantity) }}</div> -->
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-md-3">
          <div class="widget-style">
            <div class="widget-header">
              <div><span class="fw-700">قیمت</span></div>
              <div><span class="fw-700">مقدار</span></div>
            </div>
            <div class="widget-body">
              <div class="rowLine" v-for="(bid, index2) in bids" :key="index2">
                <div class="red-color">{{ bid[0] }}</div>
                <div class="red-color">{{ bid[1] }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="widget-style">
            <div class="widget-header">
              <div class="d-flex flex-1">
                <button
                  @click="side = 'BUY'"
                  :class="
                    side == 'BUY'
                      ? 'btn btn-success w-50 mx-0 ml-2 py-2'
                      : 'btn btn-secondary w-50 mx-0 ml-2 py-2'
                  "
                >
                  خرید
                </button>
                <button
                  @click="side = 'SELL'"
                  :class="
                    side == 'SELL'
                      ? 'btn btn-danger w-50 mx-0 py-2'
                      : 'btn btn-secondary w-50 mx-0 py-2'
                  "
                >
                  فروش
                </button>
              </div>
              <div class="flex-1 mr-3">
                <select
                  class="form-control"
                  name="change-account"
                  id="change-account"
                  v-model="selectedTradeType"
                  @change="selectTradeType()"
                >
                  <option
                    v-for="type in tradeTypes"
                    :value="type"
                    :key="type.id"
                  >
                    {{ type }}
                  </option>
                </select>
              </div>
            </div>
            <div class="widget-body">
              <form class="row m-0" action="" v-on:submit.prevent="makeOrder()">
                <div v-if="selectedTradeType == 'OCO'" class="col-md-12">
                  <label for="buyprice" class="d-flex justify-content-between">
                    <span>Limit</span>
                    <span>{{ secoundCoin }} </span>
                  </label>
                  <input
                    step="0.0000000000001"
                    name="limitprice"
                    id="limitprice"
                    v-model="stopLimitPrice"
                    class="form-control"
                    type="number"
                  />
                </div>

                <div
                  v-if="
                    selectedTradeType == 'Stop Limit' ||
                    selectedTradeType == 'OCO'
                  "
                  class="col-md-12"
                >
                  <label for="buyprice" class="d-flex justify-content-between">
                    <span>stop</span>
                    <span>{{ secoundCoin }} </span>
                  </label>
                  <input
                    step="0.0000000000001"
                    name="stopprice"
                    id="stopprice"
                    v-model="stopPrice"
                    class="form-control"
                    type="number"
                  />
                </div>
                <div v-if="selectedTradeType != 'Market'" class="col-md-6">
                  <label for="buyprice" class="d-flex justify-content-between">
                    <span>قیمت</span>
                    <span>{{ secoundCoin }} </span>
                  </label>
                  <input
                    step="0.0000000000001"
                    name="buyprice"
                    id="buyprice"
                    v-model="trade.price"
                    class="form-control"
                    type="number"
                  />
                </div>

                <!-- ------------ -->

                <div v-if="selectedTradeType == 'Market'" class="d-flex flex-1">
                  <button
                    @click="marketType = 'Amount'"
                    :class="
                      (marketType = 'Amount'
                        ? 'btn btn-gray w-50 mx-0 ml-2 py-2'
                        : 'btn btn-secondary w-50 mx-0 ml-2 py-2')
                    "
                  >
                    Amount
                  </button>
                  <button
                    @click="marketType = 'Total'"
                    :class="
                      (marketType = 'Total'
                        ? 'btn btn-light w-50 mx-0 py-2'
                        : 'btn btn-secondary w-50 mx-0 py-2')
                    "
                  >
                    Total
                  </button>
                </div>

                <div class="col-md-6">
                  <label for="buyamount" class="d-flex justify-content-between">
                    <span>مقدار</span>
                    <span>{{ firstCoin }} </span>
                  </label>
                  <input
                    step="0.0000000000001"
                    name="buyamount"
                    id="buyamount"
                    v-model="trade.amount"
                    class="form-control"
                    type="number"
                  />
                </div>

                <div class="col-6 col-md-3 text-center">
                  <input
                    type="radio"
                    class="btn-check"
                    name="buyradio"
                    id="buyradio1"
                    autocomplete="off"
                  />
                  <!-- <label
                    class="btn btn-outline-secondary border"
                    for="buyradio1"
                    >25%</label
                  >
                </div>
                <div class="col-6 col-md-3 text-center">
                  <input
                    type="radio"
                    class="btn-check"
                    name="buyradio"
                    id="buyradio2"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-outline-secondary border"
                    for="buyradio2"
                    >50%</label
                  >
                </div>
                <div class="col-6 col-md-3 text-center">
                  <input
                    type="radio"
                    class="btn-check"
                    name="buyradio"
                    id="buyradio3"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-outline-secondary border"
                    for="buyradio3"
                    >75%</label
                  >
                </div>
                <div class="col-6 col-md-3 text-center">
                  <input
                    type="radio"
                    class="btn-check"
                    name="buyradio"
                    id="buyradio4"
                    autocomplete="off"
                  />
                  <label
                    class="btn btn-outline-secondary border"
                    for="buyradio4"
                    >100%</label
                  > -->
                </div>

                <div v-if="selectedTradeType != 'Market'" class="col-12">
                  <label for="lastPrice" class="d-flex justify-content-between">
                    <span>مبلغ نهایی</span>
                    <span>{{ secoundCoin }} </span>
                  </label>
                  <input
                    class="form-control"
                    name="lastPrice"
                    id="lastPrice"
                    value="35450"
                    v-model="computeTotal"
                    disabled
                  />
                </div>

                <div class="col-12">
                  <div
                    v-if="side == 'SELL'"
                    class="d-flex justify-content-between"
                  >
                    <span>موجودی:</span>
                    <div
                      v-for="balance in balances"
                      :value="balance"
                      :key="balance.id"
                    >
                      <span v-if="balance.coin == firstCoin" class="ltr-text">
                        {{ balance.free }} {{ firstCoin }}
                      </span>
                    </div>
                  </div>

                  <div
                    v-if="side == 'BUY'"
                    class="d-flex justify-content-between"
                  >
                    <span>موجودی:</span>
                    <div
                      v-for="balance in balances"
                      :value="balance"
                      :key="balance.id"
                    >
                      <span v-if="balance.coin == secoundCoin" class="ltr-text">
                        {{ balance.free }} {{ secoundCoin }}
                      </span>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <button
                    @v-on:submit.prevent="makeOrder()"
                    :class="
                      side == 'BUY'
                        ? 'btn btn-success w-100 mx-0'
                        : 'btn btn-danger w-100 mx-0'
                    "
                  >
                    <div v-if="side == 'BUY'">خرید</div>
                    <div v-else>فروش</div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="row mx-2">
        <div class="col-12 mb-15">
          <div class="widget-style">
            <div class="widget-header">
              <div class="widget-title">open orders</div>
            </div>
            <div class="widget-body">
              <div v-if="showOpenOrders" class="widget-style flex">
                <div class="widget-body">
                  <div class="row mx-0">
                    <ul>
                      <li v-for="Order in openOrders" :key="Order.orderId">
                        <div>{{ Order.symbol }}</div>
                        <div>{{ Order.orderId }}</div>
                        <!-- <div>{{Order.orderdivstId}}</div> <div>{{Order.cdiventOrderId}}</div> -->
                        <div>{{ Order.price }}</div>
                        <div>{{ Order.origQty }}</div>
                        <!-- <div>{{Order.executedQty}}</div> <div>{{Order.cummulativeQuoteQty}}</div>
                  <div>{{Order.status}}</div> <div>{{Order.timeInForce}}</div> -->
                        <div>{{ Order.type }}</div>
                        <div>{{ Order.side }}</div>

                        <button
                          class="btn btn-danger hint--top"
                          aria-label="delete order"
                          @click="deleteOrderItem(Order.orderId)"
                        >
                          <i class="fal fa-trash"></i>
                        </button>
                        <!-- <div>{{Order.stopPrice}}</div>
                  <div>{{Order.icebergQty}}</div> <div>{{Order.time}}</div>
                  <div>{{Order.isWorking}}</div> <div>{{Order.origQuoteOrderQty}}</div> -->
                      </li>
                    </ul>
                  </div>
                </div>
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
import vSelect from "vue-select";

import env from "~/env.js";

import "vue-search-select/dist/VueSearchSelect.css";
import { ModelSelect } from "vue-search-select";

// import Binance from "binance-api-node";
// var self = this;
//  var dep=1
//  const client = Binance();
// client.ws.depth('ETHBTC', depth => {
//   dep=depth

//   console.log(dep)
// })
//setInterval(function(){ alert("Hello"); }, 3000);

export default {
  components: {
    ModelSelect,
  },

  data() {
    return {
      title: "صفحه Trade",
      firstCoin: "BTC",
      secoundCoin: "USDT",
      side: "BUY",
      accounts: [],
      balances: [],
      currencies: [],
      oneCoinAmount: 0,
      selectedAccount: null,
      selectedOpenOrder: "",
      selectedTradeType: "Limit",
      tradeTypes: ["Limit", "Market", "Stop Limit", "OCO"],
      selectedCurrencyPair: "BTCUSDT",
      trade: {
        amount: 0,
        price: 0,
      },
      stopPrice: 0,
      stopLimitPrice: 0,
      marketType: "Amount",
      characters: [],
      apiData: null,
      orderResponse: null,
      openOrders: [],
      showOpenOrders: false,
      res: {},
      asks: [],
      bids: [],
      //socketData:[{}],
      socket: null,
      socketData: null,
      socketUrl: "ws://178.63.203.253:3001/spot/btcusdt",
      //websocket:{}
    };
  },
  // computed:{
  //   totalPrice=parseInt(trade.amount)*parseInt(trade.price)
  // },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "توضیحات صفحه Trade در این قسمت",
        },
      ],
    };
  },
  mounted() {
    var self = this;
    this.getAccounts();
    this.getChart();
    this.getCurrencies();
    //this.getOpenOrders()
    //this.getCoins()

    this.createNewSocketInstance();
    this.socket.addEventListener("open", (response) => {
      console.log(response);
    });
    this.socket.addEventListener("error", (error) => {
      console.log(error);
    });
    this.socket.addEventListener("message", (message) => {
      // this.socketData = message
      let data2 = JSON.parse(message.data);
      // if(data2.data.p){
      //   console.log(data2.data.p)
      //   console.log(data2.data.p)
      // }
      // else{
      self.bids = data2.data.bids;
      self.asks = data2.data.asks;
      //}
      //console.log(data2.data.asks)
    });
  },
  methods: {
    createNewSocketInstance() {
      if (window.MozWebSocket) {
        window.WebSocket = window.MozWebSocket;
      }
      if (this.socket) this.closeSocketInstance();
      this.socket = new WebSocket(this.socketUrl);
    },
    closeSocketInstance() {
      this.socket.close();
    },
    Rounding: function (askPrice) {
      // this.askprice=askPrice.toFixed(5);
      // return this.askprice;
      return parseFloat(askPrice).toFixed(5);
    },
    // printdep(){
    //   console.log('dep',this.dep)
    // },
    deleteOrderItem(order_Id) {
      //this.orderId =orderId
      var self = this;
      try {
        const params = {
          symbol: self.selectedCurrencyPair,
          orderId: order_Id,
        };
        const headers = {
          Authorization: `Bearer ${self.$store.state.token}`,
          AccountId: self.selectedAccount.id,
        };
        axios
          .delete(env.api.url + "/spot/trade/cancelOrder", {
            params: params,
            headers: headers,
          })
          .then((res) => {
            console.log("cancelOrder", res?.data);
            alert("deleted succesfully");
            self.getOpenOrders();
          })
          .catch((err) => {
            console.log(err);
          });
      } catch {}
    },
    getChart() {
      var self = this;
      return new TradingView.widget({
        width: 980,
        height: 610,
        symbol: `BINANCE:${self.selectedCurrencyPair}`,
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: true,
        withdateranges: true,
        range: "YTD",
        hide_side_toolbar: false,
        allow_symbol_change: true,
        watchlist: [
          // "BINANCE:BTCUSDT",
          // "BINANCE:ETHUSDT"
        ],
        // "details": true,
        // "hotlist": true,
        // "calendar": true,
        studies: ["MACD@tv-basicstudies"],
        show_popup_button: true,
        popup_width: "1000",
        popup_height: "650",
        no_referral_id: true,
        container_id: "tradingview_79fd0",
      });
    },
    getAccounts() {
      var self = this;
      console.log(this.selectedAccount);

      axios
        .get(env.api.url + "/users/me/accounts", {
          headers: {
            Authorization: "Bearer " + self.$store.state.token,
          },
        })
        .then((res) => {
          console.log("getAccounts", res?.data);
          self.accounts = res?.data.accounts;
        });
    },
    getBalances() {
      console.log(this.selectedAccount);
      this.showOpenOrders = true;
      this.getOpenOrders();
      var self = this;
      axios
        .get(env.api.url + "/spot/wallet/balances", {
          headers: {
            Authorization: "Bearer " + self.$store.state.token,
            AccountId: self.selectedAccount.id,
          },
        })
        .then((res) => {
          console.log("Balances", res?.data);
          self.balances = res?.data.response;
        });
    },
    makeOrder() {
      var self = this;
      if (!self.selectedAccount) {
        alert("لطفا اکانت مورد نظر خود را انتخاب کنید");
      } else {
        if (self.selectedTradeType == "Limit") {
          console.log("selectedAccount", this.selectedAccount);

          const params = {
            symbol: self.selectedCurrencyPair,
            side: self.side,
            quantity: self.trade.amount,
            price: self.trade.price,
          };
          const headers = {
            Authorization: `Bearer ${self.$store.state.token}`,
            AccountId: self.selectedAccount.id,
          };
          try {
            axios
              .post(
                env.api.url + "/spot/trade/limitOrder",
                {},
                { params: params, headers: headers }
              )
              .then((res) => {
                //console.log('trade',res?.data)
                console.log(res);
                alert("order successfully added");
                self.getOpenOrders();
                // self.orderResponse = res?.data.response
              })
              .catch((err) => {
                console.log(err.response);
                var reqError = err.response.data.error;
                reqError = reqError + "";
                alert(reqError);
              });
          } catch {}
        } //end of limit

        if (self.selectedTradeType == "Market") {
          console.log("selectedAccount", this.selectedAccount);

          const params = {
            symbol: self.selectedCurrencyPair,
            side: self.side,
            quantity: self.trade.amount,
            //price:self.trade.price
          };
          const headers = {
            Authorization: `Bearer ${self.$store.state.token}`,
            AccountId: self.selectedAccount.id,
          };
          try {
            axios
              .post(
                env.api.url + "/spot/trade/marketOrder",
                {},
                { params: params, headers: headers }
              )
              .then((res) => {
                //console.log('trade',res?.data)
                console.log(res);
                alert("order succefully created");
                // self.orderResponse = res?.data.response
              })
              .catch((err) => {
                console.log(err.response.message);
                var reqError = err.response.data.error;
                reqError = reqError + "";
                alert(reqError);
              });
          } catch {}
        } //end of market

        if (self.selectedTradeType == "Stop Limit") {
          console.log("selectedAccount", this.selectedAccount);

          const params = {
            symbol: self.selectedCurrencyPair,
            side: self.side,
            quantity: self.trade.amount,
            price: self.trade.price,
            stopPrice: self.stopPrice,
          };
          const headers = {
            Authorization: `Bearer ${self.$store.state.token}`,
            AccountId: self.selectedAccount.id,
          };
          try {
            axios
              .post(
                env.api.url + "/spot/trade/stopLossLimit",
                {},
                { params: params, headers: headers }
              )
              .then((res) => {
                //console.log('trade',res?.data)
                console.log(res);
                alert("order succefully created");
                // self.orderResponse = res?.data.response
              })
              .catch((err) => {
                console.log(err.response);
                var reqError = err.response.data.error;
                reqError = reqError + "";
                alert(reqError);
              });
          } catch {}
        } //end of stop limit

        if (self.selectedTradeType == "OCO") {
          console.log("selectedAccount", this.selectedAccount);

          const params = {
            symbol: self.selectedCurrencyPair,
            side: self.side,
            quantity: self.trade.amount,
            price: self.trade.price,
            stopPrice: self.stopPrice,
            stopLimitPrice: self.stopLimitPrice,
          };
          const headers = {
            Authorization: `Bearer ${self.$store.state.token}`,
            AccountId: self.selectedAccount.id,
          };
          try {
            axios
              .post(
                env.api.url + "/spot/trade/OCO",
                {},
                { params: params, headers: headers }
              )
              .then((res) => {
                //console.log('trade',res?.data)
                console.log(res);
                alert("order succefully created");
                // self.orderResponse = res?.data.response
              })
              .catch((err) => {
                console.log(err.response);
                var reqError = err.response.data.error;
                reqError = reqError + "";
                alert(reqError);
              });
          } catch {}
        } //end of OCO
      } //end of else(selecctAccount)
    },
    selectTradeType() {
      console.log(this.selectedTradeType);
    },
    getCurrency() {
      var self = this;
      const lowerPair = this.selectedCurrencyPair.toLowerCase();
      //window.websocket.close()
      // window.websocket.onclose = function (evt) {
      //   websocket.close()
      // }
      if (window.MozWebSocket) {
        window.WebSocket = window.MozWebSocket;
      }
      if (this.socket) this.closeSocketInstance();
      this.socket = new WebSocket(`ws://178.63.203.253:3001/spot/${lowerPair}`);

      this.socket.addEventListener("message", (message) => {
        // this.socketData = message
        let data2 = JSON.parse(message.data);
        // if(data2.data.p){
        //   console.log(data2.data.p)
        //   console.log(data2.data.p)
        // }
        // else{
        self.bids = data2.data.bids;
        self.asks = data2.data.asks;
        //}
        // console.log(data2.data.asks)
      });

      const secondCoins = [
        "CTB",
        "HTE",
        "BNB",
        "XAP",
        "PRX",
        "XRT",
        "NGN",
        "BUR",
        "YRT",
        "LRB",
        "RAZ",
        "DSU",
        "PBG",
        "HAU",
        "DUA",
        "IAD",
        "RUE",
      ];
      const secondCoins2 = [
        "TDSU",
        "CDSU",
        "DSUB",
        "WRKB",
        "TRDI",
        "RDIB",
        "DNVB",
      ];
      console.log(this.selectedCurrencyPair);
      const coinReverse = this.selectedCurrencyPair
        .split("")
        .reverse()
        .join("");
      // if(true){
      //   console.log(coinReverse.slice(0,3)== ('CTB'||'HTE'))
      //   console.log(('CTB'||'HTE'))
      // }
      var checked = false;
      var length2 = this.selectedCurrencyPair.length - 4;
      var length1 = this.selectedCurrencyPair.length - 3;
      for (var i = 0; i < secondCoins2.length; i++) {
        if (secondCoins2[i] == coinReverse.slice(0, 4)) {
          self.firstCoin = this.selectedCurrencyPair.slice(0, length2);
          self.secoundCoin = secondCoins2[i].split("").reverse().join("");
          console.log("first", self.firstCoin);
          console.log("second", self.secoundCoin);
          checked = true;
        }
      }
      if (!checked) {
        for (var i = 0; i < secondCoins.length; i++) {
          if (secondCoins[i] == coinReverse.slice(0, 3)) {
            self.firstCoin = this.selectedCurrencyPair.slice(0, length1);
            self.secoundCoin = secondCoins[i].split("").reverse().join("");
            console.log("first", self.firstCoin);
            console.log("second", self.secoundCoin);
          }
        }
      }
    },
    getCurrencies() {
      self = this;
      axios.get(env.api.url + "/markets/exchangeInfo").then((res) => {
        console.log("currencies", res?.data);
        self.currencies = res?.data.symbols;
      });
    },
    getOpenOrders() {
      self = this;
      self.showOpenOrders = true;
      const params = { symbol: self.selectedCurrencyPair };
      axios
        .get(env.api.url + "/spot/trade/openOrders", {
          params,
          headers: {
            Authorization: "Bearer " + self.$store.state.token,
            AccountId: self.selectedAccount.id,
          },
        })
        .then((res) => {
          console.log("openOrders", res?.data.response);
          self.openOrders = res?.data.response;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  computed: {
    computeTotal() {
      return parseFloat(this.trade.amount) * parseFloat(this.trade.price);
    },
    // ,
    // computeOpenrders(){
    //   return this.openOrders
    // }
  },
  // asyncData(context){
  //   return new Promise((resolve, reject)=>{
  //     setTimeout(()=>{
  //       resolve({
  //         loadedData: client.book({ symbol: 'ETHBTC' })
  //       })
  //   },1000)
  //   }).catch(e=>{context.error(new Error())})
  // },
  // asyncData(context,callback){
  //   setTimeout(()=>{
  //     callback(null,{
  //       loadedData:[
  //         {id:1},
  //         {id:1}
  //       ]
  //     })
  //   },1000)
  // },
  //   asyncData(vuexContext,context){
  //     setTimeout(()=>{
  //       //const self=this
  //       //const dep2=[]
  //      // console.log('vuexContext',vuexContext.store._actions)
  //       //context.commit('setBiData',depth)
  //       client.ws.depth('ETHBTC', depth => {
  //        // const dep=[]
  //        // dep.push({...depth.bidDepth})
  //   console.log(depth)

  // })
  //     },1000)
  //   },

  watch: {
    trade: {
      handler: function (val, oldVal) {
        if (parseInt(val.amount) < 0) {
          alert("enter positive amount");
          this.trade.amount = 1;
        }
      },
      handler: function (val, oldVal) {
        if (parseInt(val.price) < 0) {
          alert("enter positive amount");
          this.trade.price = 1;
        }
      },
      deep: true,
    },
    // totalPrice(newval){
    //   this.totalPrice=parseInt(this.trade.amount) + parseInt(this.trade.price)

    // }
    // handler:function (val){
    //   this.totalPrice = parseInt(this.trade.amount) + parseInt(this.trade.price)
    // }
  },
};
</script>

<style scoped>
.rowLine {
  display: flex;
  justify-content: space-between;
}

.flex-1 {
  flex: 1;
}

.rowLine > div p {
  text-align: center;
}

select:invalid {
  color: gray;
}
</style>