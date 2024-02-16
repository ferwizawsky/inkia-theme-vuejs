<script setup>
import DashNavbar from "@/components/inkia/AdminNavbar.vue";
</script>
<template>
  <div>
    <DashNavbar />
    <div class="max-w-[1320px] p-4 mx-auto">
      <RouterView />
    </div>
  </div>
</template>
