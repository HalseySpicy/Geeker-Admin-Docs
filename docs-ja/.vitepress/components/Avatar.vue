<template>
	<a :href="link" target="_blank">
		<img class="avatar" :src="src" :alt="title" :title="title" />
	</a>
</template>

<script setup lang="ts">
defineProps<{ src: string; title: string; link: string }>();
</script>

<style scoped lang="scss">
a {
	padding-right: 10px;
}
.avatar {
	width: 50px;
	height: 50px;
	border-radius: 25px;
	cursor: pointer;
	display: inline-block;
}
</style>
