<script setup>
import { cn } from "@/lib/utils";

const props = defineProps({
  class: { type: null, required: false },
});
</script>
<template>
  <div
    :class="
      cn(
        'w-14 h-14 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
