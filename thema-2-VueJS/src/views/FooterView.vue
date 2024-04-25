<script setup>
import SocialItem from '@/components/SocialItem.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { ref , onMounted } from 'vue';

const currentYear  = ref('');

onMounted(() => {
  getCurrentYear();
});

function getCurrentYear(){
  const year = new Date().getFullYear();
  currentYear.value = year.toString();
}
</script>
<template>
  <section class="card">
    <div class="container">
      <div class="col">
        <div class="item-text">
        <h2> &copy; 2022 - {{ currentYear }} Created with <FontAwesomeIcon :icon="faHeartPulse" class="faHeartPulse"/> By <a href="https://github.com/parta99" target="_blank" rel="noopener noreferrer">DE Juna</a></h2>
        <SocialItem></SocialItem>
      </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .item-text{
    display: flex;
    align-items: center;
    flex-direction:column-reverse;
    margin-bottom: 5rem;
  }
  a{
    cursor: pointer;
    text-decoration: none;
    color: #5639af;
    font-weight: 700;
  }
  .faHeartPulse{
    color: #be185d;
  }
</style>
