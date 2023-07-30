import { defineStore } from "pinia";

export const useAppStore = defineStore("AppStore", {
  state: () => {
    return {
      userSession: false,
      isLoading: false
    }
  },
  actions: {
    setUserSession(value: boolean) {
      this.userSession = value;
    },

    setIsLoading(value: boolean) {
      this.isLoading = value;
    }
  }
});