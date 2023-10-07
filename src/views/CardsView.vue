<template>
  <div class="container">
    <CardsSectionComponent 
      header="Hot stuff"
      :cards="[
        {
          name: 'Karta 1'
        },
        {
          name: 'Karta 2'
        }
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import CardsSectionComponent from '../components/CardsSectionComponent.vue';
  // console.log("Cards View");
</script>
