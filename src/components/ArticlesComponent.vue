<template>

	<div class="container">
		
	<div class="card" v-for="recipe in recipes" v-bind:key="recipe.title" v-bind:title="recipe.title.rendered"
		v-bind:content="recipe.content.rendered">
		<!--<img src="" class="card-img-top" alt="...">-->
		<div class="card-body">
			<h5 class="card-title" v-html="recipe.title"></h5>
			<p class="card-text" v-html="recipe.content"></p>
			<a href="javascript:void(0)" class="btn btn-success">Read more</a>
		</div>
	</div>

	</div>
	<!--<div></div>-->

</template>

<script>
// @ is an alias to /src

export default {
	name: 'ArticlesComponent',
	components: {},
	props: {},
	data() {
		return {
			recipes: [
				{
					title: 'Wok de gambas, riz, curry et poireau',
					content: 'Peler et couper finement les oignons et l’ail.'
				},
				{
					title: 'Naans au poulet citronné et yaourt aux herbes',
					content: 'Dans un bol, mélanger une grosse pincée de sel, le sucre, la farine, 2 c-à-s d’huile de tournesol et la levure. Attention, la levure ne doit pas toucher le sel directement.'
				},
				{
					title: 'Barres de céréales maison aux fruits secs et beurre de cacahuètes',
					content: 'Préchauffer le four à 180°C. '
				}
			]
		}
	},
	computed: {},
	mounted() {},
	methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.alert {
		margin-top: 3rem;
	}
</style>
<style>
	.card {
		margin: 3rem auto;
	}
</style>