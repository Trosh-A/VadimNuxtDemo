<template>
  <div class="position-relative h-100">
    <DxDataGrid
      class="position-absolute inset-0"
      :data-source="items"
      :allow-column-reordering="true"
      :allow-column-resizing="true"
      :show-borders="true"
      :show-column-headers="true"
      :show-column-lines="true"
      :show-row-lines="true"
      :row-alternation-enabled="true"
    >
      <DxScrolling mode="standard" />
      <DxColumnChooser :allow-search="true" :enabled="true" />
      <DxPager
        :allowed-page-sizes="[50, 100, 200]"
        :visible="true"
        :show-info="true"
        :show-navigation-buttons="true"
        :show-page-size-selector="true"
      />
      <DxPaging :enabled="true" :page-size="50" />
      <DxColumn caption="Id" :data-field="n('id')" data-type="number" />
      <DxColumn caption="Имя" :data-field="n('name')" data-type="string" />
    </DxDataGrid>
  </div>
</template>

<script setup lang="ts">
import { DxColumn, DxColumnChooser, DxDataGrid, DxPager, DxPaging, DxScrolling } from 'devextreme-vue/data-grid';


definePageMeta({
  name: "table",
});

const items = Array(200).fill(1).map((_, i) => ({ id: i + 1, name: `Id = ${i + 1}` }));
const n= gfn<typeof items[number]>;
</script>

<style scoped></style>
