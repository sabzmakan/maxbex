<template>
  <div class="welcome-box">
    <h2 class="title">به مکس بکس خوش آمدید</h2>
    <p class="desc">فقط چند مرحله ی دیگر برای تکمیل حساب کاربری تون مونده</p>
    <div class="steps">
      <span class="line" style="width: 380px"></span>
      <div class="step-item">
        <span class="counter done"><i class="far fa-check"></i></span>
        <p class="work-name">ثبت نام در سایت</p>
      </div>
      <div class="step-item">
        <span class="counter">۲</span>
        <p class="work-name">برداشتن API Key از بایننس</p>
        <p class="work-desc">
          جهت داشتن هرگونه سوال یا بوجود آمدن مشکل در ایجاد API Key روی لینک زیر کلیک کنید
        </p>
        <NuxtLink to="/api" class="btn btn-default"
          >آموزش API</NuxtLink>
      </div>
      <div class="step-item">
        <span class="counter">۳</span>
        <p class="work-name">ثبت API Key</p>
        <p class="work-desc">
          با کلیک روی دکمه زیر کد API Key که از Binance دریافت میکنید، را در سیستم
          وارد کنید
        </p>
        <a href="#" class="btn btn-default" @click="apiModal()">ایجاد اکانت</a>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    apiModal() {
      document.querySelector(".api-modal").classList.add("show");

      const closeApiModal = document.querySelector(".api-modal .close-btn");
      if (closeApiModal) {
        closeApiModal.addEventListener("click", function () {
          document.querySelector(".api-modal").classList.remove("show");
        });
      }
    },
  },
};
</script>