<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFolderOpen, faHeart } from '@fortawesome/free-solid-svg-icons';
</script>
<script>
export default {
  computed: {
    dynamicRoute() {
      const destination = this.$route.query.to || "Bpk/Ibu Saudara/i"; 
      // const linkText = `Undangan ke ${destination}`; 
      return { path: '/', query: { to: destination } };
    },
    linkText() {
      return this.$route.query.to ? `Yth. ${this.$route.query.to}` : "Yth. Bpk/Ibu Saudara/i";
    },
    destination() {
      return this.$route.query.to || "Bpk/Ibu Saudara/i"; 
    }
  }
}
</script>
<template>
  <router-link :to="dynamicRoute">{{ linkText }}</router-link>
  <main>
    <div class="coverImg welcomeModal">
    </div>
    <div class="box-welcomeModal">
      <div class="deskripsi-welcomeModal">
      <div class="subtitle">Pawiwahan</div>
      <div class="title">I Gede Joshua <FontAwesomeIcon :icon="faHeart"/> Ayu Camilla</div>
      <div class="subtitle-tgl">Selasa, 31 Desember 2024</div>
      <div class="text">Yth :  </div>
      <p>{{ destination }}</p>
        <div class="button-welcomeModal">
          <RouterLink to="/landingpage"><FontAwesomeIcon :icon="faFolderOpen"/> Buka Undangan</RouterLink>
        </div>
      </div>
    </div>
  </main>
  <RouterView />
</template>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');

  .subtitle{
  font-family: "Sacramento", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: xxx-large;
  }
  main .coverImg {
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    position: fixed;
    background-position: center;
    background-image: -webkit-image-set('https://i.ibb.co/SrJqtgY/RAY-0165-1920-sq.jpg');
    background-color: rgb(241 128 128 / 80%);
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(3px);
}
main .welcomeModal {
    display: block;
    text-align: center;
    align-content: center;
}.text{
  margin-top: 0.75rem;
}
.box-welcomeModal p{
  margin-bottom: 0.75rem;
}
.deskripsi-welcomeModal{
  position: fixed;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    text-align: center;
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.8); 
    border-radius: 25px 0 25px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    padding: 10px 20px 10px 20px;
    backdrop-filter: blur(10px);
}
.button-welcomeModal {
    background-color: lightpink;
    border-radius: 100px;
    cursor: pointer;
    height: 2.5rem;
    align-content: center;
    border: 2px solid gray;
}
.button-welcomeModal:hover{
  border: 2px solid #030712;
  background-color: #be185d;
}
a{
  text-decoration: none;
  color: #030712;
  background-color: transparent;
}
a:hover{
  color: white;
}
svg.svg-inline--fa.fa-folder-open {
    padding-right: 0.5rem;
}
svg.svg-inline--fa.fa-heart {
    color: #be185d;
}
</style>
