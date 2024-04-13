<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGift } from '@fortawesome/free-solid-svg-icons';
</script>
<template>
    <section class="card">
        <div class="container">
            <div class="col">
                <h2 class="h2">Wedding Gift</h2>
                <p>
              Bagi keluarga dan sahabat yang ingin memberikan hadiah, silakan klik tombol dibawah. Terima kasih :)
            </p>
            </div>
            <div class="col">
                <div class="wedding-gift btn">
                    <div class="btn-icon"> <FontAwesomeIcon :icon="faGift" /></div>
                    <div class="btn-title">Gift</div>
                </div>
            </div>
        </div>
    </section>
</template>