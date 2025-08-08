<script setup>
import { BarChart, FileText } from "lucide-vue-next";
import { RouterLink } from "vue-router";
// import Icon from "@/components/Icon.vue";
// import { useAuth } from "@/stores/auth";
// const auth = useAuth();

const list = [
  {
    to: "dashboard",
    icon: BarChart,
  },
  {
    to: "invoice",
    text: "Invoices",
    icon: FileText,
    children: ["day", "month", "uearly"],
  },

  // {
  //   to: "kesatuan",
  //   icon: "kesatuan",
  // },
];
</script>
<template>
  <div class="pt-16 text-sm">
    <!-- <div
      v-for="index in list"
      :class="auth.isAllowed(index.role) || !index.role ? '' : 'hidden'"
    > -->
    <div v-for="index in list" :class="!index.role ? '' : 'hidden'">
      <RouterLink :to="`/admin/${index.to}`">
        <button
          class="flex items-center w-full p-3 rounded-xl mb-1 relative z-10"
          :class="
            $route?.path?.toLowerCase().search(index.to) != -1
              ? 'bg-primary/20 text-primary'
              : 'hover:text-primary'
          "
        >
          <component :is="index.icon" class="w-4 h-4 mr-4" />
          <span class="capitalize">{{
            index.text ?? index.to.replace("-", " ")
          }}</span>
        </button>
      </RouterLink>

      <div
        v-if="index.children"
        :class="
          $route?.path?.toLowerCase().search(index.to) != -1
            ? 'pl-6 pt-5'
            : 'pl-6 pt-1'
        "
      >
        <div
          v-for="item in index.children"
          :class="
            $route?.path?.toLowerCase().search(index.to) != -1
              ? '-mt-2 opacity-100'
              : '-mt-14 opacity-0 '
          "
          class="ease-in-out duration-500"
        >
          <RouterLink :to="`/admin/${index.to}/${item.toLowerCase()}`">
            <button
              class="flex items-center w-full px-4 rounded-xl"
              :class="
                $route?.path?.toLowerCase().search(item.toLowerCase()) != -1
                  ? 'font-semibold text-primary'
                  : 'text-foreground/50 hover:text-primary'
              "
            >
              <div
                class="w-4 h-4 mr-4 rounded-full border-2 border-current"
              ></div>
              <span class="capitalize">{{ item.replace("-", " ") }}</span>
            </button>
          </RouterLink>
          <div
            class="pl-[23px] -mt-0.5 mb-1.5"
            v-if="item != index.children[index.children.length - 1]"
          >
            <div class="border-l-2 h-10 border-foreground"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
