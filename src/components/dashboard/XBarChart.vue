<script setup>
import apexchart from "vue3-apexcharts";

const chartOptions = {
  plotOptions: {
    bar: {
      columnWidth: "20%",
      barHeight: "10px",
      borderRadius: "5",
      horizontal: true,
      // borderRadiusApplication: 'end',
      // borderRadiusWhenStacked: 'last',
    },
  },
  chart: {
    fontFamily: "Poppins, sans-serif",

    foreColor: "#999",
    toolbar: {
      show: false,
    },
    type: "bar",
  },
  grid: {
    show: true,
    borderColor: "#22222240",
    strokeDashArray: 3,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
};
const series = [
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 91],
    color: "#96BD43",
  },
];
</script>

<template>
  <div class="w-full h-[320px] pr-5 pl-1 py-3 border rounded-xl shadow-lg">
    <div class="px-4 font-semibold">Horizon Bar</div>
    <div class="h-full pb-3 -mt-1">
      <apexchart
        width="100%"
        height="100%"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>
