import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.mount('#app');

app.config.globalProperties.dupa = {
  1: "gowno",
}
