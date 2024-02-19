<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { listInvoices } from "@/composables/data/invoice";
import { h } from "vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { vAutoAnimate } from "@formkit/auto-animate/vue";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/toast";

const route = useRoute();
const invoice = ref(
  route.params.id ? { username: "TTEST" } : listInvoices[route.params.id]
);

// Define form validation schema
const formSchema = toTypedSchema(
  z.object({
    invoice: z.string().min(2, "Need more of 2 Length").max(50),
  })
);

// Create form instance
const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

// Handle form submission
const onSubmit = handleSubmit((values) => {
  toast({
    title: "You submitted the following values:",
    description: h(
      "pre",
      { class: "mt-2 w-[340px] rounded-md bg-slate-950 p-4" },
      h("code", { class: "text-white" }, JSON.stringify(values, null, 2))
    ),
  });
});

// Fetch invoice data if route parameter is provided
onMounted(() => {
  if (route.params.id) invoice.value = listInvoices[route.params.id];
});
</script>

<template>
  <div class="">
    <div class="text-center capitalize font-semibold text-xl">
      {{ route.params.name }} Invoice
    </div>
    <div>
      <form class="space-y-6" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="invoice">
          <FormItem v-auto-animate>
            <FormLabel>Invoice</FormLabel>
            <FormControl>
              <!-- Bind input field to username property -->
              <Input
                type="text"
                placeholder="shadcn"
                v-model="invoice.invoice"
              />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button type="submit"> Submit </Button>
      </form>
    </div>
  </div>
</template>
