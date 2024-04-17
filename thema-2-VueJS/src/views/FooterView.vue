<script setup>
 import SocialItem from '@/components/SocialItem.vue';
</script>
<template>
  <section class="card">
    <div class="container">
      <div class="col">
        <div class="item-text">
        <h2> Wedding Invitation &copy; 2024 By <a href="https://github.com/parta99" target="_blank" rel="noopener noreferrer">DE Juna</a></h2>
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
  }
</style>
