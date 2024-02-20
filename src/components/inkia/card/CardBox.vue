<script setup>
import { cn } from "@/lib/utils";

const props = defineProps({
  class: { type: null, required: false },
  title: { type: null, required: false },
  value: { type: null, required: false },
});
</script>
<template>
  <div
    :class="
      cn(
        'p-2.5 px-3 rounded-xl bg-amber-500/40  text-xs text-center flex items-center justify-center',
        props.class
      )
    "
  >
    <div>
      <div>{{ props.title ?? "Total" }}</div>
      <div class="font-semibold">{{ props.value ?? 0 }}</div>
    </div>
  </div>
</template>
