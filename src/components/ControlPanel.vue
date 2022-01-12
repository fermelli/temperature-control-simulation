<script setup>
import { computed, ref } from 'vue';
import store from '../store';
import Thermometer from './Thermometer.vue';

const isActive = ref(true);

const heaterTemperature = computed({
    get: () => {
        return store.state.heaterTemperature
    },
    set: (value) => {
        if (value == "") value = roomTemperature.value + 1
        if (parseFloat(value) > 50) value = 50.0;
        store.dispatch('updateHeaterTemperature', parseFloat(value))
    }
});

const maximumTemperature = computed({
    get: () => {
        return store.state.maximumTemperature
    },
    set: (value) => {
        if (value == "") value = roomTemperature.value + 1
        if (parseFloat(value) > 50) value = 50.0;
        store.dispatch('updateMaximumTemperature', parseFloat(value))
    }
});

const simulationTime = computed({
    get: () => {
        return store.state.simulationTime
    },
    set: (value) => {
        if (value == "") value = 1;
        store.dispatch('updateSimulationTime', parseInt(value))
    }
});

const roomTemperature = computed({
    get: () => {
        return store.state.roomTemperature
    },
    set: (value) => {
        if (value == "") value = 0;
        store.dispatch('updateRoomTemperature', parseFloat(value))
    }
});

const constantK = computed({
    get: () => {
        return store.state.constantK;
    },
    set: (value) => {
        if (value == "") value = -0.0412;
        store.dispatch('updateConstantK', parseFloat(value))
    }
});

const currentTemperature = computed({
    get: () => {
        return store.state.currentTemperature
    },
    set: (value) => {
        store.dispatch('updateCurrentTemperature', value)
    }
});

const currentTime = computed({
    get: () => {
        return store.state.currentTime;
    },
    set: (value) => {
        store.dispatch('updateCurrentTime', parseInt(value))
    }
});

const turnOnVentilator = computed({
    get: () => {
        return store.state.turnOnVentilator;
    },
    set: (value) => {
        store.dispatch('updateTurnOnVentilator', value)
    }
});

const timeOn = computed({
    get: () => {
        return store.state.timeOn;
    },
    set: (value) => {
        store.dispatch('updateTimeOn', parseInt(value))
    }
});

const timeFrame = computed({
    get: () => {
        return store.state.timeFrame;
    },
    set: (value) => {
        store.dispatch('updateTimeFrame', parseInt(value))
    }
});

const initSimulation = (e) => {
    currentTime.value = 0;
    timeOn.value = 0;
    isActive.value = false;
    turnOnVentilator.value = false

    let intervalId = setInterval(() => {

        let marginTemperature = Math.random();

        if (currentTemperature.value + marginTemperature > maximumTemperature.value) {
            turnOnVentilator.value = true
        } else {
            turnOnVentilator.value = false
        }

        let C;
        let temperature;

        if (turnOnVentilator.value) {
            timeOn.value += timeFrame.value
            C = maximumTemperature.value - currentTemperature.value + marginTemperature
            temperature = currentTemperature.value + C *
                Math.E ** (-constantK.value * (timeOn.value / 1000))

        } else {
            C = roomTemperature.value - heaterTemperature.value;
            temperature = heaterTemperature.value + C *
                Math.E ** (-constantK.value * (currentTime.value / 1000))
        }

        currentTemperature.value = temperature;

        currentTime.value += timeFrame.value;

        if (currentTime.value >= simulationTime.value * 1000) {
            clearInterval(intervalId)
            isActive.value = true;
            turnOnVentilator.value = false
        }

    }, timeFrame.value);
};

const resetSimulation = (e) => {
    store.dispatch('resetSimulation')
};

</script>


<template>
    <div class="w-full h-screen bg-gray-100 rounded px-4 py-8">
        <h2 class="text-2xl text-center mb-4">TABLERO DE CONTROL</h2>
        <div class="flex gap-x-8">
            <div class="w-1/2">
                <h3 class="text-xl mb-4 text-center">Parametros</h3>
                <form @submit.prevent="initSimulation" @reset.prevent="resetSimulation">
                    <div class="mt-2 mb-4">
                        <label class="block mb-1 text-sm" for="heaterTemp">
                            Temp. del calentador
                            (
                            <span
                                class="font-bold"
                            >{{ heaterTemperature }}</span>
                            ) [° C]
                        </label>
                        <input
                            class="h-9 w-full rounded outline-none border"
                            type="range"
                            id="heaterTemp"
                            placeholder="Temperatura del calentador"
                            min="0"
                            max="50"
                            step="0.1"
                            v-model="heaterTemperature"
                        />
                    </div>
                    <div class="mt-2 mb-4">
                        <label class="block mb-1 text-sm" for="maxTemp">Temperatura máxima [° C]</label>
                        <input
                            class="h-9 w-full rounded px-4 outline-none border border-slate-800"
                            type="number"
                            id="maxTemp"
                            placeholder="Temperatura máxima"
                            min="0"
                            step="0.01"
                            max="50"
                            v-model="maximumTemperature"
                        />
                    </div>
                    <div class="mt-2 mb-4">
                        <label
                            class="block mb-1 text-sm"
                            for="simulationTime"
                        >Tiempo de simulación [segundos]</label>
                        <input
                            class="h-9 w-full rounded px-4 outline-none border border-slate-800"
                            type="number"
                            id="simulationTime"
                            min="1"
                            placeholder="Tiempo de simulación"
                            v-model="simulationTime"
                        />
                    </div>
                    <div class="mt-2 mb-4">
                        <label class="block mb-1 text-sm" for="roomTemp">Temperatura ambiente [° C]</label>
                        <input
                            class="h-9 w-full rounded px-4 outline-none border border-slate-800"
                            type="number"
                            id="roomTemp"
                            placeholder="Temperatura ambiente"
                            min="0"
                            step="0.01"
                            v-model="roomTemperature"
                        />
                    </div>
                    <div class="mt-2 mb-4">
                        <label class="block mb-1 text-sm" for="constantK">
                            Constante K (
                            <span class="font-bold">{{ constantK }}</span>)
                        </label>
                        <input
                            class="h-9 w-full rounded outline-none border"
                            type="range"
                            id="constantK"
                            placeholder="Constante K"
                            min="0"
                            max="0.1"
                            step="0.001"
                            v-model="constantK"
                        />
                    </div>
                    <input
                        class="h-10 w-full px-4 my-2 py-1 rounded-full bg-[#0c2f3f] uppercase text-white font-semibold cursor-pointer hover:bg-[#103e53] disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
                        type="submit"
                        value="Iniciar simulación"
                        :disabled="!isActive || currentTemperature != roomTemperature"
                    />
                    <input
                        class="h-10 w-full px-4 my-2 py-1 rounded-full uppercase text-gray-500 font-semibold cursor-pointer border border-gray-500 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-none"
                        type="reset"
                        value="Resetear"
                        :disabled="!isActive"
                    />
                </form>
                <div class="p-4 my-4 text-center">
                    <h4>Tiempo simulando</h4>
                    <span class="block text-5xl">{{ Math.trunc(currentTime / 1000) }}</span>
                    <span class="block text-3xl">segundos</span>
                </div>
            </div>
            <div class="w-1/2">
                <h3 class="text-xl mb-4 text-center">Temperatura</h3>
                <Thermometer />
            </div>
        </div>
    </div>
</template>