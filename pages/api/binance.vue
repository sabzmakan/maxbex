<template>
  <div class="dashboard">
    <ApiModal />
    <CustomMenu />

    <div class="main-content">
      <div class="row">
        <div class="col-12">
          <div class="widget-style">
            <div class="widget-header">
              <div class="widget-title">آموزش های Binance</div>
            </div>
            <div class="widget-body">
              <div class="mb-4 mb-md-5">
                <p>
                  با توجه به محدودیت های سایت بایننس برای مراجعه به این سایت از
                  فیلترشکن (vpn) استفاده کنید
                </p>

                <h2 class="mt-3 mt-md-4 font-size-3x">
                  نحوه ی ساخت اکانت بایننس
                </h2>
                <video controls>
                  <source src="~/static/videos/01.mp4" type="video/mp4" />
                </video>
              </div>
              <div class="mb-4 mb-md-5">
                <h2 class="font-size-3x">نحوه ی ایمن سازی اکانت بایننس</h2>
                <video controls>
                  <source src="~/static/videos/02.mp4" type="video/mp4" />
                </video>
              </div>
              <div class="mb-0">
                <h2 class="font-size-3x">نحوه ی شارژ اکانت بایننس</h2>
                <video controls>
                  <source src="~/static/videos/03.mp4" type="video/mp4" />
                </video>
              </div>

              <NuxtLink to="/api/key" class="">
                   <div class="flex align-items-center">
                    <a href="#" class="btn btn-default" >
                      آموزش ساخت apikey
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
      title: "آموزش های Binance",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "توضیحات آموزش های Binance در این قسمت",
        },
      ],
    };
  },
};
</script> 
<style scoped>
/* .lastbottom{
justify-content:center;
align-items:center;
width:100%;
background-color:blue;
} */
</style>