<template>

	<div class="container">
		
		<div class="card">
			<img v-bind:src="image" class="card-img-top" alt="...">
			<div class="card-body">
				<h5 class="card-title" v-html="title"></h5>
				<p class="card-text" v-html="content"></p>
				<a href="javascript:void(0)" class="btn btn-success">Read more</a>
			</div>
		</div>

	</div>
	<!--<div></div>-->

</template>

<script>

export default {
	name: 'ArticleComponent.vue',
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
	mounted() {},
	methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>