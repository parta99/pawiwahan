<template>
  <section class="card">
    <div class="container">
      <h2>Do'a dan Ucapan </h2>
       <!-- Form untuk menambahkan komentar -->
       <div class="py-4">
        <form @submit.prevent="addComment" class="max-w-xl mx-auto">
          <label for="doa" class="block mb-2 text-sm font-medium text-gray-900 ">Ucapan Anda</label>
          <div class="relative">
            <textarea id="doa" v-model="newCommentText" placeholder="Tulis Ucapan Anda di sini" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
            <div class="absolute bottom-0 right-0 py-1 px-1">
              <button type="submit" class="py-1 px-2 rounded-l-lg outline outline-gray-800 outline-2 outline-offset-2 bg-green-600 text-gray-100">Kirim Ucapan</button>
            </div>
          </div>
        </form>
        <div class="py-2 px-1">
          <button class="py-1 px-2 rounded-lg outline outline-gray-800 outline-2 outline-offset-2 bg-green-600 text-gray-100" v-if="user" @click="logout">Logout</button>
          <button class="py-1 px-2 rounded-lg outline outline-gray-800 outline-2 outline-offset-2 bg-green-600 text-gray-100" v-else @click="handleGoogleLogin">Login dengan Google</button>
        </div>
      </div>
        <ul v-if="comments.length">
          <li v-for="comment in comments" :key="comment.id">
            <div class="comment py-1 my-1">
                <img :src="comment.photoURL" alt="Avatar" class="comment-avatar">
              <div class="comment-info">
                <div class="comment-name">{{ comment.displayName }}</div>
                <div class="comment-text">{{ comment.text }}</div>
                <div class="comment-timestamp">{{ formatTimestamp(comment.time) }}</div>
                <div class="button_comment flex gap-4 py-1 my-1">
                  <button @click="toggleReplyForm(comment)">Reply</button>
                  <button @click="deleteComment(comment.id)">Delete</button>
                </div>
              </div>     
            </div>
          
            <!-- Tampilkan formulir balasan jika komentar ini sedang di-reply -->
            <div class="pb-4" v-if="comment.replying">
              <div class="comment.replying relative">
                  <textarea v-model="comment.replyText" placeholder="Balas komentar ini" class="text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                <div class="absolute bottom-0 right-0 py-1 px-1">
                  <button class="py-0.5 px-1 text-sm rounded-l-lg outline outline-gray-800 outline-2 outline-offset-2 bg-green-500 text-gray-100" @click="sendReply(comment)">Kirim Balasan</button>
                </div>
              </div>
            </div>

            <!-- Tampilkan balasan di bawah komentar -->
            <div class="reply_comment py-1">
            <ul v-if="comment.replies && comment.replies.length">
              <li v-for="reply in comment.replies" :key="reply.id">
                <div class="comment">
                    <img :src="reply.photoURL" alt="Avatar" class="comment-avatar_reply">
                  <div class="comment-info">
                    <div class="comment-name">{{ reply.displayName }}</div>
                    <div class="comment-text">{{ reply.text }}</div>
                    <div class="comment-timestamp"> {{ formatTimestamp(reply.time) }}</div>
                    <button @click="deleteReply(comment.id, reply.id)">Delete</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          </li>
        </ul>
      <p v-else>Tidak ada Do'a.</p>
    </div>
  </section>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ref } from 'vue';
