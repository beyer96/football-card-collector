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

      <CardsSectionComponent
        header="Hot Stuff"
        :players="cardStore.hotStuffCards"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import { useAppStore } from '../stores/AppStore';
import { useUserStore } from '../stores/UserStore';
import { useCardStore } from '../stores/CardStore';

import CardsSectionComponent from '../components/CardsSectionComponent.vue';

import { API_BASE_URL } from '../utils/constants';
import { getRefreshToken } from '../utils/auth';

const appStore = useAppStore();
const userStore = useUserStore();
const cardStore = useCardStore();

onMounted(async () => {
  appStore.setIsLoading(true);

  try {
    if (!cardStore.hotStuffCards.length) {
      const response = await fetch(`${API_BASE_URL}/players/random`);
      const { data } = await response.json();

      cardStore.setHotStuffCards(data.players);
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    appStore.setIsLoading(false);
  }
});

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
