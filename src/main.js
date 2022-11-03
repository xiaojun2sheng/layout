import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index';
import antDesignVue from 'ant-design-vue'
import "ant-design-vue/dist/antd.css";
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(antDesignVue);
app.use(router);
app.mount("#app");
