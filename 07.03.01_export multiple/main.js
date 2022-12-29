import LoginForm from "./LoginForm.js";

const app = Vue.createApp({
    components:{
        'login-form':LoginForm
    }
});

// app.component('login-form', LoginForm);

app.mount('#app');
