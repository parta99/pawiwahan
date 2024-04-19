<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faXTwitter, faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

// const countdownAudio = '@/assets/audio/Safe-And-Sound.mp3';
const audio = ref(null);
const isPlaying = ref(true);
const isClicked = ref(false);

function toggleAudio() {
  isPlaying.value = audio.value.paused ? (audio.value.play(), true) : (audio.value.pause(), false);
  isClicked.value = true;
  setTimeout(() => {
    isClicked.value = false;
  }, 300);
}
</script>
<template>
    <div class="button-audio">
        <button @click="toggleAudio" :class="{ 'rotating': isPlaying }">
            <font-awesome-icon :icon="isPlaying ? faPause : faPlay" />
        </button>
    </div>
    <audio ref="audio" autoplay loop hidden>
        <source src="@/assets/audio/The-Gift.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <div class="icon">
      <a href="https://instagram.com/djna911" target="_blank"><FontAwesomeIcon :icon="faInstagram" class="social-icon"/></a>
      <a href="https://facebook.com/dejuna.djk" target="_blank"><FontAwesomeIcon :icon="faFacebook" class="social-icon"/></a>
      <a href="https://twitter.com/djna911" target="_blank"><FontAwesomeIcon :icon="faXTwitter" class="social-icon"/></a>
      <a href="https://github.com/parta99" target="_blank"><FontAwesomeIcon :icon="faGithub" class="social-icon"/></a>
    </div>
</template>
<style scoped>
.social-icon{
  font-size: 1.25rem;
  color: #5639af;
}
.button-audio {
position: fixed;
bottom: 80px;
right: 20px;
z-index: 1000;
}
button{
  color: #5639af;
  background-color: #5639af30;
  width: 35px;
  height: 35px;
  border-radius: 100px;
  border: 2px solid #5639af;
}
.button-audio button {
  transition: transform 0.3s ease;
}
@media (max-width: 768px){
.button-audio {
padding-left: 2px;
bottom: 15px;
right: 10px;
}
}
@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
}
</style>
