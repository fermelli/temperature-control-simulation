<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const route = useRoute()

defineProps({
    id: {
        type: [Number, String],
        required: true
    }
});

store.dispatch('getSimulations');

store.commit('selectedId', route.params.id);

const simulation = computed(() => store.getters.getSimulationById)
const timestamp = () => {
    const date = new Date(simulation.value.timestamp)
    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    let year = date.getFullYear()
    let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    let milis = date.getMilliseconds();
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}:${milis}`
};

</script>

<template>
    <header class="w-full h-16 bg-slate-800">
        <div class="container mx-auto p-4">
            <h2 class="text-white font-semibold text-lg">Detalle de simulación #{{ id }}</h2>
        </div>
    </header>
    <main
        class="container mx-auto p-4 bg-gray-200 h-[calc(100vh_-_4rem)] grid grid-cols-[300px_1fr] gap-x-8"
        v-if="simulation"
    >
        <div>
            <h3 class="block text-lg mb-4 font-semibold">Datos</h3>
            <ul class="p-4 bg-white">
                <li class="mb-2 px-4">
                    <span class="block text-sm font-semibold">Marca de tiempo</span>
                    <span class="block text-lg font-light">{{ timestamp() }}</span>
                </li>
                <li class="mb-2 px-4">
                    <span class="block text-sm font-semibold">Tiempo de simulación</span>
                    <span class="block text-lg font-light">{{ simulation.simulationTime }} segundos</span>
                </li>
                <li class="mb-2 px-4">
                    <span class="block text-sm font-semibold">Temperatura inicial</span>
                    <span class="block text-lg font-light">{{ simulation.roomTemperature }} °C</span>
                </li>
                <li class="mb-2 px-4">
                    <span class="block text-sm font-semibold">Temperatura calentador</span>
                    <span class="block text-lg font-light">{{ simulation.heaterTemperature }} °C</span>
                </li>
                <li class="mb-2 px-4">
                    <span class="block text-sm font-semibold">Temperatura máxima</span>
                    <span class="block text-lg font-light">{{ simulation.maximumTemperature }} °C</span>
                </li>
                <li class="mb-2 px-4">
                    <span class="block text-sm font-semibold">Temperatura final</span>
                    <span
                        class="block text-lg font-light"
                    >{{ simulation.finalTemperature ? simulation.finalTemperature.toFixed(2) : '' }} °C</span>
                </li>
            </ul>
        </div>
        <div class="overflow-y-auto">
            <h3 class="block text-lg mb-4 font-semibold">Mediciones</h3>
            <table class="table" v-if="simulation.measurements">
                <thead>
                    <th>#</th>
                    <th>Temperatura</th>
                    <th>Tiempo</th>
                    <th>Ventilador</th>
                    <th>Tiempo encendido</th>
                </thead>
                <tbody>
                    <tr v-for="(measurement, key, index) in simulation.measurements" :key="key">
                        <th>{{ index + 1 }}</th>
                        <td>{{ measurement.currentTemperature }}</td>
                        <td>{{ measurement.currentTime.toFixed(2) }}</td>
                        <td>{{ measurement.turnOnVentilator ? 'Encendido' : 'Apagado' }}</td>
                        <td>{{ measurement.timeOn }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
    <div class="relative h-[calc(100vh_-_4rem)]" v-else>
        <div class="absolute top-1/2 left-1/2 -translate-y-1/2">
            <div class="spinner"></div>
        </div>
    </div>
</template>

<style scoped>
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
.table {
    width: 100%;
    background-color: white;
}

.table thead th {
    padding: 1rem;
    border-bottom: 1px solid #d2d2d3;
}

.table tbody th,
.table td {
    padding: 0.25rem 1rem;
    border-bottom: 1px solid #d2d2d3;
}

.table td:not(:nth-child(4)) {
    text-align: right;
}

.table td:nth-child(4) {
    text-align: center;
}
</style>