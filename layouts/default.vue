<template>
  <div class="rtl-version">
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
    <a href="#" id="backToTop" @click="backTop()">
      <i class="fal fa-arrow-up"></i>
    </a> 
  </div>
</template>

<script>
import axios from "axios";
import env from "~/env.js";
//import io from "socket.io-client"; 


export default {
 // middleware:['auth'], //this layout wil run before all pages but we only need that for dashboards
  data() {
      return { 
       token2: '',    
      }
    },
    computed:{
    
    },
    mounted(){
      const self=this
      this.checkToken()

    
    // /* Listen for events: */
    // this.socket
    // .on('message', (data) => {
    //    var data2 = JSON.parse(data)
    //   console.log(data2)
    //   /* Handle event */
    // })
  

    //   window.socket = io("http://178.63.203.253:3001/");

    //   window.socket.on('message', (data) => {
    //   var data = JSON.parse(data)
    //   console.log(data)
    //   /* Handle event */
    // }),

      // self.token2=localStorage.getItem('token')
      // if(self.token2 != ''){
      //   //this.checkToken()
      //     axios.post(env.api.url + '/users/me/updateToken',{
      //         headers: {
      //           'Authorization': 'Bearer ' + self.$store.state.token
      //         }}).then(res => {
      //               console.log('token3',res?.data)
      //                const token3 = res?.data.token
      //               self.$store.dispatch('setToken',this.token3)
      //               // if(!!self.token2){
      //               //     self.$store.dispatch('setToken',self.token2)
      //               //     console.log('token',self.token2)
      //               // }
                   
      // }).catch(err=>{
      //   // if(err.response.status == 401){
      //   //   localStorage.setItem('token','')
      //   //   alert('please login')
      //   // }
      // })
      // }
      
//       const client = Binance();
//       var self = this;
// var dep=null
// client.ws.depth('ETHBTC', depth => {
//   // self.dep=depth
//   console.log(depth)
// })
      setTimeout(function(){
      //   axios.post(env.api.url + '/users/me/updateToken',{
      //         headers: {
      //           'Authorization': 'Bearer ' + self.$store.state.token
      //         }}).then(res => {
      //               console.log('token3',res?.data)
      //               // self.token2 = res?.data.token
      //               self.$store.dispatch('setToken',res?.data.token)
      //               // if(!!self.token2){
      //               //     self.$store.dispatch('setToken',self.token2)
      //               //     console.log('token',self.token2)
      //               // }
                   
      // })
      },10000)
     
    },
  head: {
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  methods: {
     checkToken(){
      var self=this
      //var token=''
      self.token2=localStorage.getItem('token')
      //if(!!this.token2){
        self.$store.dispatch('setToken',self.token2)
         console.log('token4',self.token2)
      //}

      //localStorage.setItem('token2',self.token2)
      
    },
    handleBackToTop() {
      var btn = document.getElementById("backToTop");

      var scrltop =
        window.pageYOffset ||
        document.body.scrollTop ||
        document.documentElement.scrollTop;

      if (scrltop > 400) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    },

    backTop() {
      document.querySelectorAll("div")[0].scrollIntoView({ behavior: "smooth" });
      // document.querySelector("#__layout").scrollIntoView({ behavior: "smooth" });
    },

    formValidation() {
      (function () {
        "use strict";

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll(".needs-validation");

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms).forEach(function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
              }

              form.classList.add("was-validated");
            },
            false
          );
        });
      })();

      let hrefs = document.querySelectorAll('[href="#"]');
      hrefs.forEach((item) => {
        item.addEventListener("click", function (e) {
          e.preventDefault();
        });
      });
    },
  },

  beforeMount() {
    window.addEventListener("scroll", this.handleBackToTop);
    window.addEventListener("DOMContentLoaded", this.formValidation);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleBackToTop);
    window.removeEventListener("DOMContentLoaded", this.formValidation);
  },
  
};
</script>