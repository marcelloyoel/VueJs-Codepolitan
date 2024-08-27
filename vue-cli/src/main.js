import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/boostrap.css";
import "animate.css/animate.css";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart);

createApp(App).mount("#app");
