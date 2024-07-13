<script setup>
import { defineAsyncComponent, ref } from "vue";
import { dateFormatter, getDaysName } from "@/composables/timeFormatter";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";
import CalendarWeek from "@/components/dashboard/CalendarWeek.vue";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 22],
      backgroundColor: ["#FFB525", "#9FE3BD", "#308CFF"],
      borderRadius: 1000,
    },
  ],
};
const options = {
  responsive: true,
  offset: 25,
};

// Example usage:
const targetDate = "06-06-2024";
const week = ref(getDaysName(targetDate));
</script>

<template>
  <div>
    <div class="text-center text-xl font-semibold">Dasboard</div>
    <div class="grid lg:grid-cols-7 gap-4">
      <div class="lg:col-span-7">
        <div class="grid lg:grid-cols-2 gap-4 my-4">
          <div><Doughnut :data="data" :options="options" /></div>
          <div>
            <CalendarWeek :targetDate="targetDate" />
          </div>
          <div>TEST</div>
        </div>
      </div>
    </div>
  </div>
</template>
