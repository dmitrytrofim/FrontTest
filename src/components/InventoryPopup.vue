<template>
 <Transition>
  <div class="popup" v-show="store.popupOpen">
   <div class="popup__visual">
    <img class="popup__visual-img" :src="store.popupContent.url" alt="" />
   </div>
   <hr class="popup__line" />
   <p class="popup__text">{{ store.popupContent.description }}</p>
   <hr class="popup__line" />
   <button @click="store.closePopup" class="popup__close" type="button">
    &#215;
   </button>
   <div class="popup__control">
    <VButton
     @click="store.toggleControl(true)"
     v-if="!store.popupControl"
     class="popup__control-btn"
    >
     Удалить предмет
    </VButton>
    <div v-if="store.popupControl" class="popup__control-group">
     <input
      v-model="store.deleteCount"
      class="popup__control-group-inp"
      type="number"
      placeholder="Введите количество"
     />
     <div class="popup__control-group-row">
      <VButton
       @click="store.toggleControl(false)"
       light
       class="popup__control-group-btn"
      >
       Отмена
      </VButton>
      <VButton
       @click="store.removeCountCard(store.popupContent, store.deleteCount)"
       class="popup__control-group-btn m-long"
      >
       Подтвердить
      </VButton>
     </div>
    </div>
   </div>
  </div>
 </Transition>
</template>

<script lang="ts" setup>
import { useInventoryStore } from '~/stores/inventory';
import VButton from '~/components/VButton.vue';

const store = useInventoryStore();
</script>

<style scoped lang="scss">
.popup {
 position: relative;
 width: 250px;
 display: flex;
 flex-direction: column;
 border-left: 1px solid var(--b-4d4d4d);
 backdrop-filter: blur(16px);
 background: rgba(38, 38, 38, 0.5);
 padding: 15px;
 &__visual {
  width: 100%;
  padding: 50px 50px 30px;
 }
 &__visual-img {
  width: 100%;
 }
 &__line {
  width: 100%;
  border-color: var(--b-4d4d4d);
 }
 &__text {
  flex-grow: 1;
  padding: 10px 0;
  overflow-y: auto;
 }
 &__control {
  display: flex;
  flex-direction: column;
  padding: 11px 0 3px;
 }
 &__control-btn {
 }
 &__control-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
 }
 &__control-group-row {
  display: flex;
  gap: 10px;
 }
 &__control-group-inp {
  border: 1px solid var(--b-4d4d4d);
  background-color: var(--b-262626);
  border-radius: 4px;
  padding: 12px;
 }
 &__control-group-btn {
  &.m-long {
   flex-grow: 1;
  }
 }
 &__close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  z-index: 10;
 }
}
.v-enter-active,
.v-leave-active {
 transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
 opacity: 0;
}
</style>
