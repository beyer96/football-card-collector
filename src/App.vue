<template>
  <div class="body-overlay" :class="{ 'loading': appStore.isLoading }">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useAppStore } from './stores/AppStore';

const appStore = useAppStore();

</script>

<style scoped>
</style>
