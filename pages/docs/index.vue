<template>
  <div>
    <h2>Главная страница документов</h2>
    <ul>
      <li v-for="n in 100" :key="n">
        <NuxtLink :to="{ name: 'doc', params: { id: n } }">Док {{ n }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: "docs",
});
</script>

<style scoped></style>
