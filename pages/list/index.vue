<template>
    <div class="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 class="text-2xl font-bold mb-4 border-b-2 pb-2">기관 목록</h1>
        <table class="w-full border-collapse border border-gray-300">
            <thead>
                <tr class="bg-gray-200 text-center">
                    <th class="border p-2">기관명</th>
                    <th class="border p-2">전화번호</th>
                    <th class="border p-2">현주소</th>
                    <th class="border p-2">구주소</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="feature in features" v-bind:key="feature.id" @click="goEdit(feature.id)" class="cursor-pointer hover:bg-yellow-100 text-center">
                    <td class="border p-2">{{ feature.properties.fac_nam }}</td>
                    <td class="border p-2">{{ feature.properties.fac_tel }}</td>
                    <td class="border p-2">{{ feature.properties.fac_n_add }}</td>
                    <td class="border p-2">{{ feature.properties.fac_o_add }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { useState, useFetch, useRuntimeConfig, navigateTo } from "#app";
import type { Feature } from '~/types/Feature';

const config = useRuntimeConfig();
const baseURL = config.public.apiBase;

const features = useState<Feature[]>('features', () => []);

const { data, error } = await useFetch<Feature[]>('/features', {
    baseURL
});

if (data.value) {
    features.value = data.value;
}

if (error.value) {
    alert('조회 에러: ' + error.value.message);
}

const goEdit = (id: string) => {
    navigateTo(`/edit/${id}`);
};
</script>