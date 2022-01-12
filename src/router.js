import { createRouter, createWebHashHistory } from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Data from './views/Data.vue';
import DetailData from './views/DetailData.vue';

const routes = [
	{ path: '/', component: Dashboard, name: 'dashboard' },
	{ path: '/data', component: Data, name: 'data' },
	{ path: '/data/:id', component: DetailData, name: 'detail', props: true },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
