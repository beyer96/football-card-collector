<template>
  <div class="container">
    <div class="form-wrapper">
      <h1>Welcome, {{ userStore.username }}!</h1>
      <p>Account created: {{ userStore.getFormattedCreatedAt }}</p>
      <div>
        <button type="button" @click.prevent="testProtectedEndpoint">Test protected endpoint</button>
      </div>

      <div>
        <button type="button" @click.prevent="testFootballAPI">Test Football API endpoint (fetch czech clubs)</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getRefreshToken } from '../utils/auth';
import { useUserStore } from '../stores/UserStore';

const userStore = useUserStore();

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
  const rootURL = "http://localhost:8000/api/v1";
  const response = await fetch(`${rootURL}/clubs?nationality=ČESKO`);
  const data = await response.json();

  console.log(data);
};
</script>
