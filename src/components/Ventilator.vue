<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import SpriteBlades from './sprites/SpriteBlades.vue';
import SpriteGrill from './sprites/SpriteGrill.vue';

const store = useStore();

const turnOnVentilator = computed(() => store.state.turnOnVentilator);

const animation = computed(() => {
    return turnOnVentilator.value ? 'rotor 0.7s linear infinite' : ''
});

</script>
<template>
    <div class="ventilator px-6 py-8 rounded bg-white shadow">
        <div class="heatsinks">
            <div class="heatsink"></div>
            <div class="heatsink"></div>
            <div class="heatsink"></div>
        </div>
        <div class="airhole">
            <SpriteBlades :style="{ animation: animation }" />
            <SpriteGrill class="grill" />
        </div>
    </div>
</template>

<style>
@keyframes rotor {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>

<style scoped>
.ventilator {
    max-width: 320px;
}
.heatsinks {
    display: flex;
    flex-direction: column;
    height: 60px;
    row-gap: 12px;
    margin-bottom: 20px;
}

.heatsink {
    background-color: #ffffff;
    width: 100%;
    border-radius: 5px;
    height: 10px;
    box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.171);
}

.airhole {
    width: 100%;
    margin: 10px 0;
    position: relative;
}

.grill {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
}
</style>