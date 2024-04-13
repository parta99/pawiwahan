<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
</script>
<template>
    <section class="card">
        <div class="container">
            <div class="col">
                <div class="deskripsi">
                    <p>Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu pada :</p>
                </div>
                <div class="icon">
                    <FontAwesomeIcon :icon="faCalendarDays"/>
                </div>
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
                        <button> <a href="http://"></a>  Buka Alamat</button>
                    </div>
                    
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
        </div>
    </section>
</template>
<style scoped>
    svg.svg-inline--fa.fa-calendar-days {
    font-size: 4rem;
    color: #10b981;
}
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
</style>