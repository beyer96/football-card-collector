<template>
  <LoadingSpinner v-if="appStore.isLoading" />
  <div v-else>
    <AuthComponent
      type="login"
      :submitCallback=validateLogin
      class="auth login"
      :class="{ visible: selectedForm == 'login' }"
      @ctaClick="(target: string) => selectedForm = target"
    />
    <AuthComponent
      type="register"
      :submitCallback=registerUser
      class="auth register"
      :class="{ visible: selectedForm == 'register' }"
      @ctaClick="(target: string) => selectedForm = target"
    />
    <!-- <AuthComponent
      type="forgottenPassword"
      :submitCallback=resetPassword
    /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import AuthComponent from "../components/AuthComponent.vue";
import { useUserStore } from "../stores/UserStore";
import { useAppStore } from "../stores/AppStore";
import router from "../router";
import { AUTH_SERVER_BASE_URL } from "../utils/constants";

const userStore = useUserStore();
const appStore = useAppStore();
const selectedForm = ref("login");

const validateLogin = async () => {
  appStore.setIsLoading(true);

  try {
    const username = (document.querySelector("#login-username") as HTMLInputElement)?.value;
    const password = (document.querySelector("#login-password") as HTMLInputElement)?.value;
    if (!username || !password) return;
  
    const loginData = { username, password };
    const response = await fetch(`${AUTH_SERVER_BASE_URL}/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(loginData),
      credentials: "include"
    });
    const data = await response.json();
  
    userStore.setUser(data.user);
    router.push({ path: "/app" });
  } catch (err) {
    console.log(err.message);
  } finally {
    appStore.setIsLoading(false);
  }
};

const registerUser = async () => {
  appStore.setIsLoading(true);

  try {
    const username = (document.querySelector("#register-username") as HTMLInputElement)?.value;
    const password = (document.querySelector("#register-password") as HTMLInputElement)?.value;
    const repeatPassword = (document.querySelector("#repeat-password") as HTMLInputElement)?.value;

    if (password != repeatPassword) throw Error("Password does not match!");

    const registrationData = { username, password };
    const response = await fetch(`${AUTH_SERVER_BASE_URL}/register`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(registrationData),
      credentials: "include"
    });
    const data = await response.json();

    userStore.setUser(data.user);
    router.push({ path: "/app" });
  } catch (err) {
    console.log(err.message);
  } finally {
    appStore.setIsLoading(false);
  }
}

</script>

<style scoped lang="scss">
.auth {
  display: none;

  &.visible {
    display: flex;
  }
}
</style>
