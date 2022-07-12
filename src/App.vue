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
      <!-- </div> -->
      </nav>
    </header>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import food from './food.json'

export default {
  name: "App",

  data: () => ({
      showSidebar: false,
      inventory: food,
      cart: {}
  }),
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

#nav {
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