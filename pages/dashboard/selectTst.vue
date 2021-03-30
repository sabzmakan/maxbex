<template>
  <div class="wrapper">
    <div class="container">
      <model-select :options="currencies"
       class="form-control"
                    type="search"
                    name="change-coin"
                    style="flex: 1"
                    id="change-coin"
                    
       >
      </model-select>

      <!-- string value -->
      <model-select
        :options="options2"
        v-model="selectedCurrencyPair"
        @change="getCurrency()"
        placeholder="select item2"
      >
      </model-select>
    </div>
  </div>
</template>

<script>
import "vue-search-select/dist/VueSearchSelect.css";
import { ModelSelect } from "vue-search-select";
import axios from "axios";
//import vSelect from "vue-select";

import env from "~/env.js";
export default {
  data() {
    return {
      selectedCurrencyPair: "BTCUSDT",
      currencies: [],




      // options: [
      //   { value: "1", text: "aa" + " - " + "1" },
      //   { value: "2", text: "ab" + " - " + "2" },
      //   { value: "3", text: "bc" + " - " + "3" },
      //   { value: "4", text: "cd" + " - " + "4" },
      //   { value: "5", text: "de" + " - " + "5" },
      // ],
      item: {
        value: "",
        text: "",
      },
      options2: [
        { value: "1", text: "aa" + " - " + "1" },
        { value: "2", text: "ab" + " - " + "2" },
        { value: "3", text: "bc" + " - " + "3" },
        { value: "4", text: "cd" + " - " + "4" },
        { value: "5", text: "de" + " - " + "5" },
      ],
      item2: "",
    };
  },
  mounted(){

    this.getCurrencies();
  },
  methods: {
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







    reset() {
      this.item = {};
    },
    selectFromParentComponent1() {
      // select option from parent component
      this.item = this.options[0];
    },
    reset2() {
      this.item2 = "";
    },
    selectFromParentComponent2() {
      // select option from parent component
      this.item2 = this.options2[0].value;
    },
  },
  components: {
    ModelSelect,
  },
};
</script>