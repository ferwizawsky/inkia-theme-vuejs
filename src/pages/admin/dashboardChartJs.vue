<script setup>
import { defineAsyncComponent, ref } from "vue";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 22],
      backgroundColor: ["Red", "Blue", "Yellow"],
      borderRadius: 1000,
    },
  ],
};
const options = {
  responsive: true,
  offset: 60,
};
</script>

<template>
  <div>
    <div class="text-center text-xl font-semibold">Dasboard</div>
    <div class="grid lg:grid-cols-7 gap-4">
      <div class="lg:col-span-5">
        <div class="grid lg:grid-cols-4 gap-4 my-4">
          <Doughnut :data="data" :options="options" />
        </div>
      </div>
    </div>
  </div>
</template>
