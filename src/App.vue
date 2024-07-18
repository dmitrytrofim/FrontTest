<template>
 <TheWrapper>
  <TheHeader />
  <!-- <RouterView></RouterView> -->
  <TheFooter />
 </TheWrapper>
</template>

<script lang="ts" setup>
import TheWrapper from '~/layouts/TheWrapper.vue';
import VContainer from '~/components/VContainer.vue';
import TheHeader from '~/layouts/TheHeader.vue';
import TheFooter from '~/layouts/TheFooter.vue';
</script>

<style>
body.j-lock {
 overflow: hidden;
}
</style>
