<template>
  <div class="body-overlay" :class="{ 'loading': appStore.isLoading }">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import router from './router';
import { useAppStore } from './stores/AppStore';
import { useUserStore } from './stores/UserStore';
import { getRefreshToken } from './utils/auth';

const appStore = useAppStore();
const userStore = useUserStore();

onMounted(async () => {
  appStore.setIsLoading(true);

  try {
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
