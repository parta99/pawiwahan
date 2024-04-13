<script >
import SocialItem from '@/components/SocialItem.vue';
export default {
  computed: {
    dynamicRoute() {
      const destination = this.$route.query.to || "Bpk/Ibu Saudara/i"; 
      const linkText = `Link ke ${destination}`; 
      return { path: '/', query: { to: destination } };
    },
    linkText() {
      return this.$route.query.to ? `Link ke ${this.$route.query.to}` : "Link ke Bpk/Ibu Saudara/i";
    },
    destination() {
      return this.$route.query.to || "Bpk/Ibu Saudara/i"; 
    }
  }
}
</script>

<template>
  <router-link :to="dynamicRoute">{{ linkText }}</router-link>
  <main class="coverImg welcomeModal">
    <div class="deskripsi-welcomeModal">
      <div class="subtitle">Pawiwahan</div>
      <div class="title">Gede & Kumala</div>
      <div class="text">Yth :  </div>
      <p>{{ destination }}</p>
    </div>
    <div class="item-welcomeModal">
      <SocialItem></SocialItem>
    </div>
  </main>
</template>
<style scoped>
  .icon{
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
  .icon :hover{
    background-color: aqua;
  }
  main.coverImg {
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    position: fixed;
    background-position: center;
    background-image: -webkit-image-set('https://i.ibb.co/SrJqtgY/RAY-0165-1920-sq.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
main.welcomeModal {
    display: block;
    text-align: center;
    align-content: center;
}
</style>
