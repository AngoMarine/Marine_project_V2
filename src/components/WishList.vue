<template>
  <div class="home-container">
    <h1>Conculter votre liste d'envie </h1>
    <h1>{{ShoppingCart}}</h1>
    <div class="card-cart-container">
      <div class="card-container">
        <div v-for="product in ShoppingCart" v-bind:key="product.id" class="card">
          <div class="img-container">
            <img v-bind:src='product.img' />
          </div>
          <div class="card-text">
            <h3>{{ product.description }}</h3>
            <span>{{ product.price }}€</span>
          </div>
        </div>
      </div>
    </div>
    <!-- no result message -->
        <div v-if="ShoppingCart.length == []" class="no-result">
          <h3>Vous n'avez encore rien ajouté à la liste d'envie ! </h3>
          <p>Découvrez nos oeuvres en exclusivité. </p>
          <br>
        </div>
  </div>
</template>

<script>

import Products from "../product"
import { serverBus } from '../main';


export default {
  name: "WishList",
  data:  () => {
    return {
      products: Products,
      ShoppingCart: []
    }
  },
  methods: {
    addToFavorites(product){
      this.$set(this.ShoppingCart, 
          this.ShoppingCart.length, 
          JSON.parse(JSON.stringify(product))
         );
      for(let item in this.ShoppingCart){
        console.log(this.ShoppingCart[item])
      }
    }
  },
  mounted () {
    serverBus.$on("addToFavorites", (product) => {
      this.addToFavorites(product);
    })
  }
}
</script>

<style scoped>

</style>