<template>
  <div>
    <h2>Registrasi Pengguna</h2>
    <form @submit.prevent="registerUser">
      <div>
        <label for="name">Nama:</label>
        <input v-model="user.name" id="name" type="text" required />
      </div>
      <div>
        <label for="address">Alamat:</label>
        <input v-model="user.address" id="address" type="text" required />
      </div>
      <div>
        <label for="phone">Nomor Telepon:</label>
        <input v-model="user.phone" id="phone" type="text" required />
      </div>
      <div>
        <label for="license">Nomor SIM:</label>
        <input v-model="user.license" id="license" type="text" required />
      </div>
      <button type="submit">Daftar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        address: '',
        phone: '',
        license: ''
      }
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.user),
        });
        const data = await response.json();
        alert(data.message || 'Pendaftaran berhasil');
      } catch (error) {
        console.error('Error:', error);
        alert('Gagal melakukan registrasi');
      }
    }
  }
};
</script>
