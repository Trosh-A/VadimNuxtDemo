<template>
  <DxToolbar id="toolbar">
    <DxItem location="before">
      <DxButton icon="menu" @click="$emit('onMenuButtonClick')" />
    </DxItem>
  </DxToolbar>
</template>

<script setup lang="ts">
import { DxButton } from "devextreme-vue";
import { DxItem, DxToolbar } from "devextreme-vue/toolbar";

defineEmits<{
  onMenuButtonClick: [];
}>();
</script>

<style scoped></style>
