<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const turnOnVentilator = computed({
    get: () => {
        return store.state.turnOnVentilator;
    },
    set: (value) => {
        store.dispatch('updateTurnOnVentilator', value);
    }
});

const timeFrame = computed({
    get: () => {
        return store.state.timeFrame;
    },
    set: (value) => {
        store.dispatch('updateTimeFrame', value);
    }
});

const timeGreen = computed(() => store.state.timeGreen);
const timeYellow = computed(() => store.state.timeYellow);
const timeRed = computed(() => store.state.timeRed);

</script>

<template>
    <div class="w-full h-screen bg-gray-100 rounded px-4 py-8">
        <h2 class="text-2xl text-center mb-4">DATOS</h2>
        <div>
            <h4>Ventilador</h4>
            <span
                class="flex justify-center items-center h-8 w-16 rounded-full bg-green-600 text-white font-semibold shadow-lg cursor-pointer my-2"
                v-if="turnOnVentilator"
                @click="turnOnVentilator = false"
            >ON</span>
            <span
                class="flex justify-center items-center h-8 w-16 rounded-full bg-red-600 text-white font-semibold shadow-lg cursor-pointer my-2"
                v-else
                @click="turnOnVentilator = true"
            >OFF</span>
        </div>
        <form>
            <div class="mt-2 mb-4">
                <label class="block mb-1 text-sm" for="timeFrame">Periodicidad [ms]</label>
                <input
                    class="h-9 w-full rounded px-4 outline-none border border-slate-800"
                    type="number"
                    id="timeFrame"
                    placeholder="Temperatura máxima"
                    min="10"
                    step="10"
                    max="1000"
                    v-model="timeFrame"
                />
            </div>
        </form>
        <div>
            <h4 class="mb-2">Tiempo de activación</h4>
            <ul>
                <li class="mb-3">
                    <span class="block text-xs font-bold">Led verde</span>
                    <span class="block font-light">{{ timeGreen / 1000 }} segundos</span>
                </li>
                <li class="mb-3">
                    <span class="block text-xs font-bold">Led amarillo</span>
                    <span class="block font-light">{{ timeYellow / 1000 }} segundos</span>
                </li>
                <li class="mb-3">
                    <span class="block text-xs font-bold">Led rojo</span>
                    <span class="block font-light">{{ timeRed / 1000 }} segundos</span>
                </li>
            </ul>
        </div>
    </div>
</template>