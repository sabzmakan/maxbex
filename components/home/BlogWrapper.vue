<template>
  <section class="blog-wrapper wrapper">
    <h3 class="title_up">آخرین آموزش ها</h3>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="blog-item">
            <!-- <img src="~/assets/images//blog/01.png" alt="image" title="image" /> -->
            <video controls>
              <source src="~/static/videos/01.mp4" type="video/mp4" />
            </video>
            <h3 class="title">
              <NuxtLink to="/api/binance">
                نحوه ی ساخت اکانت بایننس
              </NuxtLink>
            </h3>
          </div>
        </div>
        <div class="col-md-4">
          <div class="blog-item">
            <!-- <img src="~/assets/images//blog/02.png" alt="image" title="image" /> -->
            <video controls>
              <source src="~/static/videos/02.mp4" type="video/mp4" />
            </video>
            <h3 class="title">
              <NuxtLink to="/api/binance">
                نحوه ی ایمن سازی اکانت بایننس
              </NuxtLink>
            </h3>
          </div>
        </div>
        <div class="col-md-4">
          <div class="blog-item">
            <!-- <img src="~/assets/images//blog/03.png" alt="image" title="image" /> -->
            <video controls>
              <source src="~/static/videos/03.mp4" type="video/mp4" />
            </video>
            <h3 class="title">
              <NuxtLink to="/api/binance">
                نحوه ی شارژ اکانت بایننس
              </NuxtLink>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>