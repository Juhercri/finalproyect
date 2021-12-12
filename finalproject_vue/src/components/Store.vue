<template>
  <div id="store">
    <div class="card-group">
     <div class="card" v-for="(product, index) in product_list" :key="index">
        <div class="card-body">
            <h5 class="card-title">{{ `${product.name}` }}</h5>
            <p class="card-text"><small class="text-muted">$ {{ `${product.price}` }}</small></p>
            <a v-if="$store.state.isAuthenticated" href="#" v-on:click="purchase(product.id)" class="card-link">Comprar</a>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs"; // x-www-form-urlencoded

export default {
  name: "Store",

  components: {
 
  },
  data() {
    return {
      product_list: []
    };
  },
  created() {
      this.getProducts()
  },
  methods: {
    getProducts() {
        axios
          .get("store/product/")
          .then((response) => {
            this.product_list = response.data['product']
            console.log(this.product_list)
          })
    },
    purchase(product_id) {
        const product = {
          'product_id': product_id
        };

        axios
          .post("store/order/", qs.stringify(product))
          .then((response) => {
            if (response.data.estado === 'ok') {
                alert(response.data.message)
            }
          })
      }
  },
};
</script>
<style scoped>

</style>