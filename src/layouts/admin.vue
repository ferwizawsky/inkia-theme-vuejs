<script setup>
import DashNavbar from "@/components/inkia/AdminNavbar.vue";
import LeftNavbar from "@/components/inkia/LeftNavbar.vue";
import { useOption } from "@/stores/option.js";

const option = useOption();
</script>
<template>
  <div>
    <DashNavbar />
    <div
      :class="!option.sideBar ? '-translate-x-full' : ''"
      class="fixed p-4 left-0 top-14 h-screen overflow-y-auto w-[260px] z-30 xl:translate-x-0 ease-in-out duration-700 bg-background"
    >
      <div class="relative">
        <button
          class="btn-square-out xl:hidden absolute top-2 right-2"
          @click="option.sideBar = !option.sideBar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <!-- <img src="/mahameru.png" class="w-[120px] mx-auto" /> -->
      </div>
      <LeftNavbar />
    </div>

    <div class="max-w-[1320px] p-4 mx-auto">
      <RouterView />
    </div>
  </div>
</template>
