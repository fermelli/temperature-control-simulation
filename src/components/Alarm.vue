<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import SpriteAlarm from './sprites/SpriteAlarm.vue';

defineProps({
    width: {
        type: String,
        default: '100px'
    },
    fill: {
        type: String,
        default: 'gray'
    }
});

const store = useStore();

const currentTemperature = computed(() => store.state.currentTemperature);
const maximumTemperature = computed(() => store.state.maximumTemperature);

const alarmColor = computed(() => {
    if (currentTemperature.value < maximumTemperature.value / 2) {
        return 'green'
    } else if (currentTemperature.value < maximumTemperature.value) {
        return '#f6d015' //yellow
    } else {
        return 'red'
    }

});


</script>

<template>
    <div class="alarm" :style="{ width: width }">
        <SpriteAlarm :fill="alarmColor" />
    </div>
</template>

<style scoped>
.alarm {
    width: 80px;
}
</style>