<template>
  <section class="cards-container">
    <h3>{{ header }}</h3>
    <div class="cards">
      <div class="card" v-for="(card, index) in cards" :key="index">{{ card.name }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
  interface Player {
    id: number,
    name: string
    jerseyNumber: number,
    age: number,
    nationality: string,
    pace: number,
    shooting: number,
    passing: number,
    dribbling: number,
    defending: number,
    physicality: number,
    club_id: number,
    club: Club
    league_id: number,
  }

  interface Club {
    id: number,
    name: string,
    nationality: string,
    league: string,
    place_in_table: number,
    league_id: number,
  }

  defineProps<{
    header: string,
    cards: Player[]
  }>();
</script>

<style lang="scss">
  .cards {
    display: flex;
    gap: 40px;

    &-container {
      width: 100%;
      height: 100%;
      min-height: 360px;
      margin: 40px;
      padding: 30px 40px;
      border-radius: 20px;
      background: rgba(199, 201, 198, 0.50);
    }
  }
</style>
