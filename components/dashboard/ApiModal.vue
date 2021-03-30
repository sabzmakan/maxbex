<template>
  <div class="api-modal">
    <button class="close-btn">&times;</button>
    <div class="modal-content">
      <div class="header">متصل کردن API به سیستم مکس بکس</div>
      <div class="body">
        <p>
          جهت متصل شدن حساب بایننس شما به سیستم مکس بکس، مقادیر زیر را پر کنید،
          در صورت سوال، به صفحه <NuxtLink to="/dashboard/api">آموزش</NuxtLink> مراجعه فرمایید.
        </p>

        <form action="" v-on:submit.prevent="send()"  class="needs-validation"  novalidate>
          <div class="form-group">
            <input
              type="text"
              name="accName"
              class="form-control"
              placeholder="اسم اکانت"
              v-model="register.name"
              required
            />
            <div class="valid-feedback">اعتبار سنجی شد!</div>
            <div class="invalid-feedback">اسم اکانت را درست بنویسید</div>
          </div>
          <div class="form-group">
            <input
              type="text"
              name="APIcode"
              class="form-control"
              placeholder="کد API"
              v-model="register.apiKey"
              required
            />
            <div class="valid-feedback">اعتبار سنجی شد!</div>
            <div class="invalid-feedback">کد API اشتباه است</div>
          </div>
          <div class="form-group">
            <input
              type="text"
              name="secretKey"
              class="form-control"
              placeholder="Secret Key"
              v-model="register.apiSecret"
              required
            />
            <div class="valid-feedback">اعتبار سنجی شد!</div>
            <div class="invalid-feedback">Secret Key را درست بنویسید</div>
          </div>
          <div class="form-group">
            <textarea
              name="content"
              class="form-control"
              placeholder="توضیحات"
              v-model="register.description"
              required
            ></textarea>
            <div class="valid-feedback">اعتبار سنجی شد!</div>
            <div class="invalid-feedback">توضیحات را پر کنید</div>
          </div>
          <div class="form-group">
            <button class="btn btn-default" v-on:submit.prevent="send()">ثبت و ارسال</button>
          </div>
        </form>

        <div class="d-flex justify-content-between">
          <p class="text-right mb-0">
            <NuxtLink to="/dashboard/api">آموزش دریافت API از بایننس</NuxtLink>
          </p>
          <p class="text-left mb-0">
            <a href="#">نیاز به پشتیبانی دارید؟</a>
          </p>
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
        token:'',
      register: {
        apiKey: "",
        apiSecret: "",
        name: "",
        description: "",
      },       
      }
    },
    mounted(){
     // this.setLocalToken()
    },
     methods: {
    setLocalToken(){
     // token=localStorage.getItem('token')
    },
    send(){
      self=this
        axios.post(env.api.url + '/users/me/accounts',self.register,{
              headers: {
                'Authorization': 'Bearer ' + self.$store.state.token
              }}).then(res => {
                    console.log(res?.data)
                    alert('اکانت جدید افزوده شد')
                    }).catch ((error)=>{
              // if(error.response.status == 401){
              //   alert('لطفا وارد سایت شوید')
              // }
              console.log('error', error);
        })
            
        }
      
        }

};
</script>