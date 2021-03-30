<template>
  <div class="dashboard">
    <ApiModal />
    <DashMenu />

    <div class="main-content">
      <div class="row">
        <div class="col-12">
          <div class="widget-style">
            <div class="widget-header">
              <div class="widget-title">بازار</div>
            </div>
            <div class="widget-body">
              <coingecko-coin-heatmap-widget  height="800" locale="en"></coingecko-coin-heatmap-widget>
            </div>
            <div class="widget-body">
              <coingecko-coin-compare-chart-widget  coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" locale="en"></coingecko-coin-compare-chart-widget>
            </div>
            <div class="widget-body">
              <coingecko-coin-market-ticker-list-widget  coin-id="bitcoin" currency="usd" locale="en"></coingecko-coin-market-ticker-list-widget>
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
      title: "بازار",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "توضیحات بازار در این قسمت",
        },
      ],
    };
  },
};
</script> 