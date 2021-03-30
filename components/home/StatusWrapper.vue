<template>
  <section  class="status-wrapper wrapper">

    <div v-if="!!markets" class="container">
      <div class="row">
        <div class="col-6 col-lg-3">
          <div class="status-item">
            <img src="~/assets/images/home/status/01.svg" alt="سکه ها" />
            <!-- <i class="far fa-coins"></i> -->
            <p class="title">Vol 24h</p>
            <p class="count">market Vol: {{markets.volume24h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}  </p>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="status-item">
            <!-- <i class="fal fa-exchange-alt"></i> -->
            <img src="~/assets/images/home/status/02.svg" alt="سکه ها" />
            
            <p class="title">marketCaps</p>
            <p class="count">marketCap: {{markets.marketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</p>
            <p class="count">BTC: {{markets.btc.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} </p>
            <p class="count">ETH: {{markets.eth.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} </p>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="status-item">
            <!-- <i class="fal fa-hourglass-start"></i> -->
            <img src="~/assets/images/home/status/03.svg" alt="سکه ها" />
            
            <p class="title">ETH</p>
            <!-- <p class="count">price: {{markets.eth.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} </p> -->
             <p class="count">dominance: {{markets.eth.dominance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} </p>
            <p class="count">price change :{{markets.eth.price_change.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} </p>
            <p class="count">change percent :{{markets.eth.price_change_pct.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}% </p>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="status-item">
            <img src="~/assets/images/home/status/04.svg" alt="سکه ها" />
            <!-- <i class="far fa-signal"></i> -->
            <p class="title">BTC</p>
            <!-- <p class="count">price: {{markets.btc.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} </p> -->
            <p class="count">dominance: {{markets.btc.dominance}} </p>
            <p class="count">price change :{{markets.btc.price_change}} </p>
            <p class="count">change percent:{{markets.btc.price_change_pct}}% </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!markets" class="container">
      در حال بارگذاری  ...
    </div>
  </section>
</template>

<script>
import axios from "axios";
import env from "~/env.js";

export default {
  data() {
    return {
      title: "یوتیلیتی ",
      markets:null,
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
    this.getMarkets();
  },
  methods:{
     getMarkets(){
       const self =this
       axios.get(env.api.url + '/markets/').then(res => {
                    console.log('markets',res?.data.response)
                    self.markets = res?.data.response
                    })
     }
  }
};
</script>
<style scoped>
/* .fix-height {
  height: 310px;
  min-height: 310px;
  max-height: 310px;
} */
</style>