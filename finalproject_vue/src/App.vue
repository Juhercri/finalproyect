<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "App",

  data: () => ({
    publicPath: process.env.BASE_URL,
  }),
};
</script>
