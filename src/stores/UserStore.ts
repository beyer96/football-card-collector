import { defineStore } from "pinia";

interface User {
  username: string,
  createdAt: string,
  cardIds: []
}

export const useUserStore = defineStore("UserStore", {
  // state
  state: () => {
    return {
      username: "",
      createdAt: "",
      cardIds: []
    }
  },
  // actions
  actions: {
    setUser(user: User) {
      this.username = user.username;
      this.createdAt = user.createdAt;
      this.cardIds = user.cardIds;
    }
  },
  // getters
  getters: {
    getFormattedCreatedAt: state => {
      if (!state.createdAt) return;

      const dateStr = state.createdAt;
      const date = new Date((dateStr as string));
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      }).format(date);

      return formattedDate;
    }
  }
});
