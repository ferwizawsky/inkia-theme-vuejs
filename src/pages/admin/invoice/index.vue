<script setup>
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileText, FilePenLine, Trash2, Search } from "lucide-vue-next";
import { ref } from "vue";
import { listInvoices, invoice } from "@/composables/data/invoice";
import FunctionButton from "@/components/inkia/table/FunctionButton.vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const page = ref(1);
const search = ref("");
const invoices = ref(listInvoices);

function getStatus(e) {
  if (e === "paid") {
    return "text-lime-600";
  }
  if (e === "pending") {
    return "text-amber-600";
  }
  return "text-rose-600";
}

function getData() {}
</script>
<template>
  <div class="pt-4">
    <div class="lg:flex items-center justify-between">
      <div class="mb-4">
        <Button>Create Invoice</Button>
      </div>
      <form class="mb-4 relative" @submit.prevent="getData()">
        <Input v-model="search" class="pr-8" placeholder="Search...." />
        <Search
          class="w-4 absolute top-2 right-3 cursor-pointer text-foreground/50"
        />
      </form>
    </div>
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class=""> No. </TableHead>
          <TableHead class=""> Invoice </TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead> Amount </TableHead>
          <TableHead> Action </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(item, index) in invoices">
          <TableCell>{{ (page - 1) * 10 + index + 1 }}</TableCell>
          <TableCell class="font-medium">
            {{ item.invoice }}
          </TableCell>
          <TableCell :class="getStatus(item?.paymentStatus?.toLowerCase())">{{
            item.paymentStatus
          }}</TableCell>
          <TableCell>{{ item.paymentMethod }}</TableCell>
          <TableCell>
            {{ item.totalAmount }}
          </TableCell>
          <TableCell class="flex items-center space-x-2">
            <RouterLink :to="`${$route.path}/detail`">
              <FunctionButton>
                <FileText class="w-4 h-4" />
              </FunctionButton>
            </RouterLink>
            <RouterLink :to="`${$route.path}/edit`">
              <FunctionButton
                class="bg-amber-400/20 hover:bg-amber-400/50 text-amber-500"
              >
                <FilePenLine class="w-4 h-4" />
              </FunctionButton>
            </RouterLink>
            <FunctionButton
              class="bg-rose-400/20 hover:bg-rose-400/50 text-rose-500"
            >
              <Trash2 class="w-4 h-4" />
            </FunctionButton>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>