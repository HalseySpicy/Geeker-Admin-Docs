<template>
	<img :src="src" @click="previewImg(src)" :alt="title" :title="title" />
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
defineProps<{ src: string; title?: string }>();
const { proxy }: any = getCurrentInstance();
const previewImg = (src) => proxy.$hevueImgPreview(src);
</script>
