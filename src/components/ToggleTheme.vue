<template>
 <button @click="store.toggleTheme" class="btn-theme" type="button">
  {{ store.themeDark ? '&#10058;' : '&#9214;' }}
 </button>
</template>

<script lang="ts" setup>
import { useInventoryStore } from '~/stores/inventory';
const store = useInventoryStore();
</script>

<style scoped>
.btn-theme {
 align-self: flex-end;
 color: var(--t-fff);
 font-size: 30px;
}
</style>
