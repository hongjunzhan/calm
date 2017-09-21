<template>
	<div class="wrap">
		<headerBar></headerBar>
		<tabContent></tabContent>
		<!--<bottomNav></bottomNav>-->
	</div>
</template>

<script>
	import headerBar from '../components/header-bar.vue'
	import tabContent from '../components/tab-content.vue'
	import bottomNav from '../components/bottom-nav.vue'
	export default{
		components:{headerBar,tabContent,bottomNav},
		name: 'app',
	}
</script>

<style>
	/*.mu-tabs{position: fixed;top: 56px;}*/
</style>