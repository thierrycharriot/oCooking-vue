<template>

  <HeaderComponent />
  <div class="container">

    <div class="alert alert-success alert-dismissible" v-if="success">{{ success }}</div>
    <div class="alert alert-warning alert-dismissible" v-for="error in errors" :key="error">{{ error }}</div>
    <h1 class="alert alert-primary" role="alert">Connection!</h1>

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

import ServicesUsers from'@/services/ServicesUsers'

export default {
  name: 'ConnectionView',
  components: {
    HeaderComponent
  },
  props: {},
  data() {
    return {
      success: null,
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
      if (!this.password) {
        this.errors.push("Password must not be empty");
      } 
      //console.log('IT WORKS!'); // Debug
      if(this.errors.length === 0) {
        ServicesUsers.connect({
          username: this.username,
          password: this.password
        }, (data) => {
          console.log(data)
          if(data.type === "success") {
            this.success = data.message
          } else {
            this.errors.push(data.message)
          }
        })  
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert {
  margin-top: 1.2rem;
}
</style>