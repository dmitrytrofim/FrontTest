<template>
 <div class="information">
  <img class="information__img" :src="ImgInform" alt="" />
  <div class="information__box">
   <h2 class="information__title">Заголовок</h2>
   <p class="information__text">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nisi
    exercitationem deleniti reprehenderit consequuntur iste consequatur
    cupiditate obcaecati tenetur ex?
   </p>
  </div>
 </div>
</template>

<script lang="ts" setup>
import ImgInform from '~/assets/img/img.png';
</script>

<style scoped lang="scss">
.information {
 display: flex;
 flex-direction: column;
 gap: 10px;
 border: 1px solid var(--b-4d4d4d);
 background-color: var(--b-262626);
 border-radius: 12px;
 padding: 14px;
 &__img {
 }
 &__box {
 }
 &__title {
  text-align: center;
  margin-bottom: 10px;
 }
 &__text {
 }
}
</style>
