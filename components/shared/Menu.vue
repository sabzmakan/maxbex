<template>
  <div class="w-100">
    <div class="menu-overal" @click="closeMenu()">
      <button id="close">&times;</button>
    </div>
    <div class="menu-fixed">
      <div class="text-center mb-5">
        
          <div class="flex">
                  <div  v-if="!$store.state.token" class="flex align-items-center">
                    <a href="#" class="btn btn-default" @click.prevent="openRegisterModal()">
                      ثبت نام</a>
                    <a href="#" class="btn btn-default mr-0" @click.prevent="openLoginModal()">ورود</a>
                  </div>
          
                  <div v-if="$store.state.token" class="flex align-items-center">
                    <n-link  to="/dashboard">
                    <button  class="btn btn-default">پروفایل</button>
                    </n-link>
                    <a href="#" class="btn btn-default" @click="exit()">خروج</a>
            </div>
         </div>
        
      </div>

      <ul>
        <li class="active"><NuxtLink to="/">صفحه اصلی</NuxtLink></li>
        <!-- <li><NuxtLink to="/dashboard">داشبورد</NuxtLink></li> -->
        <li><NuxtLink to="/api">آموزش</NuxtLink></li>
        <li><NuxtLink to="/news">اخبار</NuxtLink></li>
        <!-- <li><NuxtLink to="/blog">مقالات</NuxtLink></li> -->
        <li><NuxtLink to="/contact">تماس با ما</NuxtLink></li>
      </ul>
    </div>

    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-9">
          <div class="d-flex align-items-center">
            <div class="logo">
              <button
                id="open-menu"
                class="hint--bottom-left hint--info"
                aria-label="برای استفاده از منوهای سایت کلیک کنید"
                @click="openMenu()"
              >
                <i class="far fa-bars"></i>
              </button>
              <NuxtLink to="/" class="d-flex align-items-center">
                <img
                  src="~/assets/images/logo-inline-text.png"
                  alt="logo"
                  title="logo"
                />
              </NuxtLink>
            </div>
            <div class="menu-content">
              <ul>
                <li>
                  <NuxtLink to="/">صفحه اصلی</NuxtLink>
                </li>
                <!-- اگر بخواییم زیر منو داشته باشیم تگ ال آی باید کلاس `has-children` داشته باشه -->
                <!-- <li>
                  <NuxtLink to="/dashboard">داشبورد</NuxtLink>
                  <ul>
                    <li>
                      <a href="#">
                        <span>بیت کوین</span>
                        <i>توضیحات کوتاه شما در اینجا</i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>اتریوم</span>
                        <i>توضیحات کوتاه شما در اینجا</i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>بایننس کوین</span>
                        <i>توضیحات کوتاه شما در اینجا</i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>ایکس آر پی</span>
                        <i>توضیحات کوتاه شما در اینجا</i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>بیت کوین کش</span>
                        <i>توضیحات کوتاه شما در اینجا</i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>لایت کوین</span>
                        <i>توضیحات کوتاه شما در اینجا</i>
                      </a>
                    </li>
                  </ul>
                </li> -->
                <li>
                  <NuxtLink to="/api">آموزش</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/news">اخبار</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/contact">تماس با ما</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-5 col-md-3 hide-in-responsive">
          <div  v-if="!$store.state.token" class="d-flex align-items-center justify-content-end">
            <a href="#" class="btn btn-default" @click="openRegisterModal()">
              ثبت نام</a>
            <a href="#" class="mr-4" @click="openLoginModal()">ورود</a>
          </div>
          <div v-if="$store.state.token" class="d-flex align-items-center justify-content-end">
            <n-link  to="/dashboard">
            <button  class="btn btn-default">پروفایل</button>
            </n-link>
            <a href="#" class="mr-4" @click="exit()">خروج</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return { 
       // isLogedIn: !!this.$store.state.token,    
      }
    },
    created(){
      //this.checkLogin() 
    },
    computed:{
      // checkLogin(){
      //   this.isLogedIn =!!this.$store.state.token
      // }
    },
  methods: {
    // checkLogin(){
    //     this.isLogedIn = !!this.$store.state.token
    //   },
      exit(){
        this.$store.dispatch('logout')
      },
    openLoginModal() {
      // here 2
      // document.querySelector("body").style.overflow = "hidden";
      setTimeout( ()=> {
        //document.querySelector(".login-modal").classList.add("show");
        this.$root.$emit('showLoginModal');
      }, 100);
    },

    openRegisterModal() {
      // here 3
      // document.querySelector("body").style.overflow = "hidden";
      setTimeout( ()=> {
        // document.querySelector(".register-modal").classList.add("show");
        this.$root.$emit('showRegisterModal');
      }, 100);
    },

    openMenu() {
      document.querySelector(".menu-overal").classList.add("show");
      document.querySelector(".menu-fixed").classList.add("show");
    },
    closeMenu() {
      document.querySelector(".menu-overal").classList.remove("show");
      document.querySelector(".menu-fixed").classList.remove("show");
    },

  },
};
</script>