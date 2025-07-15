<template>
  <div class="d-flex flex-column gap-2">
    <div>Vadim, hello from index.vue</div>
    <hr >
    <p>{{ k }}</p>
    <DxButton text="Рандом" @click="k = randomInteger()" />
    <hr >
    <p>myVal from runtimeConfig: {{ config.public.myVal }}</p>
    <hr >
    <NuxtLink to="/fakePath">Go to error path</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { DxButton } from "devextreme-vue";

definePageMeta({
  name: "index",
});

const k = ref(0);

const config = useRuntimeConfig();
</script>

<style scoped></style>
