<template>
    <div>
        <div v-if="!$store.state.isAuthenticated" id="home" class="m-1">
            <div>
                <h1>Bienvenido a la tienda</h1>
                <p>Para realizar compras necesitas iniciar sesión.</p>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <h3>Iniciar sesión</h3>
                    <Login />
                </div>
                <div class="col">
                    <h3>Nuevo usuario</h3>
                    <Register />
                </div>
            </div>
        </div>
        </div>
        <div v-else>
            <v-btn @click="logout()" > Exit </v-btn>
        </div>
        <div class="mt-3">
            <h1>Nuestros productos</h1>
            <Store />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Store from "../components/Store.vue";


export default {
  name: "Home",

  components: {
      Login,
      Register,
      Store
  },
  data() {
    return {
      
    };
  },
    methods: {
    // Borrar los datos de usuario guardados en local store
    logout() {
      axios.defaults.headers.common["Authorization"] = "";
      this.$store.commit("removeToken"); // ejecuta la función removeToken de store/index.js para eliminar el token
      this.$router.push("/"); // vuelve a la página principal
    },
  },
};
</script>
<style scoped>

</style>