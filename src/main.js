import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Ensure that router is imported
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.css";

const app = createApp(App);
app.use(router); // Use router in your app
app.mount("#app");
