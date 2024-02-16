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
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249;
            },
          },
        },
      },
    },
    labels: props?.data?.labels ?? [],
  };
}
</script>
<template>
  <div class="p-4 border rounded-xl shadow-md">
    <div class="grid grid-cols-2 gap-4">
      <div></div>
      <div>
        <apexchart type="radialBar" :options="options" :series="series" />
      </div>
    </div>
  </div>
</template>
