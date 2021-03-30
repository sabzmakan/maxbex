<template>
  <section class="steps-wrapper wrapper">
    <div class="container">
      <h2 class="title_up"> مراحل کار با یوتیلیتی</h2>
      <div class="steps-items">
        <div class="work-item">
          <div class="image">
            <span>۱</span>
            <img
              src="~/assets/images/home/steps/01.jpg"
              alt="image"
              title="image"
            />
          </div>
          <NuxtLink to="/" class="details"  @click.native="openRegisterModal()">
            <h3 class="title">ثبت نام و ورود</h3>
            <p>
              ابتدا در سایت ثبت نام کنید . سپس طبق مراحل زیر تنظیمات لازم برای استفاده از مزایای یوتیلیتی راانجام دهید.
            </p>
          </NuxtLink>
        </div>
        <!--  -->
        <div class="work-item">
          <div class="image">
            <span>۲</span>
            <img
              src="~/assets/images/home/steps/03.jpg"
              alt="image"
              title="image"
            />
          </div>
          <NuxtLink to="/api/binance" class="details">
            <h3 class="title">ایجاد حساب در Binance</h3>
            <p>
              در صرافی بایننس یک حساب ایجادکنید و طبق  آموزش  api key بسازید.برای مشاهده ی آموزش ها کلیک کنید.
            </p>
          </NuxtLink>
        </div>
        
        <!--   --> 
        <div class="work-item">
          <div class="image">
            <span>۳</span>
            <img
              src="~/assets/images/home/steps/02.jpg"
              alt="image"
              title="image"
            />
          </div>
          <NuxtLink to="/dashboard/apikey" class="details">
            <h3 class="title">ساخت و ایجاد API Key</h3>
            <p>
              در این مرحله API Key ساخته شده در مرحله ی قبل را در سایت یوتیلیتی اضافه کنید .            </p>
          </NuxtLink>
        </div>
        <!--  -->
        <div class="work-item">
          <div class="image">
            <span>۴</span>
            <img
              src="~/assets/images/home/steps/04.jpg"
              alt="image"
              title="image"
            />
          </div>
          <NuxtLink to="/" class="details">
            <h3 class="title">استفاده از داشبورد</h3>
            <p>
              متن مورد نظر شما که میخواهید راجع این تایتل توضیح دهید در این قسمت
              نوشته خواهد شد. فضا آماده است!
            </p>
          </NuxtLink>
        </div>
        <!--  -->
        <div class="work-item">
          <div class="image">
            <span>۵</span>
            <img
              src="~/assets/images/home/steps/05.jpg"
              alt="image"
              title="image"
            />
          </div>
          <NuxtLink to="/" class="details">
            <h3 class="title">پشتیبانی</h3>
            <p>
              متن مورد نظر شما که میخواهید راجع این تایتل توضیح دهید در این قسمت
              نوشته خواهد شد. فضا آماده است!
            </p>
          </NuxtLink>
        </div>
        <!--  -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods:{
    
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
  }
};
</script>