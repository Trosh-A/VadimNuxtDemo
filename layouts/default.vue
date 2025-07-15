<template>
  <div class="h-100 d-flex flex-column gap-1">
    <MainToolbar @on-menu-button-click="openState = !openState" />
    <DxDrawer
      v-model:opened="openState"
      class="flex-grow-1"
      opened-state-mode="push"
      :max-size="400"
      :min-size="0"
      template="listMenu"
    >
      <template #listMenu>
        <slot name="menu">
          <MainMenu class="mainMenu" />
        </slot>
      </template>
      <DxScrollView height="100%">
        <!-- Нединамическая обёртка -->
        <div class="position-absolute inset-0">
          <slot />
        </div>
      </DxScrollView>
    </DxDrawer>
  </div>
</template>

<script setup lang="ts">
import { DxScrollView } from "devextreme-vue";
import { DxDrawer } from "devextreme-vue/drawer";
import MainMenu from "~/components/MainMenu.vue";
import MainToolbar from "~/components/MainToolbar.vue";

const openState = ref(false);

const router = useRouter();

router.afterEach(() => {
  openState.value = false;
});

const e = useError();

watchEffect(() => {
  console.log("watchEffect", e);
});

onErrorCaptured((e, inst, str) => {
  console.log("onErrorCaptured default.vue", e, inst, str);
});
</script>

<style scoped>
.mainMenu {
  background-color: #fff;
  height: 300px;
}
</style>
