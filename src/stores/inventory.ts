import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useInventoryStore = defineStore('name', () => {
 const val = ref(0);
 const getter = computed(() => val.value * 2);
 function action() {
  val.value++;
 }

 return {};
});
