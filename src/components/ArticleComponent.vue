<template>

	<div class="container">
		
		<div class="card">
			<div class="card-body">
				<h5 class="card-title" v-html="title"></h5>
				<p class="card-text" v-html="content"></p>
				<router-link class="btn btn-success" v-bind:to="{name: 'recipe', params: {id: id}}">Read more</router-link>
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
		id: Number
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