<script setup>
import { defineAsyncComponent, ref } from "vue";
import {
  objectDataDonut,
  objectDataArea,
  objectDataline,
} from "@/composables/data/dashboard";

const DashDocument = defineAsyncComponent(() =>
  import("@/components/icon/DashDocument.vue")
);
const CardSide = defineAsyncComponent(() =>
  import("@/components/dashboard/CardSide.vue")
);
const Cardia = defineAsyncComponent(() =>
  import("@/components/dashboard/Cardia.vue")
);
const LineChart = defineAsyncComponent(() =>
  import("@/components/dashboard/LineChart.vue")
);
const BarChart = defineAsyncComponent(() =>
  import("@/components/dashboard/BarChart.vue")
);
const AreaChart = defineAsyncComponent(() =>
  import("@/components/dashboard/AreaChart.vue")
);
const DonutChart = defineAsyncComponent(() =>
  import("@/components/dashboard/DonutChart.vue")
);

// Define data
const dataLine = ref(objectDataline);
const dataArea = ref(objectDataArea);
const dataDonut = ref(objectDataDonut);
</script>

<template>
  <div>
    <div class="text-center text-xl font-semibold">Dasboard</div>
    <div class="grid lg:grid-cols-7 gap-4">
      <div class="lg:col-span-5">
        <div class="grid lg:grid-cols-4 gap-4 my-4">
          <Cardia v-for="index in 4">
            <template #header> <DashDocument /> </template>
            <template #title>Total Document</template>
            <template #value>2.490</template>
          </Cardia>
        </div>
        <div class="grid lg:grid-cols-4 gap-4 my-4">
          <LineChart :data="dataLine" class="lg:col-span-2" />
          <BarChart class="lg:col-span-2" />
          <AreaChart :data="dataArea" class="lg:col-span-4" />
          <DonutChart :data="dataDonut" class="lg:col-span-2" />
        </div>
      </div>
      <div class="pt-4 lg:col-span-2">
        <CardSide />
      </div>
    </div>
  </div>
</template>
