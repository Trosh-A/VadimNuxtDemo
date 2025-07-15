<template>
  <div>
    <p>Параметр в роутере</p>
    <p>Это документ {{ params.id }}</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: "doc",
});

const { params } = useRoute();

useHead({
  titleTemplate: params.id + " | %s",
});
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
