<template>
  <NavBar v-if="userSession" />
  <div class="body-overlay" :class="{ 'loading': appStore.isLoading, 'bg-transparent': userSession }">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, computed } from 'vue';
import { RouterView } from 'vue-router';
import router from './router';
import NavBar from "./components/NavBar.vue";
import { useAppStore } from './stores/AppStore';
import { useUserStore } from './stores/UserStore';
import { getRefreshToken } from './utils/auth';

const appStore = useAppStore();
const userStore = useUserStore();

const userSession = computed(() => !!userStore.username);

watch(userSession, () => {
  document.body.classList.toggle("session", userSession.value);
});

onMounted(async () => {
  appStore.setIsLoading(true);

  try {
    const activeSession = document.cookie.includes("fccSession=true");
    if (!activeSession) return;

    const { user } = await getRefreshToken();

    userStore.setUser(user);
    router.push({ path: "/app" });
  } catch (err) {
    console.log(err.message);
  } finally {
    appStore.setIsLoading(false);
  }
});
</script>
