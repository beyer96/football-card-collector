import { defineStore } from "pinia";
import { type Player } from "types";

export const useCardStore = defineStore("CardStore", {
  state: () => {
    return { 
      hotStuffCards: [] as Player[],
      popularCards: [] as Player[],
    }
  },
  actions: {
    setHotStuffCards(cards: Player[]) {
      this.hotStuffCards = cards;
    },
    setPopularCards(cards: Player[]) {
      this.popularCards = cards;
    }
  }
});
