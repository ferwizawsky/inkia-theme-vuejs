<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { listInvoices } from "@/composables/data/invoice";
import { h } from "vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { vAutoAnimate } from "@formkit/auto-animate/vue";
import Gallery from "@/components/inkia/form/Gallery.vue";
import InputImage from "@/components/inkia/form/InputImage.vue";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import Toaster from "@/components/ui/toast/Toaster.vue";
import { toast } from "@/components/ui/toast";

const route = useRoute();
const object = ref(route.params.id ? listInvoices[route.params.id] : {});
const statusList = ["Paid", "Unpaid", "Pending"];

const formSchema = () => {
  return toTypedSchema(
    z.object({
      invoice: z.string().min(2).max(50),
      totalAmount: z.string(),
      paymentStatus: z.string().min(2).max(50),

      // totalAmount: z.number(),
      // paymentStatus: z.string().min(2).max(50),
    })
  );
};

const { handleSubmit, defineField } = useForm({
  validationSchema: formSchema(),
  initialValues: object.value,
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});

onMounted(() => {
  // You can add any additional initialization logic here if needed
  console.log(object.value);
});
</script>

<template>
  <div class="">
    <div></div>
    <div class="text-center capitalize font-semibold text-xl mb-10">
      {{ route.params.name }} Invoice
    </div>
    <div>
      <form class="space-y-6" @submit.prevent="onSubmit">
        <div class="grid grid-cols-2 gap-4">
          <FormField v-slot="{ componentField }" name="invoice">
            <FormItem v-auto-animate>
              <FormLabel>Invoice</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  v-bind="componentField"
                  :disabled="route.params.name == 'detail' ? true : false"
                />
              </FormControl>
              <FormDescription> This Code Invoice </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="totalAmount">
            <FormItem v-auto-animate>
              <FormLabel>Total Amount</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Total Amount"
                  v-bind="componentField"
                  :disabled="route.params.name == 'detail' ? true : false"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <div>
            <div class="font-semibold text-sm">Input Image</div>
            <InputImage
              v-model="object.image"
              :image="null"
              :edit="route.params.name != 'detail' ? true : false"
            />
          </div>

          <div>
            <div class="font-semibold text-sm">Input Image</div>
            <InputImage
              v-model="object.image"
              :image="null"
              :edit="route.params.name != 'detail' ? true : false"
            />
          </div>
        </div>

        <FormField v-slot="{ componentField }" name="paymentStatus">
          <FormItem>
            <FormLabel>Status</FormLabel>
            <Select v-bind="componentField">
              <FormControl>
                <SelectTrigger
                  :disabled="route.params.name == 'detail' ? true : false"
                >
                  <SelectValue placeholder="Select a status" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem v-for="item in statusList" :value="item">
                    {{ item }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        </FormField>

        <Gallery
          title="Gallery"
          v-model="object.file_image"
          :listImg="[]"
          :edit="route.params.name != 'detail' ? true : false"
        />

        <div class="text-center" v-if="route.params.name != 'detail'">
          <Button type="submit" size="lg"> Submit </Button>
        </div>
      </form>
    </div>
    <Toaster />
  </div>
</template>
