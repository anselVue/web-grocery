<template>
    <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <ProductCard
        v-for="(product, index) in inventory.slice(0,6)"
        :key="product.id"
        class="card"
        :index="index"
        :product="product"
        :addToCart="addToCart"
      />
    </div>
  </main>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import food from '../food.json'

export default {
  name: 'Products',
  data: () => ({
      inventory: food
  }),
  components: {
    ProductCard
  }
}
</script>