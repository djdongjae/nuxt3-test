<template>
    <div class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-5">
        <h1 class="text-xl font-bold mb-4 border-b pb-2">기관 수정</h1>
        <div class="space-y-4">
            <input type="text" v-model="feature.properties.fac_nam" placeholder="기관명"
                class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300" />
            <input type="phone" v-model="feature.properties.fac_tel" placeholder="전화번호"
                class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300" />
            <input type="text" v-model="feature.properties.fac_n_add" placeholder="주소"
                class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300" />
            <select v-model="feature.properties.cat_nam"
                class="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300">
                <option value="노인복지시설">노인복지시설</option>
                <option value="노인의료시설">노인의료시설</option>
                <option value="재가복지시설">재가복지시설</option>
                <option value="학대피해노인쉼터">학대피해노인쉼터</option>
            </select>

            <div class="flex space-x-4">
                <button type="button" @click="save" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">저장</button>
                <button type="button" @click="goList" class="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500">취소</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useState, useFetch, useRuntimeConfig, useRoute, navigateTo } from '#app';
import type { Feature } from '~/types/Feature';

const config = useRuntimeConfig();
const baseURL = config.public.apiBase;

const route = useRoute();
const featureId = route.params.id as string;

const feature = useState<Feature>('feature', () => ({
    type: "Feature",
    geometry: {
        type: "Point",
        coordinates: [0, 0]
    },
    properties: {
        fac_nam: "",
        fac_tel: "",
        cat_nam: "",
        fac_o_add: "",
        fac_n_add: ""
    },
    id: ""
}));

const { data, error } = await useFetch<Feature>(`/features/${featureId}`, { baseURL });

if (data.value) {
        feature.value = data.value;
    }
    
if (error.value) {
    alert('조회 에러: ' + error.value.message);
}

const save = async () => {
    if (!feature.value) return;

    try {
        await useFetch(`/features/${featureId}`, {
            baseURL,
            method: 'PUT',
            body: feature.value,
        });
        navigateTo('/list');
    } catch (err) {
        alert('저장 에러: ' + (err instanceof Error ? err.message : err));
    }
};

const goList = () => {
    navigateTo('/list');
};
</script>