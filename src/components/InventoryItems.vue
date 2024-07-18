<template>
 <div class="items">
  <draggable class="dragArea list-group w-full items__inner" :list="list">
   <div class="items__cell" v-for="item in list" :key="item.id">
    {{ item.name }}
   </div>
  </draggable>
 </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
import type { ItemInterface } from '~/modules';
const draggable = VueDraggableNext;
const maxCells = 25;
const list = ref<ItemInterface[]>([
 { name: 'John', id: 1 },
 { name: 'Joao', id: 2 },
 { name: 'Jean', id: 3 },
 { name: 'Gerard', id: 4 }
]);
while (list.value.length < maxCells) {
 const nextId = list.value.length + 1;
 list.value.push({ name: nextId.toString(), id: nextId });
}
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
