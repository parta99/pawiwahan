<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import TheCountdown from '@/components/TheCountdown.vue';

const redirectToLocation = (location) => {
  window.open(location, '_blank');
};
</script>
<template>
    <section class="card" id="info">
        <div class="container">
            <div class="col">
                <div class="h2">Waktu dan Tempat</div>
                <div class="deskripsi-tanggal">
                    <table>
                    <tr>
                        <th>Hari </th>
                        <td>Kamis, 09 September 2021</td>
                    </tr>
                    <tr>
                        <th>Jam </th>
                        <td>09.00 - 19.00 WITA</td>
                    </tr>
                    <tr>
                        <th>Tempat </th>
                        <td>Banjar Padang Tunggal Kauh, Desa Duda Kec.Selat Kab.Karangasem</td>
                    </tr>
                </table>
                </div>
            </div>
            <div class="col">
                <div class="google-maps btn">
                    <div class="btn-icon">
                        <FontAwesomeIcon :icon="faLocationDot"/>
                    </div>
                    <div class="btn-title">
                        <button @click="redirectToLocation('https://maps.app.goo.gl/dwTjDakCMPMKgBf58')" >Kunjungi Lokasi</button>
                    </div>
                    
                </div>
            </div>
            <div class="col">
                <div class="deskripsi">
                    <p>Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu</p>
                </div>
            </div>
            <div class="col">
             <figure>
                <figcaption>
                    <p>
                        "Grbhnāmi te saubhagatvāya hastam, Mayā patyā jaradastir yathāsah, Bhago aryamā savitā puramdhir, Mahyam tvādurgārhapatyāya devāh."
                    </p>
                    <div class="site-title">
                        <p>Rgveda : X.85.36</p>
                    </div>
                    <p>Dalam sebuah pernikahan kalian disatukan demi sebuah kebahagiaan dengan janji hati untuk saling membahagiakan. Bersamaku engkau akan hidup selamanya karena Tuhan pasti akan memberikan karunia sebagai pelindung dan saksi dalam pernikahan ini. Untuk itulah kalian dipersatukan dalam satu keluarga.</p>
                    <div class="">
                        <p>
                        Atas Kehadiran serta Do'a Restunya, kami sekeluarga mengucapkan terima kasih. 
                    </p>
                    </div>
                    <h2 class="h2">Om Shanti, Shanti, Shanti Om</h2>
                </figcaption>
             </figure>
            </div>
            <div class="col">
                <TheCountdown></TheCountdown>
            </div>
        </div>
    </section>
</template>
<style scoped>
figcaption > p{
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: #92400e 1px 0 10px;
}
.site-title > p::before{
  content: "\2014\00A0";
}
.site-title > p {
 font-style: italic;
 color : #6c757d;
}
.col{
    gap: 0;
}
</style>