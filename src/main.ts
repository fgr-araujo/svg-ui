import './styles/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { ResizedDirective } from './helpers/resized-directive'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('resized', ResizedDirective)

app.mount('#app');

