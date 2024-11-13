<template>
  <div>
    <h2>Form Pengembalian Mobil</h2>
    <form @submit.prevent="returnCar">
      <div>
        <label for="carPlate">Nomor Plat Mobil:</label>
        <input v-model="returnData.carPlate" id="carPlate" type="text" required />
      </div>
      <div>
        <label for="returnDate">Tanggal Kembali:</label>
        <input v-model="returnData.returnDate" id="returnDate" type="date" required />
      </div>
      <button type="submit">Kembalikan Mobil</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      returnData: {
        carPlate: '',
        returnDate: '',
        user: 'user123'  
      }
    };
  },
  methods: {
    async returnCar() {
      try {
        const response = await fetch('/api/return', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.returnData),
        });
        const data = await response.json();
        alert(data.message || 'Pengembalian berhasil');
      } catch (error) {
        console.error('Error:', error);
        alert('Gagal mengembalikan mobil');
      }
    }
  }
};
</script>
