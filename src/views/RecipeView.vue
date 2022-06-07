<template>

    <HeaderComponent />
    <RecipeComponent v-if="recipe" v-bind:title="recipe.title.rendered" v-bind:content="recipe.content.rendered" v-bind:image="recipe._embedded['wp:featuredmedia'][0].source_url" />
    <!--<div></div>-->

</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import RecipeComponent from '@/components/RecipeComponent.vue'

import ServicesRecipes from '@/services/ServicesRecipes.js'

  export default {
    name: 'RecipeView',
    components: {
        HeaderComponent,
        RecipeComponent
    },
    props: {},
    data() {
      return {
        recipe: null
      }
    },
    computed: {},
    mounted() {
      //console.log(this.$route.params.id)
      ServicesRecipes.find(this.$route.params.id).then(
        (response) => {
          console.log(response.data)
          this.recipe = response.data
        }
      )
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>