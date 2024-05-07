<template>
    <section id="rsvp" class="pt-8 pb-16 bg-slate-100">
      <div class="container">
        <div class="col">
          <h2 class="h2">RSVP</h2>
          <h3>Konfirmasi Kehadiran</h3>
        </div>
        <div class="max-w-sm mx-auto alert hidden " role="alert">
          <div class="py-3 flex justify-center bg-green-200 rounded-xl text-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
            class="w-6 h-6 text-fuchsia-600">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
            </svg>
            <p> <span class="font-bold pl-2">Terimakasih,</span> your message has been sent</p>
          </div>
        </div>
        <form @submit.prevent="submitForm" ref="form" name="submitTs" action="" method="POST" netlify>
          <div class="w-full lg:w-2/3 lg:mx-auto">
            <div class="w-full px-4 mb-8">
              <label for="name" class="font-bold text-slate-600">Nama</label>
              <input type="text" v-model="formData.nama" name="nama" id="name" placeholder="John Doe" autofocus minlength="2" autocomplete="off" required
              class="w-full bg-slate-200 text-slate-950 p-3 rounded-md focus:outline-none focus:ring-lime-600 focus:ring-1">
            </div>
            <div class="w-full px-4 mb-8">
              <label for="jumlah" class="font-bold text-slate-600">Jumlah Tamu</label>
              <input type="number" v-model="formData.jumlah" name="jumlah" id="jumlah" placeholder="1" required autocomplete="off"
              class="w-full bg-slate-200 text-slate-950 p-3 rounded-md focus:outline-none focus:ring-lime-600 focus:ring-1">
            </div>
            <div class="w-full px-4 mb-8">
              <label for="status" class="font-bold text-slate-600">Status</label>
              <select v-model="formData.status" name="status" id="status" placeholder="Konfirmasi" required 
              class="w-full h-18 bg-slate-200 text-slate-950 p-3 rounded-md focus:outline-none focus:ring-lime-600 focus:ring-1">
                <option value="Hadir">Hadir</option>
                <option value="Berhalangan">Berhalangan</option>
                <option value="Menunggu">Ragu-ragu</option>
              </select>
            </div>
            <button type="submit" id="submit" aria-label="button kirim" :disabled="loading"
            class="btnKirim text-base font-semibold rounded-lg outline outline-gray-800 outline-2 outline-offset-2 bg-green-600 text-gray-100 hover:text-white hover:bg-red-700 shadow-lg py-1 px-4"
            v-bind:class="{ 'hidden': loading }">
            Send
            </button>
            <div class="w-full px-4 btnLoading" v-bind:class="{ 'hidden': !loading }">
                <button type="button" class="rounded-full outline outline-gray-800 outline-2 outline-offset-2 bg-amber-500 text-gray-100 py-1 px-4 flex" :disabled="loading">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white flex flex-wrap"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                </svg>
                <span class="text-white flex flex-wrap">Processing...</span>
                </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          nama: '',
          jumlah: '',
          status: 'Hadir'
        },
        loading: false
      };
    },
    methods: {
      submitForm() {
        this.loading = true;
        const scriptURL = 'url script google sheet';
        const form = this.$refs.form;
  
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => { 
            // console.log('Success! Data Berhasil dikirim', response);
            this.loading = false;
            this.showAlert();
            this.clearForm();
            this.toggleButtons();
          })
          .catch(error => {
            console.error('Error!', error.message);
            this.loading = false;
            this.toggleButtons();
          });
      },
      showAlert() {
        const alert = document.querySelector('.alert');
        alert.classList.remove('hidden');
        setTimeout(() => {
          alert.classList.add('hidden');
        }, 5000);
      },
      clearForm() {
      this.formData.nama = '';
      this.formData.jumlah = '';
      this.formData.status = 'Hadir';
      },
      toggleButtons() {
      const btnLoading = document.querySelector('.btnLoading');
      const btnKirim = document.querySelector('.btnKirim');
      btnLoading.classList.toggle('hidden');
      btnKirim.classList.toggle('hidden');
     }
    }
  };
  </script>
  
  <style scoped>
  /* Gaya Anda di sini */
  </style>
  