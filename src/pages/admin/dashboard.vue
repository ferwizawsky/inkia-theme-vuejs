<script setup>
import { defineAsyncComponent, ref } from "vue";
import {
  objectDataDonut,
  objectDataArea,
  objectDataline,
  objectDataRadian,
} from "@/composables/data/dashboard";
import { Cloud, Users, Settings } from "lucide-vue-next";
import CardIcon from "@/components/inkia/card/CardIcon.vue";
import CardBox from "@/components/inkia/card/CardBox.vue";
import Cardia from "@/components/inkia/card/Cardia.vue";
import CardSide from "@/components/inkia/card/CardSide.vue";

const DashDocument = defineAsyncComponent(() =>
  import("@/components/icon/DashDocument.vue")
);
const RadialChart = defineAsyncComponent(() =>
  import("@/components/dashboard/RadialChart.vue")
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
const dataRadian = ref(objectDataRadian);
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
          <DonutChart :data="dataDonut" class="lg:col-span-1" />
          <RadialChart :data="dataRadian" class="lg:col-span-3" />
        </div>
      </div>
      <div class="pt-4 lg:col-span-2 space-y-3">
        <CardSide v-for="index in 2">
          <template #header>
            <CardIcon><Users /></CardIcon>
          </template>
          <template #title>User Group</template>
          <template #value>
            <CardBox class="bg-foreground/10" title="Total" :value="100" />
            <CardBox class="bg-lime-400/50" title="TMS" :value="10" />
            <CardBox title="MS" :value="48" />
          </template>
        </CardSide>

        <CardSide v-for="index in 2">
          <template #header>
            <CardIcon class="text-rose-400 bg-rose-400/20"
              ><Settings />
            </CardIcon>
          </template>
          <template #title>Operation</template>
          <template #value>
            <CardBox class="bg-foreground/10" title="Total" :value="100" />
            <CardBox class="bg-lime-400/50" title="TMS" :value="10" />
            <CardBox title="MS" :value="48" />
          </template>
        </CardSide>

        <CardSide v-for="index in 3">
          <template #header>
            <CardIcon class="text-lime-500 bg-lime-500/20"><Cloud /></CardIcon>
          </template>
          <template #title>Server</template>
          <template #value>
            <CardBox class="bg-foreground/10" title="Total" :value="100" />
            <CardBox class="bg-lime-400/50" title="TMS" :value="10" />
            <CardBox title="MS" :value="48" />
          </template>
        </CardSide>
      </div>
    </div>
  </div>
</template>
