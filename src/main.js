import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';

import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Image from 'primevue/image';
import Password from 'primevue/password';
import MegaMenu from 'primevue/megamenu';
import Steps from 'primevue/steps';
import InputText from 'primevue/inputtext';
import Accordion from 'primevue/accordion';
import Toast from 'primevue/toast';




import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css' //



const app = createApp(App);

app.use(PrimeVue);

app.component('Dialog', Dialog);
app.component('Button', Button);
app.component('Card', Card);
app.component('Image', Image);
app.component('Password', Password);
app.component('MegaMenu', MegaMenu);
app.component('Steps', Steps);
app.component('InputText', InputText);
app.component('Accordion, Menu', Accordion);
app.component('Toast', Toast);

app.mount('#app')
