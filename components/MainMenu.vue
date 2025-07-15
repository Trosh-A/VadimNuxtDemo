<template>
  <DxList :items="items" :key-expr="n('name')">
    <template #item="{ data }: { data: typeof items[number] }">
      <div>
        <NuxtLink class="link" :to="{ name: data.name }">{{ data.displayName }}</NuxtLink>
      </div>
    </template>
  </DxList>
</template>

<script setup lang="ts">
import type { RoutesNamesList } from "@typed-router";
import { DxList } from "devextreme-vue/list";

type Item = {
  name: RoutesNamesList;
  displayName: string;
};

const items = [
  {
    name: "index",
    displayName: "Главная",
  },
  {
    name: "docs",
    displayName: "Документы",
  },
  {
    name: "posts",
    displayName: "Посты",
  },
  {
    name: "table",
    displayName: "Таблица",
  },
  {
    name: 'vadim',
    displayName: "Вадим layout",
  },
] as const satisfies Item[];

const n = (key:keyof Item) => gfn<Item>(key);
</script>

<style scoped>
.link {
  display: block;
}
</style>
