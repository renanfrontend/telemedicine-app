import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Certifique-se de que o caminho está correto

const app = createApp(App);

app.use(vuetify);
app.mount('#app');
