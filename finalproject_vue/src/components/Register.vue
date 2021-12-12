<template>
  <form @submit.prevent="submitForm">
    <input type="text" class="form-control" placeholder="Usuario" v-model="username" />
    <input type="password" class="form-control" placeholder="Contraseña" v-model="password" />
    <input type="text" class="form-control" placeholder="Nombre" v-model="name" />
    <input type="text" class="form-control" placeholder="Apellido" v-model="lastname" />
    <input type="text" class="form-control" placeholder="Dirección" v-model="address" />
    <button class="btn btn-primary">Registrarse</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
    
        const formData = {
          username: this.username,
          password: this.password,
        };

        axios
          .post("djoser/users/", formData)
          .then((response) => {
              alert("Gracias por registrarte " + response.data.username)
              this.$router.push("/");
          })
      }
  },
};
</script>
<style scoped>
.error-message {
  color: red;
}

input {
  padding: 0.5em;
  border: 1px solid rgb(104, 104, 104, 0.5);
  width: 100%;
  margin-bottom: 0.5em;
}
button {
  color: white;
  background-color: rgb(90, 150, 219);
  padding: 0.5em;
  width: 100%;
  text-align: center;
  font-weight: bold;
}
</style>