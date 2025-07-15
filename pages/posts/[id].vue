<template>
  <div>
    <div>Hello from Post {{ params.id }}</div>
    <NuxtLink :to="{ name: 'posts' }">К постам</NuxtLink>
    <p v-if="pending">Загрузка</p>
    <pre v-else-if="post">
      {{ post }}
  </pre
    >
  </div>
</template>

<script setup lang="ts">
import { useDummyJsonApi } from "~/composables/api/useDummyJsonApi";

definePageMeta({
  name: "post",
  validate(r) {
    return !isNaN(+r.params.id);
  },
});

const { params } = useRoute();

const { getPostById } = useDummyJsonApi();

const { data: post, pending } = useAsyncData(() => getPostById(+params.id, 0));
</script>

<style scoped></style>
