<template>
  <div class="body-overlay">
    <main>
      <div class="form-wrapper">
        <h1>Welcome, {{ userStore.username }}!</h1>
        <p>Account created: {{ userStore.getFormattedCreatedAt }}</p>
        <button  type="button" @click.prevent="logout">Logout</button>
        <div>
          <button type="button" @click.prevent="testProtectedEndpoint">Test protected endpoint</button>
        </div>

        <div>
          <button type="button" @click.prevent="testFootballAPI">Test Football API endpoint (fetch czech clubs)</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { getRefreshToken } from '../utils/auth';
import { useUserStore } from '../stores/UserStore';
import router from '../router';

const userStore = useUserStore();

const logout = async () => {
  await fetch("http://localhost:4000/logout", {
    credentials: "include"
  });

  userStore.$reset;
  router.push({ path: "/" });
}

const testProtectedEndpoint = async () => {
  const tokenExpiration = sessionStorage.getItem("token-expiration");
  if (!tokenExpiration || +tokenExpiration < Date.now()) {
    await getRefreshToken();
  }
  const response = await fetch("http://localhost:3000", {
    credentials: "include",
  });
  const data = await response.json();

  console.log(data);
};

const testFootballAPI = async () => {
  const rootURL = "https://football-api-n81o.onrender.com/api/v1";
  const response = await fetch(`${rootURL}/clubs?nationality=ČESKO`);
  const data = await response.json();

  console.log(data);
};
</script>
