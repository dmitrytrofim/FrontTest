<template>
 <div class="items">
  <Sortable
   tag="div"
   class="dragArea list-group w-full items__inner"
   :list="store.list"
   item-key="id"
   :options="{
    swap: true,
    filter: '.no-pointer'
   }"
  >
   <template #item="{ element }">
    <div
     @click="choiceItem(element)"
     class="items__cell"
     :class="!element.count && 'no-pointer'"
    >
     <img class="items__cell-img" :src="element.url" alt="" />
     <div class="items__cell-count" v-show="element.count === 0 ? false : true">
      {{ element.count }}
     </div>
    </div>
   </template>
  </Sortable>
  <InventoryPopup class="items__popup" />
 </div>
</template>

<script lang="ts" setup>
import type { ItemInterface } from '~/modules';
import SortableJs from 'sortablejs';
//@ts-ignore
import { Swap } from 'sortablejs/modular/sortable.core.esm';
SortableJs.mount(new Swap());
import { Sortable } from 'sortablejs-vue3';
import InventoryPopup from '~/components/InventoryPopup.vue';
import { useInventoryStore } from '~/stores/inventory';
const store = useInventoryStore();

const choiceItem = (elem: ItemInterface) => {
 if (elem.count) {
  store.openPopup();
  store.changePopupContent(elem);
 } else {
  store.closePopup();
 }
};
</script>

<style scoped lang="scss">
.items {
 position: relative;
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
  position: relative;
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
  &.no-pointer {
   cursor: auto;
  }
 }
 &__cell-count {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 10px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  padding: 4px 5px 2px 5px;
  border-left: 1px solid var(--b-4d4d4d);
  border-top: 1px solid var(--b-4d4d4d);
  border-radius: 6px 0 0 0;
 }
 &__popup {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
 }
}
</style>
