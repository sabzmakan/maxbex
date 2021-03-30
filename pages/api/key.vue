<template>
  <div class="dashboard">
    <ApiModal />
    <CustomMenu />

    <div class="main-content">
      <div class="row">
        <div class="col-12">
          <div class="widget-style">
            <div class="widget-header">
              <div class="widget-title">مراحل متصل کردن API</div>
            </div>
            <div class="widget-body">
              <div class="mb-4 mb-md-5">
                <h3 class="font-size-2x text-color mb-2">۱- ورود به بایننس</h3>
                <p class="dark-color">
                  ابتدا وارد اکانت خود در سایت Binance شده و از منوی سمت چپ
                  گزینه Setting و سپس روی API Management کلیک کنید.
                </p>
                <img src="~/assets/images/dashboard/api/01.jpg" alt="step 1" />
              </div>
              <div class="mb-4 mb-md-5">
                <h3 class="font-size-2x text-color mb-2">۲- ایجاد کردن API</h3>
                <p class="dark-color">
                  بعد از اینکه به صفحه Create API هدایت شدید، در باکس مربوط به
                  Label یا همان اسم، نام مکس بکس را وارد کرده و روی دکمه زرد رنگ
                  Create کلیک کنید.
                </p>
                <img src="~/assets/images/dashboard/api/02.jpg" alt="step 2" />
              </div>
              <div class="mb-4 mb-md-5">
                <h3 class="font-size-2x text-color mb-2">
                  ۳- احراز هویت بایننس
                </h3>
                <p class="dark-color">
                  سپس Binance میخواهد مطمئن شود که خود شما هستید یا خیر. روی دکمه
                  Send Email کلیک کرده تا یک کد امنیتی به ایمیل شما از سمت
                  Binance فرستاده شده (اگر Google Authenticator روی اکانت خود
                  فعال کردید کد این برنامه هم نیاز است) که شما باید کد را در
                  باکس های مربوطه وارد کرده و سپس Submit کنید.
                </p>
                <img src="~/assets/images/dashboard/api/03.jpg" alt="step 3" />
              </div>
              <div class="mb-4 mb-md-5">
                <h3 class="font-size-2x text-color mb-2">
                  ۴- کپی کردن API Key و Secret Key
                </h3>
                <p class="dark-color">
                  بعد از اینکه کدهای درست را در مرحله قبلی وارد کردید، به یک
                  صفحه جدید هدایت میشوید که کمی به پایین اسکرول کنید، قسمت های
                  API Key و Secret Key را مشاهده خواهید کرد. کد های هرکدام را
                  کپی کرده و مراحل بعدی آموزش را دنبال کنید.
                </p>
                <img src="~/assets/images/dashboard/api/04.jpg" alt="step 4" />
              </div>
              <div class="mb-4 mb-md-5">
                <h3 class="font-size-2x text-color mb-2">
                  ۵- ورود به پنل کاربری مکس بکس
                </h3>
                <p class="dark-color">
                  سپس وارد حساب کاربری خود در مکس بکس شده و در صفحه داشبورد شما
                  در ابتدای صفحه، مرحله ی سوم یا همان ثبت API را مشاهده خواهید
                  کرد. روی دکمه ایجاد اکانت کلیک کنید.
                </p>
                <img src="~/assets/images/dashboard/api/05.jpg" alt="step 5" />
              </div>
              <div class="mb-0">
                <h3 class="font-size-2x text-color mb-2">۶- پرکن فیلدها</h3>
                <p class="dark-color">
                  بعد از نمایش پنجره متصل کردن API فیلد های مربوطه را پر
                  بفرمایید:
                </p>
                <ul class="list-style-disc pr-4 mb-4">
                  <li>
                    <b>اسم اکانت: </b>اسمی که در مرحله دوم نوشتیم (Maxbex)
                  </li>
                  <li><b>کد API: </b>در مرحله ۴ کپی کردیم</li>
                  <li><b>Secret Key: در مرحله ۴ کپی کردیم</b></li>
                  <li>
                    <b>توضیحات: </b>این فیلد اجباری نیست و اگر توضیحاتی مد
                    نظراتان هست بنویسید
                  </li>
                </ul>
                <img src="~/assets/images/dashboard/api/06.jpg" alt="step 6" />
              </div>
              <NuxtLink to="/dashboard/apikey" class="">
                   <div class="flex align-items-center">
                    <a href="#" class="btn btn-default" >
                      افزودن apikey به یوتیلیتی
                    </a>
                  </div>
              </NuxtLink>
            </div>
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
      title: "آموزش Api key",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "توضیحات آموزش Api key در این قسمت",
        },
      ],
    };
  },
};
</script>