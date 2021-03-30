<template>
  <section class="coins-wrapper">
    <div class="container">
      <flickity
        class="coins-carousel"
        ref="flickity"
        :options="flickityOptions"
      >
        <div class="carousel-cell">
          <div class="coin-item">
            <!-- <p class="amount black">+1.65%</p> -->
            <p class="title">بیت کوین</p>
            <p class="price black">{{BTCUSDT}}</p>
          </div>
        </div>
        <div class="carousel-cell">
          <div class="coin-item">
            <!-- <p class="amount black">+4.15%</p> -->
            <p class="title">اتریوم</p>
            <p class="price black">{{ETHUSDT}}</p>
          </div>
        </div>
        <div class="carousel-cell">
          <div class="coin-item">
            <!-- <p class="amount black">-1.65%</p> -->
            <p class="title">دات</p>
            <p class="price black">{{DOTUSDT}}</p>
          </div>
        </div>
        <div class="carousel-cell">
          <div class="coin-item">
            <!-- <p class="amount black">+3.92%</p> -->
            <p class="title">لایت کوین  </p>
            <p class="price black">{{LTCUSDT}} </p>
          </div>
        </div>
        <div class="carousel-cell">
          <div class="coin-item">
            <!-- <p class="amount black">-1.42%</p> -->
            <p class="title">کاردانو</p>
            <p class="price black">{{ADAUSDT}} </p>
          </div>
        </div>
      </flickity>
    </div>
  </section>
</template>

<script>
import Flickity from "~/node_modules/vue-flickity/src/flickity";
import axios from "axios";
import env from "~/env.js";

export default {
  components: {
    Flickity,
  },

  data() {
    return {
      ETHUSDT:0,
      DOTUSDT:0,
      BTCUSDT:0,
      LTCUSDT:0,
      ADAUSDT:0,
      flickityOptions: {
        cellSelector: ".carousel-cell",
        wrapAround: true,
        cellAlign: "right",
        contain: true,
        prevNextButtons: false,
        pageDots: true,
        autoPlay: 5000,
        rightToLeft: true,
      },
    };
  },

  methods: {
    slideShow() {
      var coinsEl = document.querySelector(".coins-carousel");
      var flkty2 = new Flickity(coinsEl, {
        cellSelector: ".carousel-cell", 
        wrapAround: true,
        cellAlign: "right",
        contain: true,
        prevNextButtons: false,
        pageDots: true,
        autoPlay: 5000,
        rightToLeft: true,
      });
    },
    getDOTUSDT(){
       const self =this
       const params={symbol:'DOTUSDT'}
       axios.get(env.api.url + '/markets/price',{params}).then(res => {
          
          let response = res?.data.response
          self.DOTUSDT=parseFloat(response.price).toFixed(4)
        }).catch(err=>{
          console.log(err.response)
        })
     },
    getETHUSDT(){
       const self =this
       const params={symbol:'ETHUSDT'}
       axios.get(env.api.url + '/markets/price',{params}).then(res => {
          
          let response = res?.data.response
          self.ETHUSDT=parseFloat(response.price).toFixed(4)
        }).catch(err=>{
          console.log(err.response)
        })
     },
    getBTCUSDT(){
       const self =this
       const params={symbol:'BTCUSDT'}
       axios.get(env.api.url + '/markets/price',{params}).then(res => {
          
          let response = res?.data.response
          self.BTCUSDT=parseFloat(response.price).toFixed(4)
        }).catch(err=>{
          console.log(err.response)
        })
     },
    getLTCUSDT(){
       const self =this
       const params={symbol:'LTCUSDT'}
       axios.get(env.api.url + '/markets/price',{params}).then(res => {
          
          let response = res?.data.response
          self.LTCUSDT=parseFloat(response.price).toFixed(4)
        }).catch(err=>{
          console.log(err.response)
        })
     },
    getADAUSDT(){
       const self =this
       const params={symbol:'ADAUSDT'}
       axios.get(env.api.url + '/markets/price',{params}).then(res => {
          
          let response = res?.data.response
          self.ADAUSDT=parseFloat(response.price).toFixed(4)
        }).catch(err=>{
          console.log(err.response)
        })
     }
  },
  mounted() {
    this.getDOTUSDT()
    this.getETHUSDT()
    this.getBTCUSDT()
    this.getLTCUSDT()
    this.getADAUSDT()
  },//
  beforeMount() {
    window.addEventListener("DOMContentLoaded", this.slideShow);
  },
  befoblackestroy() {
    window.removeEventListener("DOMContentLoaded", this.slideShow);
  },
};
</script>