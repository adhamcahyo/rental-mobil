<template>
  <div class="register">
    <h2>Registrasi Pengguna</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="formData.username" required />
      </div>

      <div class="form-group">
        <label for="name">Nama:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>

      <div class="form-group">
        <label for="address">Alamat:</label>
        <input type="text" id="address" v-model="formData.address" required />
      </div>

      <div class="form-group">
        <label for="phone">Nomor Telepon:</label>
        <input type="tel" id="phone" v-model="formData.phone" required />
      </div>

      <div class="form-group">
        <label for="license">Nomor SIM:</label>
        <input type="text" id="license" v-model="formData.license" required />
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="formData.password" required />
      </div>

      <button type="submit">Daftar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegisterView',
  data() {
    return {
      formData: {
        username: '',
        name: '',
        address: '',
        phone: '',
        license: '',
        password: ''
      }
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('http://localhost:3000/api/register', this.formData);
        
        if (response.status === 200) {
          alert('Registrasi berhasil disimpan!');
          
          this.formData = {
            username: '',
            name: '',
            address: '',
            phone: '',
            license: '',
            password: ''
          };

          setTimeout(() => {
            this.$router.push('/login');
          }, 3000);
        } else {
          throw new Error('Gagal menyimpan data');
        }
      } catch (error) {
        console.error('Gagal menyimpan data:', error.response || error.message);
        alert('Gagal menyimpan data. Pastikan server berjalan dengan baik.');
      }
    }
  }
};
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333333;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #333333;
  background-color: #ffffff;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #4CAF50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
