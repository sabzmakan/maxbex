<template>
  <div class="dashboard">
    <ApiModal />
    <DashMenu />

    <div class="main-content">
      <div class="row">
        <div class="col-12">
          <div class="widget-style">
            <div class="widget-header">
              <div class="widget-title">ارز های شما</div>
            </div>
            <div class="widget-body">
              <bar-chart
                :data="barChartData"
                :options="barChartOptions"
                :height="200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "~/components/BarChart";

const chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
};

export default {
  data() {
    return {
      title: "لیست ارزهای شما",

      barChartData: {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [
          {
            label: "Income",
            // backgroundColor: ["red", "orange", "yellow"],
            backgroundColor: [
              chartColors.red,
              chartColors.orange,
              chartColors.yellow,
            ],
            data: [10, 15, 20],
          },
        ],
      },

      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Monthly Income",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "توضیحات لیست ارزهای شما در این قسمت",
        },
      ],
    };
  },
  components: {
    BarChart,
  },
};
</script>