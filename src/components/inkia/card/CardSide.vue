<template>
  <div
    class="p-3 bg-background shadow-lg flex items-center rounded-2xl border border-foreground/10"
  >
    <div class="flex-none">
      <div>
        <slot name="header"></slot>
      </div>
    </div>
    <div class="grow pl-2 flex items-center flex-wrap">
      <div class="text-sm grow pr-4 font-medium">
        <slot name="title"></slot>
      </div>
      <div class="flex-none grid grid-cols-2 gap-2">
        <slot name="value"></slot>
      </div>
    </div>
  </div>
</template>
