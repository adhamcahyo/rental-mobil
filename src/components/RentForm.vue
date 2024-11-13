<template>
  <div>
    <h2>Form Peminjaman Mobil</h2>
    <form @submit.prevent="rentCar">
      <div>
        <label for="carPlate">Nomor Plat Mobil:</label>
        <input v-model="rental.carPlate" id="carPlate" type="text" required />
      </div>
      <div>
        <label for="startDate">Tanggal Mulai:</label>
        <input v-model="rental.startDate" id="startDate" type="date" required />
      </div>
      <div>
        <label for="endDate">Tanggal Selesai:</label>
        <input v-model="rental.endDate" id="endDate" type="date" required />
      </div>
      <button type="submit">Sewa Mobil</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rental: {
        carPlate: '',
        startDate: '',
        endDate: '',
        user: 'user123' // Gantilah sesuai dengan sesi pengguna yang login
      }
    };
  },
  methods: {
    async rentCar() {
      try {
        const response = await fetch('/api/rent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.rental),
        });
        const data = await response.json();
        alert(data.message || 'Peminjaman berhasil');
      } catch (error) {
        console.error('Error:', error);
        alert('Gagal melakukan peminjaman');
      }
    }
  }
};
</script>
