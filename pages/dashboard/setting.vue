<template>
  <div class="dashboard">
    <ApiModal />
    <DashMenu />

    <div class="main-content">
      <div class="row">
        <div class="col-12">
          <div class="widget-style">
            <div class="widget-header">
              <div class="widget-title">تنظیمات حساب کاربری</div>
            </div>
            <div class="widget-body">
              <div class="row mx-0">
                
                <form v-if="!sendCode && !pending" class="col-md-4" action="" v-on:submit.prevent="updateEmail()">
                  <div class="form-group mb-3">
                    <label for="email"> ایمیل جدید</label>
                    <input
                      class="form-control"
                      name="newemail"
                      id="newemail"
                      type="email"
                      placeholder=""
                      v-model="email"
                    />
                    <div v-if='correctEmail  && this.email.length != 0' style="color:green">اعتبار سنجی شد!</div>
                    <div v-if='!correctEmail  && this.email.length != 0' style="color:red">ایمیل صحیح نیست!</div>
                  </div>
                  <div class="form-group mb-3">
                    <button  v-on:submit.prevent="updateEmail()" class="btn btn-default m-0" >
                      تغییر ایمیل
                    </button>
                  </div>
                </form>
                <form class="col-md-4" action="" v-if="pending">
                  <div style="height:200 ">در انتظار ارسال کد ... </div>
                </form>
                <form v-if="sendCode" action="" v-on:submit.prevent="sendVerifyCode()" class="col-md-4" >
                  
                  <div class="form-group mb-3">
                    
                    <div class="form-group  mb-3">
                      <label >کد ارسال شده به ایمیل را واردکنید</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder=""
                    id="verifyCode"
                    v-model="verifyCode"
                    required
                  />
                </div>
                  </div>
                  <div class="form-group  mb-3">
                    <button  v-on:submit.prevent="sendVerifyCode()" class="btn btn-default m-0" >
                      ثبت
                    </button>
                  </div>
                </form>

                <form class="col-md-4"  action="" v-on:submit.prevent="updateName()">
                  <div class="form-group mb-3">
                    <label for="name"> نام </label>
                    <input
                      class="form-control"
                      name="name"
                      id="name"
                      type="text"
                      placeholder=""
                      v-model="Name.firstName"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label for="name"> نام خانوادگی</label>
                    <input
                      class="form-control"
                      name="name"
                      id="name1"
                      type="text"
                      placeholder=""
                      v-model="Name.lastName"
                    />
                  </div>
                  <div class="form-group">
                    <button v-on:submit.prevent="updateName()" class="btn btn-default m-0">
                      تغییر نام
                    </button>
                  </div>
                </form>

                <form class="col-md-4 needs-validation" novalidate  action=""
                 v-on:submit.prevent="updatePass()">
                  <div class="form-group mb-3">
                    <label for="password">پسورد فعلی</label>
                    <input
                      class="form-control"
                      name="password"
                      id="password"
                      type="password"
                      placeholder=""
                      required
                      v-model="password.currentPassword"
                    />
                    <div v-if="passLength && this.password.currentPassword.length != 0"  style="color:green">اعتبار سنجی شد!</div>
                    <div v-if="!passLength && this.password.currentPassword.length != 0" style="color:red">حداقل ۸ کاراکتر وارد کنید!</div>
                  </div>
                  <div class="form-group mb-3">
                    <label for="repassword"> پسورد جدید</label>
                    <input
                      class="form-control"
                      name="repassword"
                      id="repassword"
                      type="password"
                      placeholder=""
                      v-model="password.newPassword"
                      required
                    />
                    <div v-if="passEqual && this.password.currentPassword.length != 0" style="color:green">اعتبار سنجی شد!</div>
                    <div v-if="!passEqual && this.password.currentPassword.length != 0" style="color:red">تکرار پسورد صحیح نیست!</div>
                  </div>
                  <div class="form-group">
                    <button class="btn btn-default m-0" v-on:submit.prevent="updatePass()">
                      تغییر پسورد
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
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
      title: "تنظیمات حساب کاربری",
      email:'',
      sendCode:false,
      verifyCode: "",
      pending:false,
      Name:{
      firstName:'',
      lastName:'',
      },
      password:{
        currentPassword:'',
        newPassword:''
      },
      profile:{
        firstName:'',
        lastName:'',
        email:'',
        id:''
      },

    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "توضیحات تنظیمات حساب کاربری در این قسمت",
        },
      ],
    };
  },
  mounted(){
    this.getInfo()
 },
  computed: {
    
    passLength(){
      // return this.register.password 
      if(this.password.newPassword.length<8){
        return false ;
      }else{
        return true
      }
    },
    passEqual(){
      // return this.register.password 
      if(this.password.newPassword!=this.password.currentPassword ){
        return false ;
      }else{
        return true
      }
    },
    correctEmail(){
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.email).toLowerCase());
    }
  },
  methods: {
    getInfo:function() {
      var self = this; 
        axios
          .get(env.api.url + "/users/me",{
              headers: {
                'Authorization': 'Bearer ' + self.$store.state.token
              }})
          .then((res) => {
            console.log("profile", res?.data);
            self.profile=res?.data.user
          }).catch(err=>{
            console.log("err", err);
          })
      
    },
    updateEmail:function() {
      var self = this; 
      self.pending=true
        axios
          .post(env.api.url + "/users/me/updateEmail", {email:self.email},{
              headers: {
                'Authorization': 'Bearer ' + self.$store.state.token
              }})
          .then((res) => {
            self.sendCode=true
            self.pending=false
          }).catch(err=>{
            self.pending=false
            alert('این ایمیل قبلا در سایت ثبت نام شده است')
            if(err.response.status==401){
              alert('please login again')
            }
          })
      
    },
    sendVerifyCode (){
      const self=this
      var updateMailCopm = {email:self.email , verifyCode:self.verifyCode}
    
      console.log('updateMailCopm',updateMailCopm)
            axios.post(env.api.url + '/users/me/completeUpdateEmail',updateMailCopm,{
              headers: {
                'Authorization': 'Bearer ' + self.$store.state.token
              }})
                .then(res => {
                  //console.log(res)
                    alert('ایمیل با موفقیت به روز رسانی شد')
                      
            }).catch ((error)=>{
              consol.log(error)
        })
    },
    updateName:function() {
      var self = this; 
        axios
          .post(env.api.url + "/users/me/updateName", self.Name,{
              headers: {
                'Authorization': 'Bearer ' + self.$store.state.token
              }})
          .then((res) => {
            console.log("Name", res?.data);
            alert("Name changed succesfully");
          }).catch(err=>{
            console.log("err", err);
          })
      
    },
    updatePass:function() {
      var self = this; 
        axios
          .post(env.api.url + "/users/me/updatePassword", self.password,{
              headers: {
                'Authorization': 'Bearer ' + self.$store.state.token
              }})
          .then((res) => {
            console.log("Password", res?.data);
            alert("Password changed succesfully");
          }).catch(err=>{
            console.log("err", err);
            alert("enter current Password correctly");
          })
      
    },
  }
};
</script>