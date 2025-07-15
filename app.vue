<template>
  <div class="dx-viewport" style="height: 100dvh">
    <NuxtErrorBoundary @error="handleError">
      <template #error="{ error }">
        <h1>Ошибка</h1>
        <p>NuxtErrorBoundary</p>
        <pre>{{ error }}</pre>
      </template>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup lang="ts">
import "@/css/reset.css";
// Комменты для порядка следования
import "@/css/common.css";
// Комменты для порядка следования
import "bootstrap/dist/css/bootstrap-grid.min.css";
// Комменты для порядка следования
import "bootstrap/dist/css/bootstrap-utilities.min.css";
// Комменты для порядка следования
import "devextreme/dist/css/dx.light.css";
// Комменты для порядка следования
import config from "devextreme/core/config";
import { loadMessages, locale } from "devextreme/localization";
import ruMessages from "devextreme/localization/messages/ru.json";

config({
  defaultCurrency: "RUB",
  defaultUseCurrencyAccountingStyle: false,
  editorStylingMode: "filled",
});

loadMessages(ruMessages);
locale(navigator.language);

const handleError = (e: Error) => {
  console.error("Ошибка. NuxtErrorBoundary", e);
};
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
