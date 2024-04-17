<template>
    <section class="card" id="gallery">
        <div class="container">
            <div class="col ">
                <h2 class="h2">Memori Kisah Kami</h2>
                <h3>Galery Foto</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quisquam.</p>
            </div>
            <div class="col">
                <div class="grid justify-items-center gap-4">
                    <div class="main-image-container">
                        <img
                            class="h-auto max-w-full rounded-lg"
                            :src="mainImage"
                            alt=""
                            :style="{ animation: slideAnimation }">
                    </div>                
                    <div class="grid grid-cols-5 gap-4">
                    <div v-for="(image, index) in images" :key="index">
                        <img
                        class="h-auto max-w-full rounded-lg cursor-pointer"
                        :src="image"
                        alt=""
                        @click="showImage(index)">
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
// ganti gambar sesuai kebutuhan gambar masing2
const mainImage = ref('https://firebasestorage.googleapis.com/v0/b/djna-pawiwahan.appspot.com/o/test-file%2Fwedding8.jpg?alt=media&token=a809ea73-1425-4f1b-a1fd-9f53b46631f3');
const images = [
  'https://firebasestorage.googleapis.com/v0/b/djna-pawiwahan.appspot.com/o/test-file%2Fwedding11.jpg?alt=media&token=08a9c86f-d3c7-4272-a842-c33b3e1dae18',
  'https://firebasestorage.googleapis.com/v0/b/djna-pawiwahan.appspot.com/o/test-file%2Fwedding9.jpg?alt=media&token=5b0f55f7-1871-4343-99bf-691dc4a59547',
  'https://firebasestorage.googleapis.com/v0/b/djna-pawiwahan.appspot.com/o/test-file%2Fwedding10.jpg?alt=media&token=c977f469-a2f5-41f4-9cf7-e1836fb5266e',
  'https://firebasestorage.googleapis.com/v0/b/djna-pawiwahan.appspot.com/o/test-file%2Fwedding6.jpg?alt=media&token=c73c3ca5-ec99-43ac-8f8d-b17a8de131cd',
  'https://firebasestorage.googleapis.com/v0/b/djna-pawiwahan.appspot.com/o/test-file%2Fwedding15.jpg?alt=media&token=60ac1382-3310-413e-b99d-b6519bb8be19'
];

const showImage = (index) => {
  mainImage.value = images[index];
};

const slideAnimation = ref('');
let currentIndex = 0;
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  mainImage.value = images[currentIndex];
}, 5000);

watch(mainImage, () => {
  slideAnimation.value = 'slide-in 0.5s ease forwards';
});
</script>
<style scoped>
.main-image-container {
    position: relative;
}

@keyframes slide-in {
    from {
        opacity: 0;
        transform: translateX(100%);
    }
    to {
        opacity: 1;
        transform: translateX(0%);
    }
}
.main-image {
    width: 100%;
    max-width: 100%;
    height: auto;
}
</style>
