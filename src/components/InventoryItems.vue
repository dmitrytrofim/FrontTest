<template>
 <div class="items">
  <Sortable
   tag="div"
   class="dragArea list-group w-full items__inner"
   :list="store.list"
   :options="{
    swap: true
   }"
  >
   <template #item="{ element }">
    <div class="items__cell">
     {{ element.name }}
    </div>
   </template>
  </Sortable>
 </div>
</template>

<script lang="ts" setup>
import SortableJs from 'sortablejs';
//@ts-ignore
import { Swap } from 'sortablejs/modular/sortable.core.esm';
SortableJs.mount(new Swap());

import { Sortable } from 'sortablejs-vue3';

import { useInventoryStore } from '~/stores/inventory';
const store = useInventoryStore();
</script>

<style scoped lang="scss">
.items {
 border: 1px solid var(--b-4d4d4d);
 background-color: var(--b-262626);
 border-radius: 12px;
 overflow: hidden;
 &__inner {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: -1px;
 }
 &__cell {
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid var(--b-4d4d4d);
  user-select: none;
  cursor: grab;
  &:active {
   cursor: grabbing;
  }
 }
}
</style>
