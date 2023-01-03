<template>
	<a :href="link" target="_blank" style="padding-right: 10px">
		<img :src="src" :alt="title" :title="title" class="avatar" />
	</a>
</template>

<script setup lang="ts">
defineProps<{ src: string; title: string; link: string }>();
</script>

<style scoped lang="scss">
.avatar {
	width: 50px;
	height: 50px;
	border-radius: 25px;
	cursor: pointer;
	display: inline-block;
}
</style>
