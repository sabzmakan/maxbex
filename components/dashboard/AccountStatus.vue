<template>
  <div v-if="$store.state.user"  class="account-status">
   <!-- <div v-if="$store.state.user.firstName" class="avatar">{{$store.state.user.firstName.slice(0,1)}}{{$store.state.user.lastName.slice(0,1)}}</div>
    <div v-else class="avatar">{{$store.state.user.email.slice(0,1)}}</div>
    <div class="content">
      <p>
        <span v-if="$store.state.user" class="ml-4">{{$store.state.user.email}}  </span>
        <span  v-if="$store.state.user">
          <i class="text-color">یوزر آی دی: </i>
          {{$store.state.user.id}}
        </span>
      </p>
      <p class="text-color">
        <span class="ml-3"
          >تاریخ ورود قبلی شما: <i>۶ آبان ۱۳۹۹، ساعت ۱۵:۰۰</i></span
        >
        <span>آی پی: <i>192.168.1.1</i></span>
      </p>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import env from "~/env.js";

export default {
  data() {
    return {
      // profile:{
      //   firstName:'',
      //   lastName:'',
      //   email:'',
      //   id:''
      // },
      // token:''
    };
  },
  created(){
    //this.getInfo()
 },
  methods: {
    // getInfo:function() {
    //   var self = this; 
    //     axios
    //       .get(env.api.url + "/users/me",{
    //           headers: {
    //             'Authorization': 'Bearer ' + self.$store.state.token
    //           }})
    //       .then((res) => {
    //         console.log("profile", res?.data);
    //         self.profile=res?.data.user
    //       }).catch(err=>{
    //         console.log("err", err);
    //       })
      
    // },
    }
};
</script>