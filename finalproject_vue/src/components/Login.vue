<template>
  <form @submit.prevent="submitForm">
    <input type="text" class="form-control" placeholder="Usuario" v-model="username" />
    <input type="password" class="form-control" placeholder="Contraseña" v-model="password" />
    <button class="btn btn-primary">Entrar</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
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
          .post("djoser/auth/jwt/create", formData)
          .then((response) => {
            const token = response.data.access; // El token obtenido en la respuesta
            this.$store.commit("setToken", token); // Ejecuta la función setToken de store/index.js para establecer el token obtenido de la respuesta
            axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
            localStorage.setItem("token", token); // Guarda el token en el local store
            window.location.href = "http://127.0.0.1:8080/"
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