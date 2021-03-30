<template>
  <section class="features-wrapper">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-md-6 col-lg-5">
          <div class="content-box">
            <div class="feature-item" id="first-content">
              <img
                class="show-in-responsive"
                src="~/assets/images/home/features/feature-01.jpg"
                alt="image"
              />
              <h2 class="title">هدف ما</h2>
              <!-- <h3 class="desc">چرا استارت اپ هستیم؟</h3> -->
              <p class="mb-2">
                هدف ما افزایش سطح دانش عمومی در حوزه بلاکچین و همینطور توسعه این تکنولوژی با شعار "دانش بدون مرز" است. پس از آن ما به دنبال "خلق فرصت‌های برابر" برای تمام افرادی هستیم که ظرفیت بلاکچین را درک کرده‌اند. 
              </p>
              <!-- <p class="mb-2">
                کسب و کاری که عموما حول محور تکنولوژی شکل گرفته و پتانسیل رشد
                بالایی دارد یک استارت اپ است پس MAXBEX یک استارت اپ است و یک
                استارت خواهد ماند 
              </p>
              <p class="mb-2">
                استارت آپ MAXBEX با رویکری متفاوت پا به عرصه صنعت نو ظهور
                بلاکچین گذاشته است.
              </p> -->
              <ul class="pr-4 list-style-disc">
                <!-- <li>استراتژی</li>
                <li>چشم انداز</li> -->
              </ul>
            </div>

            <div class="feature-item" id="second-content">
              <img
                class="show-in-responsive"
                src="~/assets/images/home/features/feature-02.jpg"
                alt="image"
              />
              <h2 class="title">چشم انداز ما</h2>
              <!-- <h3 class="desc">پلتفرم ارجاعی در حوزه بلاکچین</h3> -->
              <p class="mb-0">
                چشم انداز ما خلق یک پلتفرم چندجانبه در راستای هم‌افزایی است که به توانمندسازی اعضا کمک می‌کند.
ما می‌خواهیم به یک مرجع معتبر در تکنولوژی بلاکچین تبدیل شویم تا هرکسی، در هر گوشه از این کره خاکی بتواند با استفاده از تخصص و منابع خود و همینطور دسترسی به اطلاعات مطمئن و معتبر، به یک مجموعه قدرتمند متصل شود و ایده‌های خود را به مرحله اجرا دربیاورد.
ما با گرد هم آوردن زنجیره‌ای از انسان‌های متخصص و مشتاق و تولید دانش تخصصی در حوزه بلاکچین، قدم به دنیایی می‌گذاریم که دیگر رسیدن به قله‌های موفقیت، تنها یک آرزوی محال نیست!
              </p>
            </div>

            <!-- <div class="feature-item" id="third-content">
              <img
                class="show-in-responsive"
                src="~/assets/images/home/features/feature-03.jpg"
                alt="image"
              />
              <h2 class="title">استراتژی MaxBex</h2>
              <h3 class="desc">ایجاد بستری مشارکتی برای تیم ها</h3>
              <p class="mb-2">
                این پلتفرم منبع باز مدل فعالیتش کاملا به صورت اجماع اتفاق می
                افتد که یکی از ویژگی های بالقوه بلاکچین است. 
              </p>
              <p class="mb-0">
                استراتژی مارکتینگ مکس بکس هم برگرفته از ویژگی peer to peer
                بلاکچین است، 
              </p>
            </div> -->
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="image-box" id="first-image">
            <img
              src="~/assets/images/home/features/feature-01.jpg"
              alt="image"
            />
          </div>
          <div class="image-box" id="second-image">
            <img
              src="~/assets/images/home/features/feature-02.jpg"
              alt="image"
            />
          </div>
          <div class="image-box" id="third-image">
            <img
              src="~/assets/images/home/features/feature-03.jpg"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    handleScroll() {
      // images offset
      const firstImg = document.getElementById("first-image").offsetTop - 350;
      const secondImg = document.getElementById("second-image").offsetTop - 350;
     // const thirdImg = document.getElementById("third-image").offsetTop - 350;

      // contents
      const firstTxt = document.getElementById("first-content");
      const secondTxt = document.getElementById("second-content");
     // const thirdTxt = document.getElementById("third-content");

      let pageWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      var scrltop =
        window.pageYOffset ||
        document.body.scrollTop ||
        document.documentElement.scrollTop;

      if (pageWidth >= 768) {
        if (scrltop < firstImg || scrltop < secondImg) {
          firstTxt.classList.remove("d-none");
          firstTxt.classList.add("d-block");

          secondTxt.classList.remove("d-block");
          secondTxt.classList.add("d-none");

         // thirdTxt.classList.remove("d-block");
         // thirdTxt.classList.add("d-none");
        }

        if (scrltop > secondImg) {
          firstTxt.classList.remove("d-block");
          firstTxt.classList.add("d-none");

          secondTxt.classList.remove("d-none");
          secondTxt.classList.add("d-block");

          //thirdTxt.classList.remove("d-block");
         // thirdTxt.classList.add("d-none");
        }

        // if (scrltop > thirdImg) {
        //   firstTxt.classList.remove("d-block");
        //   firstTxt.classList.add("d-none");

        //   secondTxt.classList.remove("d-block");
        //   secondTxt.classList.add("d-none");

        //  // thirdTxt.classList.remove("d-none");
        //   //thirdTxt.classList.add("d-block");
        // }
      }
      else {
        console.log('haji koochik tare')
      }
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>