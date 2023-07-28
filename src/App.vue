<template>
  <div class="body-overlay" :class="{ 'loading': isLoading }">
    <LoadingSpinner v-if="isLoading" />
    <div v-else class="wrapper">
      <AuthComponent 
        v-if="!userSession"
        title="Sign in"
        :submitCallback="validateLogin"
      />

      <div v-else class="form-wrapper">
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
    </div>
  </div>
  <!-- <RouterView /> -->
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref, watch } from "vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";
import AuthComponent from "./components/AuthComponent.vue";
import { refreshToken } from "./utils/auth";
import { useUserStore } from "./stores/UserStore";

const userStore = useUserStore();
const userSession = ref(false);
const isLoading = ref(true);

watch(userSession, () => {
  document.body.classList.toggle("session", userSession.value);
});

onMounted(async () => {
  userSession.value = document.cookie.includes("fccSession=true");
  if (!userSession.value) {
    setTimeout(() => isLoading.value = false, 1000);
    return;
  }
  
  try {
    const { user } = await refreshToken();

    userStore.setUser(user);
  } catch (err) {
    console.log(err.message);
    userSession.value = false;
  } finally {
    isLoading.value = false;
  }
});

const validateLogin = async () => {
  isLoading.value = true;
  try {
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
  
    userStore.setUser(data.user);
    userSession.value = true;
  } catch (err) {
    console.log(err.message);
  } finally {
    isLoading.value = false;
  }
};

const logout = async () => {
  await fetch("http://localhost:4000/logout", {
    credentials: "include"
  });

  userStore.unsetUser();
  userSession.value = false;
}

const testProtectedEndpoint = async () => {
  const tokenExpiration = sessionStorage.getItem("token-expiration");
  if (!tokenExpiration || +tokenExpiration < Date.now()) {
    await refreshToken();
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

<style scoped>
</style>
