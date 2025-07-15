<template>
  <div>
    <h1>Hello from Vadim Layout</h1>
    <DxSlider :min="0" :max="100" :value="30" :step="10" :tooltip="{ enabled: true }" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { DxSlider } from "devextreme-vue/slider";
</script>
