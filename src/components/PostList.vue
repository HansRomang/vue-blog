<template>
	<div class="post-list">
		<div v-for="post in posts" :key="post">
			<SinglePost :post="post" />
		</div>
	</div>
</template>

<script>
import SinglePost from './SinglePost.vue'
import { onMounted, onUnmounted } from 'vue'
export default {
	props:['posts'],
	components:{SinglePost},
	setup(props){
		onMounted(() => {
			console.log('component mounted');
			
		})
		onUnmounted(()=> {
			console.log('component unmounted');
		})
	}
}
</script>

<style>

</style>