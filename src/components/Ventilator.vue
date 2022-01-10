<script setup>
import SpriteBlades from './sprites/SpriteBlades.vue';
import SpriteGrill from './sprites/SpriteGrill.vue';
</script>
<template>
    <div class="ventilator p-8 rounded bg-white shadow">
        <div class="heatsinks">
            <div class="heatsink"></div>
            <div class="heatsink"></div>
            <div class="heatsink"></div>
        </div>
        <div class="airhole">
            <SpriteBlades />
            <SpriteGrill class="grill" />
        </div>
    </div>
</template>

<style scoped>
.ventilator {
    width: 320px;
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