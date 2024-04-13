<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
</script>
<template>
  <div class="footer">
    <nav>
        <RouterLink to="/about"><FontAwesomeIcon :icon="faUser"/> About</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>
<style scoped>
  .footer{
    position: fixed;
    direction: ltr;
    display: flex;
    align-items: center;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 2147483647;
    height: 64px;
    background: #fff;
    box-shadow: 0 0 5px 0 #eee;
  }
</style>