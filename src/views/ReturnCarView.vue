<template>
  <div class="return-car">
    <h2>Formulir Pengembalian Mobil</h2>
    <form @submit.prevent="handleReturn">
      <input type="text" v-model="carPlate" placeholder="Nomor Plat Mobil" required />
      <button type="submit" class="btn">Kembalikan Mobil</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ReturnCarView',
  props: ['carId'],
  data() {
    return {
      carPlate: '',
    }
  },
  methods: {
    handleReturn() {
      console.log(`Mengembalikan mobil dengan ID: ${this.carId} dan plat mobil: ${this.carPlate}`);
      this.$router.push('/cars');
    },
  },
}
</script>

<style scoped>
.return-car {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

h2 {
  text-align: center;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
