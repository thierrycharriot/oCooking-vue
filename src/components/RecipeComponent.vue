<template>

	<div class="container">
		
		<div class="card">
			<img v-bind:src="image" class="card-img-top" alt="...">
			<div class="card-body">
				<h5 class="card-title" v-html="title"></h5>
				<p class="card-text" v-html="content"></p>
			</div>
		</div>

	</div>
	<!--<div></div>-->
	
</template>

<script>

export default {
	name: 'RecipeComponent.vue',
	components: {},
	props: {
		title: String,
		content: String,
		image: String
	},
	data() {
		return {}
	},
	computed: {},
	mounted() { },
	methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>