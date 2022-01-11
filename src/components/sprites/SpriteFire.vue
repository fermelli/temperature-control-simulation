<template>
    <svg class="sprite-fire" viewBox="0 0 49.229 54.069">
        <defs>
            <linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="maroon" />
                <stop offset="0.469" stop-color="#ff2323" />
                <stop offset="1" stop-color="#800f0f" />
            </linearGradient>
            <linearGradient id="b" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#ff541e" />
                <stop offset="1" stop-color="#ffaa17" />
            </linearGradient>
        </defs>
        <g transform="translate(-1860.834 -607.132)">
            <path
                d="M755.784,613.2c-8.674-7.006-6-5.243-8.735-9.8s0-12.908,0-12.908,4.252-4.1,5.315-6.985.456-7.289,0-8.656,3.645,2.126,4.556,4.4,1.367,12.908,1.367,12.908,1.063,3.037,3.8-3.341,5.011-18.83,4.86-21.26-1.367-6.833-3.948-8.048,6.985.607,9.415,3.341,8.5,11.541,7.745,21.867,6.074-5.771,6.074-5.467,1.519-7.441.607-8.656,8.808,6.834,8.2,17.008-.152,14.73-3.493,18.527-11.389,7.065-11.389,7.065Z"
                transform="translate(1115 48)"
                fill="url(#a)"
            />
            <path
                d="M757.147,613.065a8.371,8.371,0,0,1-5.725-6.515c-.79-5.133,2.764-10.068,2.369-13.622s3.159,6.317,2.369,7.9,8.094-2.764,9.871-8.884,3.356-12.634,2.961-15.2,5.33,1.777,6.12,6.91,1.974,14.214,0,15,5.33,1.382,7.3-2.369,4.343-10.068,4.343-10.068a11.863,11.863,0,0,1,1.974,8.094c-.592,4.738-.395,12.634-3.948,15a35.152,35.152,0,0,1-8.291,3.751Z"
                transform="translate(1115.695 47.206)"
                fill="url(#b)"
            />
        </g>
    </svg>
</template>

<style scoped>
.sprite-fire {
    animation: flames 1s ease-in infinite;
    transform-origin: center bottom;
    transform: translateX(-50%);
}

@keyframes flames {
    0% {
        transform: translateX(-50%) scale(1);
    }

    100% {
        transform: translateX(-50%) scale(1.05);
    }
}
</style>