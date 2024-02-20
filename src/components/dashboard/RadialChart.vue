<script setup>
import apexchart from "vue3-apexcharts";
import { onMounted, ref, watch } from "vue";

const props = defineProps(["data"]);
const options = ref();
const series = ref([]);

onMounted(() => {
  options.value = getOption();
  series.value = props?.data?.series ?? [];
});
watch(
  () => props.data,
  (e) => {
    series.value = e?.series ?? [];
    options.value = getOption();
  }
);

function getOption() {
  return {
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "14px",
          },
          value: {
            fontSize: "16px",
            formatter: function (val) {
              return parseInt(val);
            },
          },
          total: {
            show: false,
          },
        },

        track: {
          show: true,
          background: "#55555530",
        },
      },
    },
    labels: props?.data?.labels ?? [],
  };
}
</script>
<template>
  <div class="p-4 border rounded-xl shadow-md">
    <div class="font-semibold">Radial Chart</div>
    <div class="grid lg:grid-cols-2 gap-4 items-center">
      <div class="text-base pb-2">
        <div v-for="(item, index) in data?.series" class="flex justify-between">
          <div class="flex-none flex items-center">
            <div
              class="w-2 h-2 rounded-full mr-2"
              v-if="props?.data?.colors[index]"
              :style="{ backgroundColor: props?.data?.colors[index] }"
            ></div>
            {{ props?.data?.labels[index] }}
          </div>
          <div class="font-semibold">{{ item }}</div>
        </div>
      </div>
      <div>
        <apexchart type="radialBar" :options="options" :series="series" />
      </div>
    </div>
  </div>
</template>
