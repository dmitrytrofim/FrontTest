<template>
 <div class="plank" :class="plankClose && 'j-hide'">
  <p class="plank__text">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam hic
   perspiciatis quae reprehenderit repellat harum tenetur sint provident
   nostrum.
  </p>
  <button @click="closePlank" class="plank__close" type="button">&#215;</button>
 </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const plankClose = ref(false);
const closePlank = () => (plankClose.value = true);
</script>

<style scoped lang="scss">
.plank {
 position: relative;
 border: 1px solid var(--b-4d4d4d);
 background-color: var(--b-262626);
 border-radius: 12px;
 padding: 18px 68px 18px 18px;
 &__text {
 }
 &__close {
  position: absolute;
  top: 4px;
  right: 10px;
  font-size: 20px;
 }
 &.j-hide {
  display: none;
 }
}
</style>
