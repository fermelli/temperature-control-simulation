<template>
    <div class="flex justify-center gap-x-4 h-[600px]">
        <div class="relative">
            <div class="sprite-thermometer"></div>
            <div
                class="marker absolute w-full border-t-4 bottom-0 border-t-slate-800"
                style="height: 85%;"
            ></div>
        </div>
        <div class="marks">
            <div class="mark" v-for="i in 50" :key="i"></div>
        </div>
    </div>
</template>

<style scoped>
.sprite-thermometer {
    width: 40px;
    height: 100%;
    background: rgb(28, 207, 67);
    background: linear-gradient(
        0deg,
        rgb(28, 207, 67) 0%,
        rgba(248, 187, 25, 1) 50%,
        rgba(255, 0, 0, 1) 100%
    );
}

.marker::before {
    content: "42.5°";
    position: absolute;
    top: 0;
    right: calc(100% + 10px);
    text-align: right;
    transform: translateY(-50%);
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