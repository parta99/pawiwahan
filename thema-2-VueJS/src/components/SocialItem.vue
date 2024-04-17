<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faXTwitter, faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

</script>
<template>
    <div class="icon">
     <FontAwesomeIcon :icon="faXTwitter"/>
     <FontAwesomeIcon :icon="faInstagram"/>
     <FontAwesomeIcon :icon="faFacebook"/>
     <FontAwesomeIcon :icon="faGithub"/>
    </div>
</template>
