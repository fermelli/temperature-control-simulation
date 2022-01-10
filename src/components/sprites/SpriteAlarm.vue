<script setup>

defineProps({
    fill: {
        type: String,
        default: 'green'
    }
});

</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 498 490" class="sprite-alarm">
        <g transform="translate(-568 -255)">
            <g transform="translate(0.074 3.036)">
                <path
                    d="M65,0H255a65,65,0,0,1,65,65l27.619,285H-27.767L0,65A65,65,0,0,1,65,0Z"
                    transform="translate(657 256)"
                    :fill="fill"
                />
                <path
                    d="M66.08,0H196a65,65,0,0,1,65,65l12,155.617c0,35.9-41.1,64.383-77,64.383H-21.613L0,65C0,29.1,30.181,0,66.08,0Z"
                    transform="translate(650.846 251.964)"
                    fill="#fff"
                    opacity="0.3"
                />
            </g>
            <rect
                width="20"
                height="132"
                rx="10"
                transform="matrix(0.996, 0.087, -0.087, 0.996, 665.868, 391.61)"
                fill="#fff"
            />
            <rect
                width="20"
                height="54"
                rx="10"
                transform="matrix(0.996, 0.087, -0.087, 0.996, 673.784, 308.633)"
                fill="#fff"
            />
            <path
                d="M743.745,506.147c-.07-3.712,0-91.489,0-91.489S748.926,398.1,761.881,403s40.965,23.459,40.965,46.217,1.4,40.615-22.058,60.222S743.815,509.859,743.745,506.147Z"
                transform="translate(0 2.402)"
                fill="#fff"
                opacity="0.36"
            />
            <path
                d="M743.745,506.147c-.07-3.712,0-91.489,0-91.489S748.926,398.1,761.881,403s40.965,23.459,40.965,46.217,1.4,40.615-22.058,60.222S743.815,509.859,743.745,506.147Z"
                transform="translate(1634.576 922.619) rotate(180)"
                fill="#fff"
                opacity="0.36"
            />
            <path
                d="M781.068,608.634V543.083s-2.367-15.46,7.1-19.789,30.178-40.815,28.994-45.762,17.16,43.288,28.994,45.762,8.284,19.789,8.284,19.789v65.551Z"
                transform="translate(-0.873 0.402)"
                fill="#fff"
                opacity="0.36"
            />
            <path
                d="M10,0H394a10,10,0,0,1,10,10V46a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V10A10,10,0,0,1,10,0Z"
                transform="translate(615 609)"
                fill="#5b5b5b"
            />
            <path
                d="M10,0H330a10,10,0,0,1,10,10V46a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V10A10,10,0,0,1,10,0Z"
                transform="translate(615 609)"
                fill="#666"
            />
            <path
                d="M36,0H462a36,36,0,0,1,36,36V90a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V36A36,36,0,0,1,36,0Z"
                transform="translate(568 655)"
                fill="#222"
            />
            <path
                d="M36,0H370a36,36,0,0,1,36,36V90a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V36A36,36,0,0,1,36,0Z"
                transform="translate(568 655)"
                fill="#333"
            />
        </g>
    </svg>
</template>