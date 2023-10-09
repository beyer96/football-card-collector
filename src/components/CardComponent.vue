<template>
  <div class="card" :class="`card-type-${Math.round(Math.random()) + 1}`" data-player-id="{{ player.id }}">
    <div class="card-stats-upper">
      <span class="overall">99</span>
      <span class="position">RW</span>
    </div>
    <font-awesome-icon class="player-photo" icon="fa-solid fa-user" />
    <div class="card-stats-lower">
      <span class="name">{{ getLastName(player.name) }}</span>
      <div class="stats-detail">
        <div class="left">
          <span>{{ player.pace }} PAC</span>
          <span>{{ player.shooting }} SHO</span>
          <span>{{ player.passing }} PAS</span>
        </div>
        <div class="right">
          <span>{{ player.dribbling }} DRI</span>
          <span>{{ player.defending }} DEF</span>
          <span>{{ player.physicality }} PHY</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getLastName } from '../utils/helpers';
import { type Player } from "../../types";
  
defineProps<{
  player: Player
}>();
</script>

<style scoped lang="scss">
  .card {
    position: relative;
    width: 200px;
    aspect-ratio: 0.7633;
    font-family: "Roboto";

    &-type-1 {
      background: url("../assets/images/fifa-cards/fifa_card_1.png") no-repeat;
    }

    &-type-2 {
      background: url("../assets/images/fifa-cards/fifa_card_2.png") no-repeat;
    }    

    &-stats-upper {
      position: absolute;
      top: 45px;
      left: 20px;
      display: flex;
      flex-direction: column;

      .overall {
        font-size: 1.3rem;
        font-weight: 700;
      }

      .position {
        font-size: 1.1rem;
      }
    }

    .player-photo {
      position: absolute;
      top: 42px;
      left: 90px;
      width: 70px;
      height: auto;
      color: rgba(99, 99, 99, 0.7);
    }

    &-stats-lower {
      position: absolute;
      top: 121px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 9px;

      .name {
        font-size: 18px;
        font-weight: 700;
        padding-bottom: 5px;
        border-bottom: 1px solid black;
      }

      .stats-detail {
        display: flex;
        flex-direction: row;
        margin-top: 5px;
        font-size: 14px;

        .left,
        .right {
          display: flex;
          flex-direction: column;
          padding-inline: 6px;
        }

        .left {
          border-right: 1px solid black;
        }
      }
    }
  }
</style>