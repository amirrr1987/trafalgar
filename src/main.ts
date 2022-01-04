import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css'
// import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css'
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/fontawesome.min.js'
import './assets/css/icon.css'
import print from 'vue3-print-nb'

const app = createApp(App)
app.use(print)
app.mount('#app')
