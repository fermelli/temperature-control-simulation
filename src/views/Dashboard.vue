<script setup>
import Heater from '../components/Heater.vue';
import Ventilator from '../components/Ventilator.vue';
import Alarm from '../components/Alarm.vue';
import ControlPanel from '../components/ControlPanel.vue';
import RightPanel from '../components/RightPanel.vue';

</script>

<template>
    <div class="h-full grid grid-rows-1 grid-cols-[480px_1fr_320px]">
        <div class="h-full">
            <ControlPanel />
        </div>
        <div class="h-full grid grid-rows-[1fr_2fr] grid-cols-2 bg-gray-200">
            <div class="row-span-full flex items-end">
                <Heater class="mx-auto" />
            </div>
            <div class="flex items-center">
                <Alarm class="mx-auto" fill="red" />
            </div>
            <div>
                <Ventilator class="mx-auto" />
            </div>
        </div>
        <div class="h-full">
            <RightPanel />
        </div>
    </div>
</template>