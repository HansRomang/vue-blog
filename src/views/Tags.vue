<template>
  <div class="home">
		<div v-if="error">{{error}}</div>
		<div v-if="posts.length" class="layout">
			<h1>tags containing <span class="term">{{title}}</span>..</h1>
			<PostList :posts="tagPosts" />
			<TagCloud :posts="posts"/>
		</div>
		<div v-else><Spinner /></div>
  </div>
</template>

<script>
import { ref } from "vue";
import { computed } from 'vue';
import {useRoute} from "vue-router";
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";


// @ is an alias to /src

export default {
	props: ['id'],
	name: 'Home',
	components:{PostList, Spinner, TagCloud},
  setup(){
		const route = useRoute();
		const title = route.params.id;
		const { posts, error, load } = getPosts()
		const tagPosts = computed(() => {return posts.value.filter((tag) => {return tag.tags.includes(route.params.id);})})
		load()
		return{tagPosts, posts, error, title}
	}
}	
</script>
<style>
	.home{
		max-width:1200px;
		margin:0 auto;
		padding:10px;
	}
	.term{
		color:crimson;
	}
</style>