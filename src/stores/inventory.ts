import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { ItemInterface } from '~/modules';

export const useInventoryStore = defineStore('name', () => {
 const maxCells = 25;
 const list = ref<ItemInterface[]>([
  { name: 'John', id: 1 },
  { name: 'Joao', id: 2 },
  { name: 'Jean', id: 3 },
  { name: 'Gerard', id: 4 }
 ]);
 while (list.value.length < maxCells) {
  const nextId = list.value.length + 1;
  list.value.push({ name: '', id: nextId });
 }

 return { list };
});
