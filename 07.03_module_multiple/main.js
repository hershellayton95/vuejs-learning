import LoginForm from './LoginForm';
import CustomInput from './CustomInput.js';

const app = Vue.createApp({});

app.component('login-form', LoginForm)
app.component('custom-input', CustomInput)

app.mount('#app');
