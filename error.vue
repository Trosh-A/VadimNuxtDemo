<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <p>error.vue</p>
    <pre>{{ error }}</pre>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();
</script>
