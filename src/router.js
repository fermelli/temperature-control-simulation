import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Data from './views/Data.vue';

const routes = [
	{ path: '/', component: Dashboard, name: 'dashboard' },
	{ path: '/data', component: Data, name: 'data' },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
