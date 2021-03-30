<template>
  <div class="login-modal" :class="{'show' :modalShownState }">
    <button class="close-modal" @click="closeLoginModal">
      <i class="fal fa-times"></i>
    </button>
    <div class="login-wrapper" @click.self.exact="closeLoginModal">
      <div class="logo-box">
        <img src="~/assets/images/logo-with-text.png" alt="Logo" />
      </div>

      <div class="login-box">
        <div class="loading"></div> 
        <div class="title-wrapper">
          <h2 class="title">ورود به حساب کاربری</h2>
          <p>برای ورود به اکانت خود، ایمیل و رمزتان را وارد کنید</p>
        </div>
        <form
          action=""
          v-on:submit.prevent="login()"
          class="p-4 needs-validation"
          novalidate
        >
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              placeholder="ایمیل"
              id="email"
              v-model="register.email"
              required
            />
            <div v-if='correctEmail  && this.register.email.length != 0' style="color:green">اعتبار سنجی شد!</div>
            <div v-if='!correctEmail  && this.register.email.length != 0' style="color:red">ایمیل صحیح نیست!</div>
            <!-- <div class="valid-feedback">اعتبار سنجی شد!</div>
            <div class="invalid-feedback">ایمیل خود را درست بنویسید</div> -->
          </div>

          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="پسورد..."
              id="password"
              v-model="register.password"
              required
            />

            <div v-if='passLength && this.register.password.length != 0' style="color:green">اعتبار سنجی شد!</div>
            <div v-if='!passLength && this.register.password.length != 0' style="color:red">حداقل ۸ کاراکتر وارد کنید!</div>
            <!-- <div class="valid-feedback">اعتبار سنجی شد!</div>
            <div class="invalid-feedback">پسورد خود را درست بنویسید</div> -->
          </div>

          <div class="form-group">
            <button class="btn btn-blue w-100" v-on:submit.prevent="login">
              وارد شوید
            </button>
          </div>
        </form>
        <div class="text-center pb-3">
          <button @click="forgotPass()" class="btn w-80 forgot-btn">
          رمز عبور را فراموش کردید؟
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import env from "~/env.js";

export default {
  data() {
    return {
      modalShownState : false ,
      register: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    passLength(){
      // return this.register.password 
      if(this.register.password.length<8){
        return false ;
      }else{
        return true
      }
    },
    correctEmail(){
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.register.email).toLowerCase());
    }
  },
  methods: {
    showLoginModal(){
      this.modalShownState = true ;
    },
    closeLoginModal() {
      this.modalShownState = false ;
      // document.querySelector(".login-modal").classList.remove("show");
      // document.querySelector("body").style.overflow = "auto";
    },
    login() {
      self = this;
      axios
        .post(env.api.url + "/users/login", self.register)
        .then((res) => {
          self.$store.dispatch("setToken", res?.data.token);
          alert("خوش آمدید");
          document.querySelector(".login-modal").classList.remove("show");
          document.querySelector("body").style.overflow = "auto";
          //console.log(res); 
        })
        .catch(function (err) {
          //console.log(err.response.message)
           var reqError = err.response.data.error
            reqError=reqError+''
            alert(reqError)
          // if (err.response.status == 400) {
          //   alert("لطفا ابتدا ثبت نام کنید");
          // }
        });
    },
    forgotPass(){
      this.$nuxt.$router.push({ path: '/forget-password/' });
      document.querySelector(".login-modal").classList.remove("show");
      document.querySelector("body").style.overflow = "auto";
    }
  },
  mounted(){
    this.$root.$on('showLoginModal' , this.showLoginModal);
    this.$root.$on('closeLoginModal' , this.closeLoginModal);
  },
  beforeDestroy(){
    this.$root.$off('showLoginModal');
    this.$root.$off('closeLoginModal');
  },
  //  watch: {
  //   register: {
  //     handler: function (val, oldVal) {
  //       if (parseInt(val.password.length) > 0) {
  //         alert("enter positive amount");
  //         //this.register.password = 1;
  //       }
  //     },
  //     deep: true,
  //   },
  //  },
  
    // ,
    // computeOpenrders(){
    //   return this.openOrders
    // } 
 
};
</script>
<style scoped>
.forgot-btn{
  border:red 10 solid;
  outline: 3px;
}
</style>