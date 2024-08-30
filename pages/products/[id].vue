<template>
    <div class="container mx-auto px-4">
        <div class="card card-side bg-base-300 shadow-xl">
            <figure class="w-50">
                <img :src="product.thumbnail">
            </figure>
            <div class="card-body">
                <h2 class="card-title text-sm">{{product.title}}</h2>
                <p class="text-sm">ราคา : {{product.price}} THB.</p>
                <p class="text-sm">หมวดหมู่ : {{product.category}}</p>
                <p class="text-sm">ยี่ห้อ : {{product.brand}}</p>
                <!-- <div class="card-actions justify-end">
                <button class="btn btn-primary">Watch</button>
                </div> -->
            </div>
            </div>
    </div>
</template>

<script setup>
const {id} = useRoute().params
const { data: product } = await useFetch('https://dummyjson.com/products/'+id)
console.log('data', product)

</script>

<style scoped>

</style>