<template>
  <div
    class="p-4 bg-background shadow-lg flex items-center rounded-lg border border-foreground/10"
  >
    <div class="flex-none">
      <div>
        <slot name="header"></slot>
      </div>
    </div>
    <div class="grow pl-2">
      <div class="text-xs"><slot name="title"></slot></div>
      <div class="text-lg font-bold"><slot name="value"></slot></div>
    </div>
  </div>
</template>
