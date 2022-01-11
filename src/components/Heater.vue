<script setup>
import SpriteHeater from './../components/sprites/SpriteHeater.vue';
import SpriteFire from './../components/sprites/SpriteFire.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const heaterTemperature = computed(() => store.state.heaterTemperature);
const styles = computed(() => {
    return {
        bottom: `${33 - (heaterTemperature.value / 50)}%`,
        width: heaterTemperature.value == 0 ? '0%' : `${heaterTemperature.value}%`,
    }
});

</script>

<template>
    <div class="heater">
        <SpriteHeater />
        <SpriteFire class="position-sprite-fire" :style="styles" />
    </div>
</template>

<style scoped>
.heater {
    position: relative;
    width: 400px;
    transform-origin: center bottom;
}

.position-sprite-fire {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
</style>