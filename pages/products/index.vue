<template>
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="(product, index) in data.products" :key="index" class="card card-normal bg-base-300 w-100% shadow-xl mb-4">
            <nuxt-link :to="`/products/${product.id}`">
            <figure>
                <img :src="product.thumbnail">
            </figure>
            </nuxt-link>
            <div class="card-body">
                <h2 class="card-title">{{product.title}}</h2>
                <p>{{product.description}}</p>
                <!-- <div class="card-actions justify-end">
                <button class="btn btn-primary text-white">Buy Now</button>
                </div> -->
            </div>
            </div>
            <!-- <span class="loading loading-ring loading-lg"></span> -->
            <!-- <div class="join mb-3 container">
            <button class="join-item btn">1</button>
            <button class="join-item btn btn-active">2</button>
            <button class="join-item btn">3</button>
            <button class="join-item btn">4</button>
            </div> -->
    </div>
</template>

<script setup>
const { data: data } = await useFetch('https://dummyjson.com/products?limit=12')
// console.log('data', data)

</script>

<style scoped>

</style>