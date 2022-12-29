import Home from './Home.js';
import About from './About.js';

const { createApp } = Vue;

const NotFoundComponent = { template: `<div>Errore</div>`}

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/:pathMatch(.*)', component: NotFoundComponent }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
});

const app = createApp({});


app.use(router);



app.mount("#app");
