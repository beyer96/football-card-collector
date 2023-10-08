<template>
  <div class="card">
    <div class="card-stats-upper">
      <span class="overall">99</span>
      <span class="position">RW</span>
    </div>
    <font-awesome-icon class="player-photo" icon="fa-solid fa-user" />
    <div class="card-stats-lower">
      <span class="name">Olatunji</span>
      <div class="divider-vertical"></div>
      <div class="stats-detail">
        <div class="left">
          <span>98 PAC</span>
          <span>97 SHO</span>
          <span>88 PAS</span>
        </div>
        <div class="divider-horizontal"></div>
        <div class="right">
          <span>88 DRI</span>
          <span>98 DEF</span>
          <span>97 PHY</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
  .card {
    position: relative;
    width: 200px;
    aspect-ratio: 0.7633;
    background: url("../assets/images/fifa-cards/fifa_card_1.png") no-repeat;
    font-family: "Roboto";

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

      .divider {
        &-vertical {

        }
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