<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faXTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

</script>
<template>
    <div class="icon">
     <FontAwesomeIcon :icon="faXTwitter"/>
     <FontAwesomeIcon :icon="faInstagram"/>
     <FontAwesomeIcon :icon="faFacebook"/>
    </div>
</template>