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
import Paginate from "@/components/inkia/table/Paginate.vue";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FileText, FilePenLine, Trash2, Search } from "lucide-vue-next";
import { ref } from "vue";
import { listInvoices, invoice, meta } from "@/composables/data/invoice";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import FunctionButton from "@/components/inkia/table/FunctionButton.vue";

const router = useRouter();
const route = useRoute();
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
function setPage(e) {
  router.push(`${route.path}?page=${e}`);
  page.value = e;
  getData();
}
</script>
<template>
  <div class="pt-4">
    <div class="lg:flex items-center justify-between">
      <div class="mb-4">
        <RouterLink :to="`${route.path}/add`">
          <Button variant="outline">Create Invoice</Button>
        </RouterLink>
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
            <RouterLink :to="`${route.path}/detail/${index}`">
              <FunctionButton>
                <FileText class="w-4 h-4" />
              </FunctionButton>
            </RouterLink>
            <RouterLink :to="`${route.path}/edit/${index}`">
              <FunctionButton
                class="bg-amber-400/20 hover:bg-amber-400/50 text-amber-500"
              >
                <FilePenLine class="w-4 h-4" />
              </FunctionButton>
            </RouterLink>
            <AlertDialog>
              <AlertDialogTrigger as-child>
                <FunctionButton
                  class="bg-rose-400/20 hover:bg-rose-400/50 text-rose-500"
                >
                  <Trash2 class="w-4 h-4" />
                </FunctionButton>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <Paginate
      @move="setPage($event)"
      :page="page"
      :list="meta?.links"
      :meta="meta"
    />
  </div>
</template>
