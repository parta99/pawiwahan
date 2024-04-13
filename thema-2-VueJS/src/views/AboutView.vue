<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import InfoAbout from './InfoAbout.vue';
import WeddingGift from './WeddingGift.vue';

</script>
<template>
  <section class="card-a" id="about">
      <div class="container">
        <div class="row">
          <div class="col mt-3">
            <h2 class="h2">OM Swastiastu</h2>
          </div>
        </div>
        <div class="row ">
          <div class="col">
            <p class="fst-italic">Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang Maha Esa, Kami bermaksud menyelengarakan upacara Pawiwahan putra-putri kami :</p>
          </div>
        </div>
      </div>
      <div class="row-container-mempelai">
        <div class="container-mempelai">
        <div class="mempelai-pria">
          <div class="mpl-img">
            <img src="https://firebasestorage.googleapis.com/v0/b/djna-pawiwahan.appspot.com/o/test-file%2Ffpawiwahan-02.jpg?alt=media&token=c694015a-22c0-4fbe-99c8-f13944141846" width="200" alt="Pawiwahan Juna & Kumala" class="rounded-circle img-thumbnail" />
          </div>
          <div class="mpl-description">
            <h1 class="mempelai-nama nama-pria">I Gede Joshua D. Shinn,S.Kom</h1>
            <p class="nama-pria">Putra Pertama dari pasangan</p>
            <p class="nama-pria">Bpk Dwain J. Brown & Ibu Stephanie P. Dubois</p>
            <p class="nama-pria">BR. Padang Tunggal</p>
          </div>
        </div>
        <div class="icon-mempelai">
          <FontAwesomeIcon :icon="faHeart"/>
        </div>
        <div class="mempelai-wanita">
          <div class="mpw-img">
            <img src="https://firebasestorage.googleapis.com/v0/b/djna-pawiwahan.appspot.com/o/test-file%2Ffpawiwahan-01.jpg?alt=media&token=7ff1728e-6446-4ef7-b6f3-6286463ffd6e" width="200" alt="Pawiwahan Juna & Kumala" class="rounded-circle img-thumbnail" />
          </div>
          <div class="mpw-description">
            <h1 class="mempelai-nama nama-wanita">Ns.Sophie L. Grimmer,S.Kep.</h1>
            <p class="nama-wanita">Putri Pertama dari pasangan</p>
            <p class="nama-wanita">Bpk David D.Freeman,S.H. & Ibu Tammy R.Henderson,S.Pd.</p>
            <p class="nama-wanita">BR. Palak Sukawati</p>
          </div>
        </div>
      </div>
      </div>
    </section>
    <InfoAbout></InfoAbout>
    <WeddingGift></WeddingGift>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Beau+Rivage&display=swap');
section {
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 4rem 1rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  }
  section, h2, p{
  text-align: center; 
}
section .container{
  display: grid;
  grid-template-rows: auto;
}
section .container-mempelai{
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
img.rounded-circle.img-thumbnail {
    border-radius: 100px;
    backdrop-filter: blur(1px);
}
.mempelai-pria{
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
}
.mempelai-wanita{
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 2rem;
  justify-content: center;
}
.container-mempelai p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: medium;
  font-weight: 100;
}
.icon-mempelai{
  display: flex;
  justify-content: center;
  align-items: center;
}
svg.svg-inline--fa.fa-heart {
    color: #be185d;
    font-size: 4rem;
}
.mempelai-nama{
  font-family: "Beau Rivage", cursive;
  font-weight: 500;
  font-size: 25px;
}
.mpl-description .nama-pria{
  text-align: start;
}
.mpw-description .nama-wanita{
  text-align: end;
}

@media (max-width: 768px) {
  section .container-mempelai{
  display: flex;
  flex-direction: column;
}
.mempelai-pria, .mempelai-wanita{
  display: flex;
  flex-direction: column;
}
.mpl-description{
  order: -1;
}
.mempelai-nama{
  font-family: "Beau Rivage", cursive;
  font-weight: 500;
  font-size: 20px;
}
.mpl-description .nama-pria, .mpw-description .nama-wanita{
  text-align: center;
}
}
</style>
