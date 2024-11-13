<template>
  <div class="rent-car">
    <h2>Formulir Penyewaan Mobil</h2>
    <form @submit.prevent="handleRent">
      <input type="date" v-model="startDate" required />
      <input type="date" v-model="endDate" required />
      <button type="submit" class="btn">Sewa Mobil</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RentCarView',
  props: ['carId'],
  data() {
    return {
      startDate: '',
      endDate: '',
    }
  },
  methods: {
    handleRent() {
      console.log(`Menyewa mobil dengan ID: ${this.carId} dari ${this.startDate} hingga ${this.endDate}`);
      this.$router.push('/cars');
    },
  },
}
</script>

<style scoped>
.rent-car {
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
