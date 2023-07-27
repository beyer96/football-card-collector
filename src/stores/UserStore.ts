import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
  // state
  state: () => {
    return {
      username: "",
      // createdAt: 
      // cardIds: 
    }
  },
  // actions
  actions: {
    setUser(user: string) {
      this.username = user;
      // this.createdAt
      // this.cardIds
    }
  },
  // getters
  getters: {
    
  }
});
