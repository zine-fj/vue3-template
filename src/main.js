import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 初始化样式
import '@/assets/pubStyle/reset.css'

createApp(App).use(store).use(router).mount("#app");
