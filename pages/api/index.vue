<template>
  <div class="dashboard">
    <ApiModal />
    <CustomMenu />

    <div class="main-content">
      <div class="row">
        <div class="col-12">
          <div class="widget-style dash-links">
            <div class="widget-header">
              <div class="widget-title">آموزش</div>
            </div>
            <div class="widget-body">
              <div class="row">
                <div class="col-sm-4">
                  <NuxtLink to="/api/binance" class="btn btn-primary">
                  <i class="far fa-wallet"></i>
                    آموزش های Binance
                  </NuxtLink>
                </div>
                <div class="col-sm-4">
                  <NuxtLink to="/api" class="btn btn-warning">
                    <i class="far fa-globe"></i>
                    آموزش های کار با سایت
                  </NuxtLink>
                </div>
                <div class="col-sm-4">
                  <NuxtLink to="/api/key" class="btn btn-secondary">
                    <i class="far fa-network-wired"></i>
                    آموزش API Key
                  </NuxtLink>
                </div>
              </div>
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
      title: "مراحل متصل کردن API",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "توضیحات مراحل متصل کردن API در این قسمت",
        },
      ],
    };
  },
};
</script>