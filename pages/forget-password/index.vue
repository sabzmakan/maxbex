<template>
  <div>
    <section class="forget-wrapper wrapper">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-sm-9 col-md-6 col-lg-4">
            <h1 class="form-title">بازیابی رمز حساب کاربری</h1>
            <form 
              action=""
              v-on:submit.prevent="send()"
              class="p-4"
              novalidate
              >
              <div class="custom-form-group">
                <label for="email">ایمیل</label>
                <input
                  type="text"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="ایمیل خود را بنویسید"
                  v-model="email"
                />
                <div v-if='correctEmail  && this.email.length != 0' style="color:green">ایمیل اعتبار سنجی شد!</div>
                <div v-if='!correctEmail  && this.email.length != 0' style="color:red">ایمیل صحیح نیست!</div>
              </div>
              <div v-if="pending">در حال ارسال کد ...</div>
              <div class="custom-form-group">
                <button v-on:submit.prevent="send()" class="btn btn-default mx-0 w-100">
                ارسال کد یکبار مصرف
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import env from "~/env.js";

export default {
  data() {
    return {
      title: "بازیابی رمز حساب کاربری",
      email: "",
      pending: false
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "توضیحات صفحه بازیابی رمز حساب کاربری در این قسمت",
        },
      ],
    };
  },
  transition: "fade",
  computed: {
    
    // passLength(){
    //   // return this.register.password 
    //   if(this.register.password.length<8){
    //     return false ;
    //   }else{
    //     return true
    //   }
    // },
    // passEqual(){
    //   // return this.register.password 
    //   if(this.register.password!=this.password2 ){
    //     return false ;
    //   }else{
    //     return true
    //   }
    // },
    correctEmail(){
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.email).toLowerCase());
    }
  },
  
  methods: {
    send:function() {
      self = this; 
      self.pending=true
        axios
          .post(env.api.url + "/users/forgotPassword", self.email)
          .then((res) => {
            console.log("email", res?.data);
            alert("veriy succesfully,10 min time to send code");
            this.$nuxt.$router.push({ path: '/forget-password/verify' });
            self.pending=false
          }).catch(err=>{
            console.log("err", err);
            self.pending=false
            alert('ایمیل شما موجود نیست')
          })
          
      
    },
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out, transform 0.4s ease;
}
.fade-enter-active {
  transition-delay: 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
h1 {
  position: relative;
  font-size: 1.75em;
  color: #303030;
  font-weight: 700;
  text-align: center;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}

h1::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 60px;
  height: 8px;
  border-radius: 32px;
  background-color: #3ec5fa;
}
</style>

