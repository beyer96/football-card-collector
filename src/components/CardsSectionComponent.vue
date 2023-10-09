<template>
  <section class="cards-container">
    <h3>{{ header }}</h3>
    <div class="cards">
      <div class="card" v-for="player in players" :key="player.id">
        <CardComponent :player="player" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import CardComponent from './CardComponent.vue';
  import { type Player } from "../../types";

  defineProps<{
    header: string,
    players: Player[]
  }>();
</script>

<style scoped lang="scss">
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    &-container {
      max-width: 100%;
      min-height: 360px;
      margin: 40px;
      padding: 30px 40px;
      border-radius: 20px;
      background: rgba(199, 201, 198, 0.50);
    }
  }
</style>
