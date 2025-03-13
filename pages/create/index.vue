<template>
    <div class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-5">
        <h1 class="text-xl font-bold mb-4 border-b pb-2">기관 등록</h1>
        <form class="space-y-4">
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
                <button type="button" @click="insert" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">등록</button>
                <button type="button" @click="goList" class="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500">취소</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { useState, useFetch, useRuntimeConfig, navigateTo } from '#app';
import { v4 as uuidv4 } from 'uuid';
import type { Feature } from '~/types/Feature';

const config = useRuntimeConfig();
const baseURL = config.public.apiBase;

// featureId에 랜덤 uuid 추가하기
const featureId = uuidv4() as string;

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
    id: featureId
}));

const insert = async () => {
    try {
        await useFetch(`/features`, {
            baseURL,
            method: 'POST',
            body: feature.value,
        });
        navigateTo('/list');
    } catch (err) {
        alert('저장 에러: ' + (err instanceof Error ? err.message : err));
    }
}

const goList = () => {
    navigateTo('/list');
}
</script>

<style lang="scss" scoped>

</style>