<template>

  <HeaderComponent />
  <div class="container">
    <h1 class="alert alert-success" role="alert">Connection!</h1>
    <p v-for="error in errors" :key="error">{{ error }}</p>

    <fieldset class="mb-3">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="username" aria-describedby="emailHelp" v-model="username">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="password">
      </div>
      <button class="btn btn-success" v-on:click="sendForm">Connection account</button>
    </fieldset>
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
    return {
      errors: [],
      username: null,
      password: null
    }
  },
  computed: {},
  mounted() { },
  methods: {
    sendForm() {
      this.errors = [];
      if (!this.username) {
        this.errors.push("Username must not be empty");
      }
      if (!this.role) {
        this.errors.push("Role must not be empty");
      }
      if (!this.password) {
        this.errors.push("Password must not be empty");
      } 
      console.log('IT WORKS!');
      // @TODO Executer une requete Asynchrone pour inscrire un nouvel utilisateur
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert {
  margin-top: 3rem;
}
</style>