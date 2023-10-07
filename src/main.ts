import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import "./stylesheets/main.scss";

import App from "./App.vue";
import router from "./router";
import { solidIcons } from "./utils/font_awesome";
import { useUserStore } from "./stores/UserStore";
import { getRefreshToken } from "./utils/auth";

solidIcons.forEach(icon => library.add(icon));

const app = createApp(App);

app.use(createPinia());
app.use(router);

const userStore = useUserStore();

router.beforeEach(async to => {
  if (to.name !== 'Auth' && !userStore.username) {
    try {
      const activeSession = document.cookie.includes("fccSession=true");
      if (!activeSession) return { name: 'Auth' };

      const { user } = await getRefreshToken();

      userStore.setUser(user);
    } catch (err) {
      return { name: 'Auth' }
    }
  }
});

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount('#app');
