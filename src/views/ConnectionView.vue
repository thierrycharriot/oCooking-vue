<template>

    <HeaderComponent />
    <div class="container">
      <h1 class="alert alert-success" role="alert">Connection!</h1>
    </div>
    <!--<div></div>-->

</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'

  export default {
    name: 'ConnectionView',
    components: {
      HeaderComponent
    },
    props: {},
    data() {
      return {}
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