<script setup>
import AboutView from './AboutView.vue';
import FooterView from './FooterView.vue';
import WeddingGift from './WeddingGift.vue';
import NavbarView from './NavbarView.vue'
import Carousel from './Carousel.vue';
import TheGalery from './TheGalery.vue';
import TheReservasi from './TheReservasi.vue'
import TheAuthComments from '@/components/TheAuthComments.vue';

</script>
<template>
  <Carousel></Carousel>
  <main>
    <AboutView></AboutView>
    <TheGalery></TheGalery>
    <TheReservasi></TheReservasi>
    <WeddingGift></WeddingGift>
    <TheAuthComments></TheAuthComments>
    <footerView></footerView>
  </main>
    <NavbarView></NavbarView>
</template>
