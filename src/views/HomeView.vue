<template>
  <!--
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  -->
    <HeaderComponent />
    <ArticlesComponent />

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import ArticlesComponent from '@/components/ArticlesComponent.vue'

export default {
  name: 'HomeView',
  components: {
    //HelloWorld
    HeaderComponent,
    ArticlesComponent
  },
    data() {
      return {}
    },
    computed: {},
    mounted() {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

