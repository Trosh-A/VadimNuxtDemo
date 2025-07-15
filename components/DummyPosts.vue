<template>
  <div>
    <h2>DummyPosts</h2>
    <div class="d d-flex align-items-center gap-1">
      <DxButton text="Перезагрузить" @click="reload(false)" />
      <DxButton text="Перезагрузить с ошибкой" @click="reload(true)" />
    </div>
    <NuxtLink :to="{ name: 'post', params: { id: 5000 } }">К битому посту</NuxtLink>
    <p>Статус: {{ status }}</p>
    <p v-if="pending">Загрузка</p>
    <ul v-else-if="posts">
      <li v-for="(p, index) in posts" :key="p.id">
        <NuxtLink :to="{ name: 'post', params: { id: p.id } }">
          {{ index + 1 }}) {{ p.title }}
        </NuxtLink>
      </li>
    </ul>
    <p v-else-if="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { DxButton } from "devextreme-vue";
import { useDummyJsonApi } from "~/composables/api/useDummyJsonApi";

const { getPosts } = useDummyJsonApi();

let withError: boolean = false;
const fakeDelay = 1500;

const { data: posts, refresh, error, pending, status } = useAsyncData(() =>
  getPosts(fakeDelay)
    .then((d) => d.posts)
    .then((d) => {
      if (withError) throw "Искуственная ошибка";
      return d;
    })
);

const reload = async (withErr: boolean) => {
  withError = withErr;
  await refresh();
};
</script>

<style scoped></style>
