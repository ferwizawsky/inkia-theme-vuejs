<script setup>
import { cn } from "@/lib/utils";

const props = defineProps({
  class: { type: null, required: false },
});
</script>
<template>
  <button
    :class="
      cn(
        'p-2 rounded-full bg-lime-500/20 hover:bg-lime-500/50 ease-in-out duration-300 text-lime-500 flex items-center justify-center',
        props.class
      )
    "
  >
    <slot />
  </button>
</template>
