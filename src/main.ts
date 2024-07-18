import { createApp } from 'vue';
import '~/assets/scss/style.scss';
import App from '~/App.vue';
// import router from '~/router/index';
// import { createPinia } from 'pinia';

const app = createApp(App);
// const pinia = createPinia();

// app.use(router);
// app.use(pinia);
app.mount('#app');
