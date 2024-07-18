<template>
 <div class="inventory">
  <div class="inventory__inner">
   <div class="inventory__row">
    <InventoryInformation class="inventory__information" />
    <InventoryItems class="inventory__items" />
   </div>
   <InventoryPlank />
  </div>
 </div>
</template>

<script lang="ts" setup>
import InventoryInformation from '~/components/InventoryInformation.vue';
import InventoryItems from '~/components/InventoryItems.vue';
import InventoryPlank from '~/components/InventoryPlank.vue';
</script>

<style scoped lang="scss">
.inventory {
 min-height: 100dvh;
 display: flex;
 align-items: center;
 padding: 20px 0;
 &__inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
 }
 &__row {
  width: 100%;
  display: flex;
  gap: 24px;
 }
 &__information {
  flex: 0 1 230px;
 }
 &__items {
  flex-grow: 1;
 }
}
</style>
