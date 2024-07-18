import { onMounted, ref } from 'vue';
import { defineStore } from 'pinia';
import type { ItemInterface } from '~/modules';
import card1 from '~/assets/img/svg/card-1.svg';
import card2 from '~/assets/img/svg/card-2.svg';
import card3 from '~/assets/img/svg/card-3.svg';

export const useInventoryStore = defineStore('name', () => {
 const list = ref<ItemInterface[]>([
  { url: card1, id: 1, count: 4, description: 'card 1' },
  { url: card2, id: 2, count: 2, description: 'card 2' },
  { url: card3, id: 3, count: 5, description: 'card 3' }
 ]);
 const maxCells = 25;
 const fillList = (max: number) => {
  while (list.value.length < max) {
   const nextId = list.value.length + 1;
   list.value.push({ url: '', id: nextId, count: 0 });
  }
 };

 const popupOpen = ref(false);
 const popupContent = ref<ItemInterface>({ url: '', id: 0, count: 0 });
 const popupControl = ref(false);
 const deleteCount = ref<any>(null);
 const themeDark = ref(true);

 const openPopup = () => (popupOpen.value = true);
 const closePopup = () => {
  popupOpen.value = false;
  toggleControl(false);
 };
 const changePopupContent = (item: ItemInterface) =>
  (popupContent.value = item);
 const toggleControl = (bool: boolean) => (popupControl.value = bool);
 const removeCountCard = (item: ItemInterface, count: number) => {
  const idItem = list.value.findIndex((elem) => elem === item);
  list.value[idItem].count -= count;
  deleteCount.value = null;
  if (list.value[idItem].count <= 0) {
   list.value = list.value.filter((el) => el.id !== item.id);
   fillList(maxCells);
   closePopup();
  }
  console.log(list.value);
 };
 const toggleTheme = () => {
  themeDark.value = !themeDark.value;
  if (themeDark.value) {
   document.querySelector('html')!.classList.remove('j-light');
  } else {
   document.querySelector('html')!.classList.add('j-light');
  }
 };

 onMounted(() => {
  fillList(maxCells);
 });

 return {
  list,
  popupOpen,
  popupContent,
  popupControl,
  deleteCount,
  themeDark,
  fillList,
  openPopup,
  closePopup,
  changePopupContent,
  toggleControl,
  removeCountCard,
  toggleTheme
 };
});
