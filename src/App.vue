<template>
 <TheWrapper>
  <main>
   <div class="container">
    <VInventory />
   </div>
  </main>
 </TheWrapper>
</template>

<script lang="ts" setup>
import TheWrapper from '~/layouts/TheWrapper.vue';
import VInventory from '~/components/VInventory.vue';
</script>

<style>
body.j-lock {
 overflow: hidden;
}
</style>
