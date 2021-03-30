<template>
  <div class="register-modal" :class="{'show' :modalShownState }">
    <button class="close-modal" @click="closeRegisterModal"><i class="fal fa-times"></i></button>
    <div class="register-wrapper" @click.self.exact="closeRegisterModal">
      <div class="logo-box">
        <img src="~/assets/images/logo-with-text.png" alt="Logo" />
      </div>

      <div class="register-box">
        <div class="loading"></div>
        <div class="title-wrapper">
          <h2 class="title">ثبت نام در سایت</h2>
          <p v-if="!sendCode && !pending" >برای استفاده از خدمات مکس بکس ثبت نام کنید</p>
          <p v-if="sendCode" >کد ارسال شده به ایمیل تان را واردکنید</p>
        </div>
        <form v-if="!sendCode && !pending" action="." v-on:submit.prevent="registeruser" class="p-4 needs-validation" >
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              placeholder="ایمیل *"
              id="email"
              v-model="register.email"
              required
            />
            <div v-if='correctEmail  && this.register.email.length != 0' style="color:green">اعتبار سنجی شد!</div>
            <div v-if='!correctEmail  && this.register.email.length != 0' style="color:red">ایمیل صحیح نیست!</div>
          </div>

          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="پسورد *"
              id="password"
               v-model="register.password"
              required
            />
            <div v-if="passLength && this.register.password.length != 0"  style="color:green">اعتبار سنجی شد!</div>
            <div v-if="!passLength && this.register.password.length != 0" style="color:red">حداقل ۸ کاراکتر وارد کنید!</div>
          </div>

          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="تکرار پسورد *"
               v-model="password2"
              id="repassword"
              required
            />
            <div v-if="passEqual && this.register.password.length != 0" style="color:green">اعتبار سنجی شد!</div>
            <div v-if="!passEqual && this.register.password.length != 0" style="color:red">تکرار پسورد صحیح نیست!</div>
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="نام (اختیاری)"
              id="name"
               v-model="register.firstName"
              required
            />
            <div class="valid-feedback">اعتبار سنجی شد!</div>
            <div class="invalid-feedback">لطفا عدد وارد نکنید</div>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="نام خانوادگی  (اختیاری)"
              id="name"
               v-model="register.lastName"
              required
            />
            <div class="valid-feedback">اعتبار سنجی شد!</div>
            <div class="invalid-feedback">لطفا عدد وارد نکنید</div>
          </div>

          <div class="form-group">
            <button class="btn btn-blue w-100" v-on:submit.prevent="registeruser" >ثبت نام</button>
          </div>
        </form>
        <form v-if="pending">
          <div style="height:200">در انتظار ارسال کد ...</div>
        </form>
        <form v-if="sendCode" action="." v-on:submit.prevent="sendVerifyCode" class="p-4 needs-validation" >
          <div class="form-group">
            <input
              type="number"
              class="form-control"
              placeholder="enter code"
              id="name"
              v-model="verifyCode"
              required
            />
          </div>

          <div class="form-group">
            <button class="btn btn-blue w-100" v-on:submit.prevent="sendVerifyCode" >ثبت </button>
          </div>
        </form>
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
        modalShownState:false ,
        sendCode:false,
        verifyCode: "",
        pending:false,
        check:false,
        password2: "",
      register: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
      },       
       
      }
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
    passEqual(){
      // return this.register.password 
      if(this.register.password!=this.password2 ){
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
     showRegisterModal(){
      this.modalShownState = true ;
    },
    closeRegisterModal() {
      this.modalShownState = false ;
      // document.querySelector(".login-modal").classList.remove("show");
      // document.querySelector("body").style.overflow = "auto";
    },
    closeModal() {
      document.querySelector('.register-modal').classList.remove("show");
      document.querySelector("body").style.overflow = "auto";
    },
    registeruser() {
      self=this
      self.pending=true
            axios.post(env.api.url + '/users/signup',self.register)
                .then(res => {
                 // console.log(res)
                  self.sendCode=true
                  self.pending=false
                    
            }).catch ((error)=>{
              console.log(error.response.status)
            if(error.response.status == 400){
                alert('این ایمیل قبلا ثبت شده است')
                self.pending=false
             }
        })
    },
    sendVerifyCode (){
      self=this
      var registerCopm = {...self.register , verifyCode:self.verifyCode}
      //console.log('registerCopm',registerCopm)
            axios.post(env.api.url + '/users/completeSignup',registerCopm)
                .then(res => {
                  console.log(res)
                  self.$store.dispatch('setToken',res?.data.token)
                    //localStorage.setItem('token', res?.data.token)
                    alert('ثبت نام با موفقیت انجام شد')
                    document.querySelector('.login-modal').classList.remove("show");
                    document.querySelector("body").style.overflow = "auto";
                      
            }).catch ((error)=>{
              consol.log(error.response.status)
            //   if(error.response.status == 400){
            //     alert('این ایمیل قبلا ثبت شده است')
            // console.log('reg error', err);
            //   }
        })
    }
  },
   mounted(){
    this.$root.$on('showRegisterModal' , this.showRegisterModal);
    this.$root.$on('closeRegisterModal' , this.closeRegisterModal);
  },
  beforeDestroy(){
    this.$root.$off('showRegisterModal');
    this.$root.$off('closeRegisterModal');
  }
  
};
</script>