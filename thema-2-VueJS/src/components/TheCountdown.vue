<template>
    <div>
      <p v-if="countdownFinished">Terima kasih banyak buat yang sudah hadir!</p>
      <p v-else class="time-part">
      <span class="countdown-part">{{ timeRemaining.days }}</span> <p>hari</p>
      <span class="countdown-part">{{ timeRemaining.hours }}</span> <p>jam</p>
      <span class="countdown-part">{{ timeRemaining.minutes }}</span> <p>menit</p>
      <span class="countdown-part">{{ timeRemaining.seconds }}</span> <p>detik</p>
      </p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  
  const targetDate = new Date('2024-12-31T08:59:59+08:00');
  const currentDate = ref(new Date());
  
  const countdownFinished = computed(() => currentDate.value >= targetDate);
  
  const timeRemaining = computed(() => {
  const totalMilliseconds = Math.floor((targetDate.getTime() - currentDate.value.getTime()));
  const totalSeconds = Math.floor(totalMilliseconds / 1000);

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  
    return { days, hours, minutes, seconds };
  });
  
  let countdownInterval;
  
  onMounted(() => {
    countdownInterval = setInterval(() => {
      currentDate.value = new Date();
    }, 1000);
  });
  </script>
<style scoped>
.countdown-part {
font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  border-radius: 6px;
  padding: 0 6px 0 6px;
  box-sizing: border-box;
  background-color: #e8ebee;
  color: black;
  box-shadow: inset 2px 2px 8px #caced1, inset -2px -2px 8px white;
}
p.time-part {
    display: flex;
    column-gap: 5px;
}
</style>
  