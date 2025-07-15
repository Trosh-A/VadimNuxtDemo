<template>
  <div>
    <DummyPosts />
  </div>
</template>

<script setup lang="ts">
import DummyPosts from "~/components/DummyPosts.vue";

definePageMeta({
  name: "posts",
});
</script>

<style scoped></style>
