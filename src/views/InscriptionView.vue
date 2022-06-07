<template>

  <HeaderComponent />

  <div class="container">

    <h1 class="alert alert-success" role="alert">Inscription!</h1>
    <p v-for="error in errors" :key="error">{{ error }}</p>

    <fieldset class="mb-3">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email">
      </div>
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="username" aria-describedby="emailHelp" v-model="username">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="password">
      </div>
      <div class="mb-3">
        <label for="password_check" class="form-label">Password check</label>
        <input type="password" class="form-control" id="password_check" v-model="password_check">
      </div>
      <div class="mb-3">
        <label for="form-select" class="form-label">Choose role</label>
        <select class="form-select" aria-label="Default select example" v-model="role">
          <option value="cook">Cook</option>
          <option value="subscriber">Subscriber</option>
        </select>
      </div>
      <button class="btn btn-success" v-on:click="sendForm">Create account</button>
    </fieldset>

  </div>
  <!--<div></div>-->

</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'InscriptionView',
  components: {
    HeaderComponent
  },
  props: {},
  data() {
    return {
      errors: [],
      email: null,
      username: null,
      password: null,
      password_check: null,
      role: null
    }
  },
  computed: {},
  mounted() { },
  methods: {
    sendForm() {
      this.errors = [];
      if (!this.email) {
        this.errors.push("Email must not be empty");
      }
      if (!this.username) {
        this.errors.push("Username must not be empty");
      }
      if (!this.role) {
        this.errors.push("Role must not be empty");
      }
      if (!this.password || !this.password_check) {
        this.errors.push("Password and Password_check must be filled");
      } else {
        if (this.password !== this.password_check) {
          this.errors.push("Password and Password_check must be the same");
        }
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