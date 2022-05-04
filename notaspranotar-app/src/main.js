import jquery from "jquery";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

window.$ = window.jQuery = jquery;

/* Import de Estilos */
import "./assets/styles/variaveis.sass";

/* Import de Componentes */
import NotasSection from "./components/NotasSection.vue";
import NotasButton from "./components/NotasButton.vue";
import NotasHeader from "./components/NotasHeader.vue";

const app = createApp(App);

app.component("NotasSection", NotasSection);
app.component("NotasButton", NotasButton);
app.component("NotasHeader", NotasHeader);

app.use(createPinia());
app.use(router);

app.mount("#app");