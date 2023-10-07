<template>
  <nav class="bg-transparent">
    <div class="app-name">
      <RouterLink to="/app">Card<span class="text-green">P</span>itch</RouterLink>
    </div>
    <div class="navigation">
      <RouterLink to="/app">Home</RouterLink>
      <RouterLink to="/app/cards">Cards</RouterLink>
      <RouterLink to="/app/collection">My collection</RouterLink>
      <a @click.prevent="logout">Log out</a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import router from '../router';
import { useUserStore } from '../stores/UserStore';

const userStore = useUserStore();

const logout = async () => {
  await fetch("http://localhost:4000/logout", {
    credentials: "include"
  });

  userStore.$reset();
  router.push({ path: "/" });
}
</script>

<style scoped lang="scss">
nav {
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 60px;

  .navigation a {
    margin-left: 30px;
  }

  a {
    color: $white;
    font-size: 24px;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
