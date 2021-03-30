<template>
  <section class="intro-wrapper">
    <flickity class="intro-carousel" ref="flickity" :options="flickityOptions">
      <div class="carousel-cell">
        <img src="~/assets/images/home/slider/slide01.jpg" alt="slider" />
      </div>
      <div class="carousel-cell">
        <img src="~/assets/images/home/slider/slide02.jpg" alt="slider" />
      </div>
      <div class="carousel-cell">
        <img src="~/assets/images/home/slider/slide03.jpg" alt="slider" />
      </div>
    </flickity>

    <!-- <div class="top-card">
      <div class="tab">
        <div class="tab-menu">
          <button class="active" data-content="one">
            <span data-title="first">آخرین رمز ارزها</span>
          </button>
          <button data-content="two">
            <span data-title="second">کاربران نمونه</span>
          </button>
        </div>

        <div class="tab-bar">
          <div class="tab-bar-content active" id="one">
            <ul>
              <li>
                <p>
                  <img
                    src="~/assets/images/coins/BTC.png"
                    height="20"
                    alt="coin"
                  />
                  بیت کوین <small class="text-color">BTC</small>
                </p>
                <p>0.0000478$</p>
                <p><span class="red-bg-color">-23%</span></p>
              </li>
              <li>
                <p>
                  <img
                    src="~/assets/images/coins/ETH.png"
                    height="20"
                    alt="coin"
                  />
                  اتریوم <small class="text-color">ETH</small>
                </p>
                <p>0.0297$</p>
                <p><span class="red-bg-color">-11%</span></p>
              </li>
              <li>
                <p>
                  <img
                    src="~/assets/images/coins/BNB.png"
                    height="20"
                    alt="coin"
                  />
                  تتر <small class="text-color">Tether</small>
                </p>
                <p>0.855$</p>
                <p><span class="green-bg-color">+4%</span></p>
              </li>
              <li>
                <p>
                  <img
                    src="~/assets/images/coins/LTC.png"
                    height="20"
                    alt="coin"
                  />
                  لایت کوین <small class="text-color">LTC</small>
                </p>
                <p>0.55$</p>
                <p><span class="red-bg-color">-8%</span></p>
              </li>
              <li>
                <p>
                  <img
                    src="~/assets/images/coins/XRP.png"
                    height="20"
                    alt="coin"
                  />
                  ایکس آر پی <small class="text-color">XRP</small>
                </p>
                <p>0.855$</p>
                <p><span class="green-bg-color">+8%</span></p>
              </li>
            </ul>
          </div>
          <div class="tab-bar-content" id="two">
            <ul>
              <li>
                <p>
                  <img
                    src="~/assets/images/coins/LTC.png"
                    height="20"
                    alt="coin"
                  />
                  لایت کوین <small class="text-color">LTC</small>
                </p>
                <p>0.55$</p>
                <p><span class="red-bg-color">-8%</span></p>
              </li>
              <li>
                <p>
                  <img
                    src="~/assets/images/coins/BNB.png"
                    height="20"
                    alt="coin"
                  />
                  تتر <small class="text-color">Tether</small>
                </p>
                <p>0.855$</p>
                <p><span class="green-bg-color">+4%</span></p>
              </li>
              <li>
                <p>
                  <img
                    src="~/assets/images/coins/XRP.png"
                    height="20"
                    alt="coin"
                  />
                  ایکس آر پی <small class="text-color">XRP</small>
                </p>
                <p>0.855$</p>
                <p><span class="red-bg-color">+8%</span></p>
              </li>
              <li>
                <p>
                  <img
                    src="~/assets/images/coins/ETH.png"
                    height="20"
                    alt="coin"
                  />
                  اتریوم <small class="text-color">ETH</small>
                </p>
                <p>0.0297$</p>
                <p><span class="red-bg-color">-11%</span></p>
              </li>
              <li>
                <p>
                  <img
                    src="~/assets/images/coins/BTC.png"
                    height="20"
                    alt="coin"
                  />
                  بیت کوین <small class="text-color">BTC</small>
                </p>
                <p>0.0000478$</p>
                <p><span class="green-bg-color">-23%</span></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
import Flickity from "~/node_modules/vue-flickity/src/flickity";

export default {
  components: {
    Flickity,
  },

  data() {
    return {
      flickityOptions: {
        cellSelector: ".carousel-cell",
        wrapAround: true,
        prevNextButtons: false,
        pageDots: true,
        autoPlay: 5000,
        rightToLeft: true,
      },
    };
  },

  methods: {
    handleTab() {
      const tabLink = document.querySelectorAll(".tab .tab-menu button");
      const tabContent = document.querySelectorAll(".tab-bar-content");

      tabLink.forEach((el) => {
        el.addEventListener("click", activeTab);
      });

      function activeTab(el) {
        const btnTarget = el.currentTarget;
        const content = btnTarget.dataset.content;

        tabContent.forEach((el) => {
          el.classList.remove("active");
        });

        tabLink.forEach((el) => {
          el.classList.remove("active");
        });

        document.querySelector("#" + content).classList.add("active");
        btnTarget.classList.add("active");
      }
    },
  },

  beforeMount() {
    window.addEventListener("scroll", this.handleTab);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleTab);
  },
};
</script>