<script setup>
import SpriteHeater from './../components/sprites/SpriteHeater.vue';
import SpriteFire from './../components/sprites/SpriteFire.vue';
</script>

<template>
    <div class="heater">
        <SpriteHeater />
        <SpriteFire class="position-sprite-fire" />
    </div>
</template>

<style scoped>
.heater {
    position: relative;
    width: 400px;
}

.position-sprite-fire {
    position: absolute;
    top: 55%;
    left: 50%;
    width: 20%;
    transform: translateX(-50%);
}
</style>