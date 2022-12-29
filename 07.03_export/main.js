import CustomInput from "./CustomInput.js";
import LoginForm from "./LoginForm.js";

const app = Vue.createApp({});

app.component('login-form', LoginForm);
app.component('custom-input', CustomInput);

app.mount('#app');