import axios from 'axios';

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Inisialisasi Firebase App
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export default {
  data() {
    return {
      comments: [],
      user: null,
      newCommentText: '',
    };
  },
  methods: {
    async handleGoogleLogin() {
      try {
        const result = await signInWithPopup(auth, provider);
        this.user = result.user;
        console.log("Berhasil login dengan Google:");
      } catch (error) {
        console.error("Error saat login dengan Google:", error.message);
      }
    },
    async addComment() {
      if (!this.newCommentText.trim()) return;
      try {
        if (!this.user) {
        // Langsung arahkan ke popup login
        await this.handleGoogleLogin();
        return;
        }
        const commentData = {
          text: this.newCommentText,
          displayName: this.user.displayName,
          photoURL: this.user.photoURL,
          timestamp: new Date()
        };
        const idToken = await this.user.getIdToken(); // Mengambil token JWT dari Firebase Authentication
        const urlPost = import.meta.env.VITE_API_URL
        const response = await axios.post(`${urlPost}`, commentData, {
          headers: {
            Authorization: `Bearer ${idToken}` // Menambahkan token JWT ke header Authorization
          }
        });
        console.log('Komentar berhasil ditambahkan:', response.data);
        this.newCommentText = ''; // Bersihkan teks komentar setelah berhasil menambahkan
        // Ambil komentar setelah menambahkan komentar baru
        await this.getComments();
        alert('Terima kasih, komentar Anda telah berhasil dikirim!');
      } catch (error) {
        // console.error('Error adding comment: ', error.response.data);
        alert('Terjadi kesalahan: ' + JSON.stringify(error.response.data.error));
      }
    },
    toggleReplyForm(comment) {
      comment.replying = !comment.replying; // Toggle status replying
      comment.replyText = ''; // Reset teks balasan
    },
// Reply Comment
async sendReply(comment) {
  try {
    // Periksa apakah pengguna sudah login
    if (!this.user) {
      // Jika belum, arahkan ke proses login
      await this.handleGoogleLogin();
      return;
    }

    // Validasi teks komentar tidak boleh kosong atau hanya berisi spasi
    if (!comment.replyText || !comment.replyText.trim()) {
      alert('Teks komentar tidak valid');
      return;
    }

    // Validasi karakter khusus pada teks komentar
    const forbiddenCharsRegex = /[@#$%^&*()":{}|<>]/;
    if (forbiddenCharsRegex.test(comment.replyText)) {
      alert('Teks komentar mengandung karakter khusus yang tidak diperbolehkan');
      return;
    }

    // Kirim data balasan ke backend
    const urlPost = import.meta.env.VITE_API_URL
    const idToken = await this.user.getIdToken(); // Mengambil token JWT dari Firebase Authentication
    const response = await axios.post(`${urlPost}`, {
      text: comment.replyText,
      parentId: comment.id, // Sertakan parentId dari komentar yang akan dibalas
      displayName: this.user.displayName,
      photoURL: this.user.photoURL
    }, {
      headers: {
        Authorization: `Bearer ${idToken}` // Menambahkan token JWT ke header Authorization
      }
    });

    // Perbarui tampilan frontend
    comment.replying = false;
    comment.replyText = ''; // Kosongkan teks balasan setelah terkirim
    await this.getComments();
    // Jika berhasil, tampilkan pesan sukses
    console.log('Reply berhasil ditambahkan:', response.data.message);
    alert('Reply berhasil ditambahkan:', response.data);
  } catch (error) {
    console.error('Error sending reply:', error);
    alert('Gagal mengirim balasan. Mohon coba lagi.' + error.message);
  }
},

async deleteComment(commentId) {
    try {
      // Konfirmasi pengguna sebelum menghapus komentar
      const confirmation = confirm('Apakah Anda yakin ingin menghapus komentar ini?');
      if (!confirmation) {
        return; // Jika pengguna membatalkan penghapusan
      }

      // Mengambil token JWT dari Firebase Authentication
      const idToken = await this.user.getIdToken();

      // Mengirim permintaan DELETE ke backend
      const urlDelete = import.meta.env.VITE_API_URL
      const response = await axios.delete(`${urlDelete}/${commentId}`, {
        headers: {
          Authorization: `Bearer ${idToken}` // Menambahkan token JWT ke header Authorization
        }
      });

      // Memperbarui tampilan setelah komentar berhasil dihapus
      console.log('Komentar berhasil dihapus:', response.data.message);
      alert('Komentar berhasil dihapus' + response.data);

      // Lakukan refresh data komentar setelah penghapusan berhasil
      if (response.data && response.data.error) {
          console.error(response.data.error);
          // Lakukan sesuatu seperti menampilkan pesan kesalahan pada UI
        } else {
          await this.getComments();
        }
    } catch (error) {
      console.error('Error deleting comment:', error.response.data.error);
      alert('Error deleting comment: ' + error.response.data.error);
    }
  },
  // hapus reply comment
  async deleteReply(commentId, replyId) {
    try {
      // Konfirmasi pengguna sebelum menghapus balasan
      const confirmation = confirm('Apakah Anda yakin ingin menghapus balasan ini?');
      if (!confirmation) {
        return; // Jika pengguna membatalkan penghapusan
      }

      // Mengambil token JWT dari Firebase Authentication
      const idToken = await this.user.getIdToken();

      // Mengirim permintaan DELETE ke backend
      const urlDelete = import.meta.env.VITE_API_URL
      const response = await axios.delete(`${urlDelete}/${commentId}/replies/${replyId}`, {
        headers: {
          Authorization: `Bearer ${idToken}` // Menambahkan token JWT ke header Authorization
        }
      });

      // Memperbarui tampilan setelah balasan berhasil dihapus
      console.log('Balasan berhasil dihapus:', response.status);
      alert('Balasan berhasil dihapus' + response.status);
      if (response.data && response.data.error) {
          console.error(response.data.error);
          // Lakukan sesuatu seperti menampilkan pesan kesalahan pada UI
        } else {
          await this.getComments();
        }
      // Lakukan refresh data komentar setelah penghapusan berhasil
      // await this.getComments();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.payload && error.response.data.payload.message) {
        alert('Terjadi kesalahan: ' + error.response.data.payload.message);
      } else {
        console.error('Error deleting reply:', error);
        alert('Terjadi kesalahan saat menghapus balasan');
      }
    }
  },
    async logout() {
    try {
      await auth.signOut();
      this.user = null;
      console.log("Logout berhasil.");

      alert("Logout");
    } catch (error) {
      console.error('Error logging out: ', error);
      alert('Error logging out: ' + error.message);
    }
  },
  formatTimestamp(timestamp) {
  const now = new Date();
  const date = new Date(timestamp._seconds * 1000);

  // Cek apakah timestamp adalah hari ini
  const isToday = date.getDate() === now.getDate() &&
                 date.getMonth() === now.getMonth() &&
                 date.getFullYear() === now.getFullYear();

  // Cek apakah timestamp adalah kemarin
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = date.getDate() === yesterday.getDate() &&
                      date.getMonth() === yesterday.getMonth() &&
                      date.getFullYear() === yesterday.getFullYear();

  if (isToday) {
    let hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight

    return `Today at ${hours}:${minutes} ${ampm}`;
  } else if (isYesterday) {
    let hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight

    return `Yesterday at ${hours}:${minutes} ${ampm}`;
  } else {
    // Format tanggal biasa
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    let hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight

    const formattedTime = `${day}/${month}/${year} at ${hours}:${minutes} ${ampm}`;

    return formattedTime;
  }
},
    async getComments() {
      try {
        const urlGet = import.meta.env.VITE_API_URL
        const response = await axios.get(`${urlGet}`);
        if (response.status === 200) {
          this.comments = response.data.payload.data;
        } else {
          console.error('Failed to get comments:', response.data.message);
        }
      } catch (error) {
        console.error('Error getting comments:', error);
      }
    },
  },
  async mounted() {
    try {
      // Ambil komentar saat komponen dimuat
      await this.getComments();
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
    // Tambahkan listener untuk status login Firebase
    auth.onAuthStateChanged(user => {
      this.user = user;
    });
  }
};
</script>
<style scoped>
.comment{
  display: flex;
}
.comment\.replying {
    display: flex;
    flex-direction: column;
    flex-direction: column;
    padding-left: 3rem;
}
.reply_comment {
    padding-left: 3rem;
}
.comment-container {
  display: flex;
  align-items: flex-start; /* Mengubah posisi vertikal ke atas */
  margin-bottom: 10px;
}

.comment-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.comment-avatar_reply{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}
.comment-info {
  flex: 1;
}

.comment-name {
  font-weight: bold;
}

.comment-text {
  margin-bottom: 5px; 
}

.comment-timestamp {
  font-size: 0.8rem;
  color: #888;
}
form{
  display: flex;
  flex-direction: column;
}
.buttonSubmit{
  text-align: start;
}
section{
  text-align: start;
}
</style>