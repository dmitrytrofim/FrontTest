<template>
 <div class="items">
  <draggable class="dragArea list-group w-full items__inner" :list="store.list">
   <div class="items__cell" v-for="item in store.list" :key="item.id">
    {{ item.name }}
   </div>
  </draggable>
 </div>
</template>

<script lang="ts" setup>
import { VueDraggableNext } from 'vue-draggable-next';
import { useInventoryStore } from '~/stores/inventory';
const store = useInventoryStore();
const draggable = VueDraggableNext;
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
