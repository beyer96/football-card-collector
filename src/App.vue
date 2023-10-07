<template>
  <NavBar v-if="userSession" />
  <div class="body-overlay" :class="{ 'loading': appStore.isLoading, 'bg-transparent': userSession }">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { watch, computed } from 'vue';
import { RouterView } from 'vue-router';
import NavBar from "./components/NavBar.vue";
import { useAppStore } from './stores/AppStore';
import { useUserStore } from './stores/UserStore';

const appStore = useAppStore();
const userStore = useUserStore();

const userSession = computed(() => !!userStore.username);

watch(userSession, () => {
  document.body.classList.toggle("session", userSession.value);
});
</script>
