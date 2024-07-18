<template>
 <button class="btn" :class="light && 'm-light'" type="button">
  <slot></slot>
 </button>
</template>

<script lang="ts" setup>
defineProps({
 light: Boolean
});
</script>

<style scoped lang="scss">
.btn {
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 8px;
 color: var(--t-fff);
 background: var(--b-fa7272);
 padding: 11px;
 &.m-light {
  color: var(--t-2d2d2d);
  background: var(--b-fff);
 }
}
</style>
