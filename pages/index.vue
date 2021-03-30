<template>
  <div>
    <!-- <div>{{ orderbook }}</div> -->
    <IntroWrapper />
    <StatusWrapper />
    <StepsWrapper />
    <FeaturesWrapper />
    <CoinsWrapper />
    <BlogWrapper />
  </div>
</template>

<script>
import axios from "axios";
import env from "~/env.js";

export default {
  data() {
    return {
      title: "یوتیلیتی",
      orderbook: null,
      avgPrice: null,
      symbols: [],
      Info: null,
      trades: null,
      asks: [],
      bids: [],
      askprice: 0,
      //socketData:[{}],
      // prices:[
      //   {
      //     symbol:'',
      //     price:0
      //     }
      // ]
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "توضیحات صفحه اصلی در این قسمت",
        },
      ],
    };
  },
   
 mounted() {
  //  var self =this
  //   if (window.MozWebSocket) {
  //     window.WebSocket = window.MozWebSocket
  //   }
  //   const websocket = new WebSocket('ws://178.63.203.253:3001/spot/btcusdt')
  //   websocket.onopen = function (evt) {
  //     // onOpen(evt)
  //   }
  //   websocket.onclose = function (evt) {
  //     websocket.close()
  //   }
  //   websocket.onmessage = function (evt) {
  //     //console.log(evt.data)
  //     self.socketData=[{}]
      
  //     console.log('1')
  //     let data2=JSON.parse(evt.data)
  //     self.socketData.push(data2.data)
  //     // if(data2.data.p){
  //     //   console.log(data2.data.p)
  //     //   console.log(data2.data.p)
  //     // }
  //     // else{
  //       let bids=[]
  //       bids=data2.data.bids
  //       console.log(bids)
  //     //}
      
  //   }
  //   websocket.onerror = function (evt) {
  //     console.error(evt.data)
  //   }
  
  },
  computed:{
    // socketData:this.socket.on('message', (data) => {
    //   var data = JSON.parse(data)
    //   console.log(data)
    //   /* Handle event */
    // })
  },
  methods: {
    // getPrices(){
    //    const self =this
    //    axios.get(env.api.url + '/markets/price').then(res => {
    //                 console.log('prices',res?.data.response)
    //                 self.prices = res?.data.response
    //                 self.calCoinPrice()
    //                 })
          
    //  },
     
    
    
    // method1() {
    //   /* Emit events */
    //   this.socket.emit('method1', {
    //     hello: 'world' 
    //   }, (resp) => {
    //     /* Handle response, if any */
    //   })
    // }
    // funcs: async function () {
    //   console.log(Binance);
      //console.log(this.Binance)
     // const client = Binance();

      // this.orderbook = await client.book({ symbol: "ETHBTC" });
      // console.log("book2", this.orderbook);
      //   this.asks = this.orderbook.asks;
      //   this.bids = this.orderbook.bids;
      //   console.log("asks", this.asks);
      //   this.Info = await client.exchangeInfo();
      //   this.symbols = this.Info.symbols;
      //   console.log("symbols", this.symbols);
      //   this.trades = await client.trades({ symbol: "ETHBTC" });
      //   console.log("trades", this.trades);
      //   this.avgPrice = await client.avgPrice({ symbol: "ETHBTC" });
      //   console.log("avgPrice", this.avgPrice);
    // },
    // socket(){
    //   var self = this;
    //   const client = Binance();
    //   client.ws.depth('ETHBTC', depth => {
    //     dep=depth
    //     console.log(dep)
    //     })
    // }
  },

};
</script>