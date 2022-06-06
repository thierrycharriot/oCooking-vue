<template>

	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
		<div class="container-fluid">
			<a class="navbar-brand" href="javascript:void(0)">oCooking-vue</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
				aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav ms-auto">
					<!--
					<li class="nav-item" v-for="link in links" v-bind:key="link.name">
						<a class="nav-link active" href="javascript:void(0)">{{ link.name }}</a>
					</li>
					-->
					<router-link class="nav-link active" v-for="link in links" v-bind:key="link.name" :to="link.route">{{ link.name }}</router-link>					
				</ul>
			</div>
		</div>
	</nav>
	<!--<div></div>-->
</template>

<script>

export default {
	name: 'HeaderComponent',
	components: {},
	props: {},
	data() {
		return {
			links:
				[
					/*
					'Liste des recettes',
					'Inscription',
					'Connection'
					*/
					{
						'name': 'Liste des recettes',
						'route': '/'
					},
					{
						'name': 'Inscription',
						'route': '/inscription'
					},
					{
						'name': 'Connection',
						'route': '/connection'
					}
				]
		}
	},
	computed: {},
	mounted() { },
	methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>