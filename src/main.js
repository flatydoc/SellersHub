import { createApp } from "vue";

import PrimeVue from "primevue/config";
import PrimeIcons from "primevue/config";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import App from "./App";
const app = createApp(App);

app.use(PrimeVue).use(PrimeIcons);

app.mount("#app");
