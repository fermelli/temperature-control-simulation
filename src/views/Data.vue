<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const simulations = computed(() => store.state.simulations);
const timestamp = computed(() => (id) => {
    const date = new Date(simulations.value[id].timestamp)
    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    let year = date.getFullYear()
    let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    let milis = date.getMilliseconds();
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}:${milis}`
})

store.dispatch('getSimulations');

</script>

<template>
    <header class="w-full h-16 bg-slate-800">
        <div class="container mx-auto p-4">
            <h2 class="text-white font-semibold text-lg">Simulaciones realizadas</h2>
        </div>
    </header>
    <main
        class="container mx-auto p-4 bg-gray-200 h-[calc(100vh_-_4rem)] grid gap-x-4 gap-y-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 overflow-auto"
        v-if="simulations"
    >
        <div
            class="p-4 border border-slate-800 rounded bg-white"
            v-for="(simulation, id, index) in simulations"
            :key="id"
        >
            <div class="flex justify-between items-center pb-2 border-b border-slate-600">
                <h2 class="text-lg">Simulación #{{ id }}</h2>
                <router-link
                    class="link flex justify-center items-center h-8 w-8 rounded-full bg-white hover:bg-slate-800"
                    :to="{ name: 'detail', params: { id: id } }"
                    title="Detalle simulación"
                >
                    <svg class="fill-slate-80" width="24px" height="24px">
                        <use v-bind="{ 'xlink:href': '/feather-sprite.svg#' + 'open' }" />
                    </svg>
                </router-link>
            </div>
            <div>
                <ul class="pt-4">
                    <li class="mb-2">
                        <span class="block text-sm font-semibold">Marca de tiempo</span>
                        <span class="block text-lg font-light">{{ timestamp(id) }}</span>
                    </li>
                    <li class="mb-2">
                        <span class="block text-sm font-semibold">Tiempo de simulación</span>
                        <span
                            class="block text-lg font-light"
                        >{{ simulation.simulationTime }} segundos</span>
                    </li>
                    <li class="mb-2">
                        <span class="block text-sm font-semibold">Temperatura inicial</span>
                        <span class="block text-lg font-light">{{ simulation.roomTemperature }} °C</span>
                    </li>
                    <li class="mb-2">
                        <span class="block text-sm font-semibold">Temperatura calentador</span>
                        <span class="block text-lg font-light">{{ simulation.heaterTemperature }} °C</span>
                    </li>
                    <li class="mb-2">
                        <span class="block text-sm font-semibold">Temperatura máxima</span>
                        <span
                            class="block text-lg font-light"
                        >{{ simulation.maximumTemperature }} °C</span>
                    </li>
                    <li class="mb-2">
                        <span class="block text-sm font-semibold">Temperatura final</span>
                        <span
                            class="block text-lg font-light"
                        >{{ simulation.finalTemperature.toFixed(2) }} °C</span>
                    </li>
                </ul>
            </div>
        </div>
    </main>
    <div class="relative h-[calc(100vh_-_4rem)]" v-else>
        <div class="absolute top-1/2 left-1/2 -translate-y-1/2">
            <div class="spinner"></div>
        </div>
    </div>
</template>

<style scoped>
.link:hover svg {
    fill: #ffffff;
}

.spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border-left-color: #1e293b;
    animation: spinner 1s linear infinite;
}

@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>