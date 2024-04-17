<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faCircleInfo, faImage, faAddressBook, faGift } from '@fortawesome/free-solid-svg-icons';

const activeIndex = ref(0);
const menuItems = [
  { text: 'About', link: '#about', icon: faUser, bgColor: '#5639af30', Color: '#5639af'},
  { text: 'Info', link: '#info', icon: faCircleInfo, bgColor: '#ac479330', Color: '#ac4793'},
  { text: 'Gallery', link: '#gallery', icon: faImage, bgColor: '#e2a93a30',Color: '#e2a93a'},
  { text: 'RSVP', link: '#rsvp', icon: faAddressBook, bgColor: '#4493a730',Color: '#4493a7'},
  { text: 'Gifts', link: '#gifts', icon: faGift, bgColor: '#ff00ff30',Color: '#ff00ff'}
];

const setActive = (index) => {
  activeIndex.value = index;
};
</script>
<template>
  <footer class="navbar">
    <nav>
        <ul class="menu">
            <li v-for="(item, index) in menuItems" :key="index" :class="{ active: activeIndex === index }">
                <a @click="setActive(index)" :href="item.link" :style="{ backgroundColor: activeIndex === index ? item.bgColor : 'inherit' }">
                <span class="icon">
                <FontAwesomeIcon :icon="item.icon" :style="{ color: activeIndex === index ? item.Color : 'inherit' }"></FontAwesomeIcon>
                </span>
                <span class="text" :style="{ color: activeIndex === index ? item.Color : 'inherit' }">{{ item.text }}</span>
                </a>
            </li>
        </ul>
    </nav>  
</footer>
</template>
<style scoped>
svg{
padding-right: 0.75rem;
align-content: center;
}
.navbar {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1080px;
    backdrop-filter: blur(1.5px);
    z-index: 999;
}
nav{
    border-top: 1px solid #ccc;
    padding: 10px;
}
.icon{
    padding: 0;
}
.menu {
    display: flex;
    list-style:none;
    justify-content: center;
    padding: 0;
}
.menu li {
  margin: 0 10px 0 10px;
}
.menu li a {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    color: #0000008A;
    border-radius: 100px; 
    text-decoration: none;
    transition: all 0.3s ease;
}
.menu li.active a {
  font-weight: 700;
  border-radius: 100px;
  border: 1px solid gray;
}
.menu li a:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
@media (max-width: 768px) {
svg{
    padding-right: 0;
}
.menu li{
    margin:0;
}
.menu li a {
    display: flex;
    column-gap: 5px;
    align-items: center;
    text-indent: -9999px; 
    border-radius: 100px; 
    margin: 5px; 
}
.menu li.active a {
    text-indent: 0px;
}
.menu li.active a .text {
  display: inline-block;
  transition: bottom .4s ease .1s; 
}
}
</style>