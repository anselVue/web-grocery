<template>
  <v-app>
    <v-card color="basil">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold text-h2 basil--text">
          Online Grocery Store
        </h1>
      </v-card-title>
      <!-- <v-card-actions>
      </v-card-actions> -->
    </v-card>

    <header class="top-bar spread">
      <nav id="nav" class="top-bar-nav">
      <!-- <div id="nav" class="top-bar-nav"> -->
        <router-link to="/" class="top-bar-link">
          <i class="icofont-spoon-and-fork"></i>
          <span>Home</span>
        </router-link>
        
        <router-link to="/products" class="top-bar-link">
          <span>Products</span>
        </router-link>
        
        <router-link to="/pastOrders" class="top-bar-link">
          <span>Past Orders</span>
        </router-link>
      </nav>

        <div @click="toggleSidebar" id="cart" class="top-bar-cart-link">
          <i class="icofont-cart-alt icofont-1x"></i>
          <span>Cart ({{ totalQuantity }})</span>
        </div>
    </header>

    <v-main>
      <router-view :inventory="inventory" :addToCart="addToCart"/>
    </v-main>

    <Sidebar
    v-if="showSidebar"
    :toggle="toggleSidebar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
    :addToCart="addToCart"
    />

  </v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import food from '@/food.json'

export default {
  name: "App",
  components:{
    Sidebar
  },
  data: () => ({
      showSidebar: false,
      inventory: food,
      cart: {}
  }),
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  },
  methods: {
    addToCart (name, quantity) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] += quantity
    },
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    },
    removeItem (name) {
      delete this.cart[name]
    }
  }
};
</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

#nav, #cart {
  padding: 10px;
}

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>