<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'


</script>

<template>
  <section class="header">
    <main> 
    <div class="icon">
     <FontAwesomeIcon :icon="faXTwitter"/>
     <FontAwesomeIcon :icon="faInstagram"/>
     <FontAwesomeIcon :icon="faFacebook"/>
    </div>
    </main>
  <footer>
    <nav>
        <RouterLink to="/"> <FontAwesomeIcon :icon="faHome"/> Home</RouterLink>
        <RouterLink to="/about"><FontAwesomeIcon :icon="faUser"/> About</RouterLink>
    </nav>
  </footer>
  <RouterView />
  </section>
</template>
<style scoped>
  .icon{
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    padding: 2rem;
  }
  .icon :hover{
    background-color: aqua;
  }
  footer{
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
