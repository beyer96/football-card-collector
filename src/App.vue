<template>
  <form @submit.prevent="validateLogin">
    <div class="form-wrapper">
      <div class="input-group">
        <label for="username">Username: </label>
        <input type="text" name="username" id="username">
      </div>
      <div class="input-group">
        <label for="password">Password: </label>
        <input type="password" name="password" id="password">
      </div>
      <button type="submit">Login</button>
    </div>
  </form>

  <div class="form-wrapper">
    <button type="button" @click.prevent="testProtectedEndpoint">Test protected endpoint</button>
  </div>
  <!-- <RouterView /> -->
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

const validateLogin = async () => {
  const username = (document.querySelector("#username") as HTMLInputElement)?.value;
  const password = (document.querySelector("#password") as HTMLInputElement)?.value;
  if (!username || !password) return;

  const loginData = { username, password };
  const response = await fetch("http://localhost:4000/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(loginData),
    credentials: "include"
  });
  const data = await response.json();

  console.log(data);
};

const testProtectedEndpoint = async () => {
  const response = await fetch("http://localhost:3000", {
    credentials: "include",
  });
  const data = await response.json();

  console.log(data);
};
</script>

<style scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
