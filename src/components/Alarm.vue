<script setup>
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

</script>

<template>
    <div class="alarm" :style="{ width: width }">
        <SpriteAlarm :fill="fill" />
    </div>
</template>

<style scoped>
.alarm {
    width: 80px;
}
</style>