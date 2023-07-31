import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import "./stylesheets/main.scss";

import App from "./App.vue";
import router from "./router";
import { solidIcons } from "./utils/font_awesome";

solidIcons.forEach(icon => library.add(icon));

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount('#app');
