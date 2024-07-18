import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { ItemInterface } from '~/modules';
import card1 from '~/assets/img/svg/card-1.svg';
import card2 from '~/assets/img/svg/card-2.svg';
import card3 from '~/assets/img/svg/card-3.svg';

export const useInventoryStore = defineStore('name', () => {
 const maxCells = 25;
 const list = ref<ItemInterface[]>([
  { url: card1, id: 1, count: 4 },
  { url: card2, id: 2, count: 2 },
  { url: card3, id: 3, count: 5 }
 ]);
 while (list.value.length < maxCells) {
  const nextId = list.value.length + 1;
  list.value.push({ url: '', id: nextId, count: 0 });
 }

 return { list };
});
