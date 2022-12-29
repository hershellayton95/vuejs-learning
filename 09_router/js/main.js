import Hello from './hello.js'

const { createApp } = Vue;

const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
});

const app = createApp({
    data() {
        return {
            user: "d",
            conta: 0,
        };
    },
    methods: {
        incConta() {
            this.conta += 1;
        }
    },
    components: {
        Hello
    }
});

app.use(router);

/*
app.component('hello',  {
    template: `
            <p>hhh</p>
    `
});
*/

const mountedApp = app.mount("#app");
