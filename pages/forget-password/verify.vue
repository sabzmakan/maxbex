<template>
  <div>
    <section class="forget-wrapper wrapper">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-sm-9 col-md-6 col-lg-4">
            <h1 class="form-title">کد ارسال شده را وارد کنید</h1>
            <form 
          action=""
          v-on:submit.prevent="sendCode()"
          class="p-4 needs-validation"
          novalidate
          >
              <div class="custom-form-group">
                <label for="verify-code">کد</label>
                <input
                  type="text"
                  class="form-control"
                  name="verify-code"
                  id="verify-code"
                  v-model="verifyCode"
                  
                />
              </div>
              <div class="custom-form-group">
                <button v-on:submit.prevent="sendCode()" class="btn btn-default mx-0 w-100">
                تایید کد
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
      title: "تایید کد",
      verifyCode: "",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "توضیحات صفحه تایید کد در این قسمت",
        },
      ],
    };
  },
  transition: "fade",
  methods: {
    sendCode:function() {
      self = this; 
      var forgotPassCopm = {email:self.$store.state.email , verifyCode:self.verifyCode}
        axios
          .post(env.api.url + "/users/forgotPasswordVerify", self.forgotPassCopm)
          .then((res) => {
            console.log("veriy", res?.data);
            alert("veriy succesfully");
            this.$nuxt.$router.push({ path: '/forget-password/new' });
          }).catch(err=>{
            console.log("err", err);
          })
      
    },
  }
}
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

