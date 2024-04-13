<script setup>

</script>
<template>
<section class="header">
    <div class="row">
        <div class="logo-nama">Logo img</div>
        <div class="nav">
            <ul>
                <li>Home</li>
                <li>Info</li>
                <li>Galery</li>
                <li>Lokasi Upacara</li>
                <li>Doa</li>
            </ul>
        </div>
    </div>
</section>
</template>
<style scoped>
.header {
    font-family: Arial, Helvetica, sans-serif;
    font-size: large;
    font-weight: bold;
    color: whitesmoke;
    background-color: #701a75;
    padding: 1rem;
}
section .row{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1.5rem;
}
.row .nav ul{
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
}
</style>
