<template>
    <div class="h-screen">
        <router-view></router-view>
        <router-link
            class="absolute bottom-4 right-4 h-16 w-16 rounded-full bg-white border-2 border-slate-800 flex justify-center items-center hover:bg-gray-100"
            :to="{ name: 'dashboard' }"
            title="Panel de control"
        >
            <svg class="fill-slate-800" width="32px" height="32px">
                <use v-bind="{ 'xlink:href': '/feather-sprite.svg#' + 'dashboard' }" />
            </svg>
        </router-link>
        <router-link
            class="absolute bottom-24 right-4 h-16 w-16 rounded-full bg-white border-2 border-slate-800 flex justify-center items-center hover:bg-gray-100"
            :to="{ name: 'data' }"
            title="Datos"
        >
            <svg class="fill-slate-800" width="32px" height="32px">
                <use v-bind="{ 'xlink:href': '/feather-sprite.svg#' + 'data' }" />
            </svg>
        </router-link>
    </div>
</template>

<style scoped>
.router-link-active {
    background-color: #1e293b;
}

.router-link-active svg {
    fill: #ffffff;
}
</style>
