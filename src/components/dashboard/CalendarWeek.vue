<script setup>
import { ref } from "vue";
import {
  getDaysName,
  getMonthYear,
  getNameDay,
} from "@/composables/timeFormatter";

const props = defineProps(["targetDate"]);
const week = ref(getDaysName(props?.targetDate ?? "06-06-2024"));
</script>
<template>
  <div class="bg-primary/10 p-4 rounded-xl h-fit">
    <div class="text-xl font-bold">
      {{ getMonthYear(props.targetDate) }}
    </div>
    <div class="grid grid-cols-7 gap-1 pt-4">
      <div
        :class="
          getNameDay(props?.targetDate) == getNameDay(item?.date)
            ? 'bg-primary text-background rounded-xl shadow-lg'
            : ''
        "
        v-for="item in week"
        class="text-center p-2"
      >
        <div class="opacity-60 text-xs">
          {{ item.dayName?.substring(0, 3) }}
        </div>
        <div class="font-semibold">{{ item.dayValue }}</div>
      </div>
    </div>
  </div>
</template>
