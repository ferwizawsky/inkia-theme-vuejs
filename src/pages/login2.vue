<script setup>
import { h, ref } from "vue";
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
import Toaster from "@/components/ui/toast/Toaster.vue";
import { useOption } from "@/stores/option";
import { useRouter } from "vue-router";

const router = useRouter();
const option = useOption();
const isPassword = ref(true);
const formSchema = toTypedSchema(
  z.object({
    username: z
      .string()
      .min(2, { message: "Username harus berisi lebih dari 2 karakter" })
      .max(25, { message: "Username max 25 karakter" }),
    password: z
      .string()
      .min(4, "Password harus berisi lebih dari 4 karakter")
      .max(50),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  option.updateToken(values.username);
  router.push("/admin");
  // toast({
  //   title: "You submitted the following values:",
  //   description: h(
  //     "pre",
  //     { class: "mt-2 w-[340px] rounded-md bg-slate-950 p-4" },
  //     h("code", { class: "text-white" }, JSON.stringify(values, null, 2))
  //   ),
  // });
});
</script>

<template>
  <div
    style="
      background: linear-gradient(150.36deg, #fefe00 -8.47%, #ffaa01 91.49%);
    "
  >
    <div class="max-w-[900px] mx-auto px-8 pt-8 xl:pt-32 min-h-screen">
      <div
        class="grid lg:grid-cols-2 gap-4 rounded-2xl bg-white p-6 items-center relative"
      >
        <svg
          class="absolute -top-[50px] left-[26px]"
          width="53"
          height="144"
          viewBox="0 0 53 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.191284"
            y="143.876"
            width="143.682"
            height="51.9929"
            rx="25.9965"
            transform="rotate(-90 0.191284 143.876)"
            fill="white"
          />
        </svg>

        <svg
          class="absolute -top-[70px] left-[78px] animate-bounce"
          width="53"
          height="144"
          viewBox="0 0 53 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.191284"
            y="143.876"
            width="143.682"
            height="51.9929"
            rx="25.9965"
            transform="rotate(-90 0.191284 143.876)"
            fill="#FEE700"
          />
        </svg>
        <svg
          class="absolute -top-[40px] left-[130px]"
          width="53"
          height="144"
          viewBox="0 0 53 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.191284"
            y="143.876"
            width="143.682"
            height="51.9929"
            rx="25.9965"
            transform="rotate(-90 0.191284 143.876)"
            fill="white"
          />
        </svg>

        <div class="text-center mb-6">
          <div>
            <svg
              class="mx-auto w-48 mb-4 animate-pulse"
              viewBox="0 0 46 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32.0547 0L0 32.0547H32.0547V0Z" class="fill-primary" />
              <path
                d="M45.5 34.246H0.167834L22.8339 56.9121L45.5 34.246Z"
                class="fill-primary"
              />
            </svg>
          </div>
          <!-- <div class="font-medium text-xl">{{ option.name }}</div> -->
          <!-- <div>Please fill form below to continue</div> -->
          <!-- {{ option.token }} -->
        </div>
        <div class="py-8 pr-6">
          <div>
            <div class="font-semibold text-xl">Selamat Datang !</div>
            <div class="text-xs text-foreground/50">
              Silahkan login menggunakan username dan password anda !
            </div>
          </div>

          <form class="space-y-4 pt-6" @submit.prevent="onSubmit">
            <FormField v-slot="{ componentField }" name="username">
              <FormItem v-auto-animate>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="username"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="password">
              <FormItem v-auto-animate>
                <FormLabel>Password</FormLabel>
                <FormControl class="relative">
                  <Input
                    :type="isPassword ? 'password' : 'text'"
                    placeholder="password"
                    v-bind="componentField"
                  />
                  <span
                    class="absolute right-4 top-9 text-xs cursor-pointer select-none"
                    @click="isPassword = !isPassword"
                    >{{ isPassword ? "Show" : "Hide" }}</span
                  >
                </FormControl>
                <FormDescription> </FormDescription>
                <FormMessage />
              </FormItem>
            </FormField>
            <div class="text-center pt-3">
              <Button type="submit" class="px-20 rounded-full">
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Toaster />
    </div>
  </div>
</template>
