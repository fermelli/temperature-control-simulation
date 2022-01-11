<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const maxScale = ref(50);

const store = useStore();

const maximumTemperature = computed(() => store.state.maximumTemperature);
const heightMarker = computed(() => (currentTemperature.value / maxScale.value) * 100 + '%');
const currentTemperature = computed(() => store.state.currentTemperature);
const styles = computed(() => {
    return {
        background: 'rgb(28, 207, 67)',
        background: `linear-gradient(
        0deg,
        rgb(28, 207, 67) 0%,
        rgba(248, 187, 25, 1) ${((maximumTemperature.value / 2) / maxScale.value) * 100}%,
        rgba(255, 0, 0, 1) ${(maximumTemperature.value / maxScale.value) * 100}%`
    }
});

</script>

<template>
    <div class="flex justify-center gap-x-4 h-[600px]">
        <div class="relative">
            <div class="sprite-thermometer" :style="styles"></div>
            <div
                class="marker absolute w-full border-t-4 bottom-0 border-t-slate-800"
                :style="{ height: heightMarker }"
            >
                <div
                    class="relative w-full text-center whitespace-nowrap font-bold text-slate-800"
                >{{ currentTemperature.toFixed(2) }}</div>
            </div>
        </div>
        <div class="marks">
            <div class="mark" v-for="i in 50" :key="i"></div>
        </div>
    </div>
</template>

<style>
.sprite-thermometer {
    width: 40px;
    height: 100%;
}

.marks {
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
}

.mark {
    width: 20px;
    border: 1px solid #cecdcd;
    position: relative;
}

.mark:nth-child(1),
.mark:nth-child(10n) {
    width: 40px;
}

.mark:nth-child(1)::after,
.mark:nth-child(10n)::after {
    position: absolute;
    top: 0;
    right: -30px;
    transform: translateY(-50%);
    font-size: 20px;
}

.mark:nth-child(1)::after {
    content: "0";
}

.mark:nth-child(10)::after {
    content: "10";
}

.mark:nth-child(20)::after {
    content: "20";
}

.mark:nth-child(30)::after {
    content: "30";
}

.mark:nth-child(40)::after {
    content: "40";
}

.mark:nth-child(50)::after {
    content: "50";
}
</style>