<script setup>
import Thermometer from './Thermometer.vue';</script>

<template>
    <div class="w-full h-screen bg-gray-100 rounded px-4 py-8">
        <h2 class="text-2xl text-center mb-4">TABLERO DE CONTROL</h2>
        <div class="flex gap-x-8">
            <div class="w-1/2">
                <h3 class="text-xl mb-4 text-center">Parametros</h3>
                <form>
                    <div class="mt-2 mb-4">
                        <label class="block mb-1 text-sm" for="maxTemp">Temperatura máxima</label>
                        <input
                            class="h-9 w-full rounded px-4 outline-none border border-slate-800"
                            type="text"
                            name="maxTemp"
                            id="maxTemp"
                            placeholder="Temperatura máxima"
                        />
                    </div>
                    <div class="mt-2 mb-4">
                        <label class="block mb-1 text-sm" for="tiempoResp">Tiempo de respuesta</label>
                        <input
                            class="h-9 w-full rounded px-4 outline-none border border-slate-800"
                            type="text"
                            name="tiempoResp"
                            id="tiempoResp"
                            placeholder="Tiempo de respuesta"
                        />
                    </div>
                    <div class="mt-2 mb-4">
                        <label class="block mb-1 text-sm" for="minTemp">Temperatura mínima</label>
                        <input
                            class="h-9 w-full rounded px-4 outline-none border border-slate-800"
                            type="text"
                            name="minTemp"
                            id="minTemp"
                            placeholder="Temperatura mínima"
                        />
                    </div>
                </form>
            </div>
            <div class="w-1/2">
                <h3 class="text-xl mb-4 text-center">Temperatura</h3>
                <Thermometer />
            </div>
        </div>
    </div>
</template>