<template>
  <div class="add-car-view">
    <h2>Tambah Mobil</h2>
    <form @submit.prevent="addCar">
      <div class="form-group">
        <label for="brand">Merek</label>
        <input type="text" v-model="car.brand" id="brand" required />
      </div>
      <div class="form-group">
        <label for="model">Model</label>
        <input type="text" v-model="car.model" id="model" required />
      </div>
      <div class="form-group">
        <label for="plate">Nomor Plat</label>
        <input type="text" v-model="car.plate" id="plate" required />
      </div>
      <div class="form-group">
        <label for="price">Tarif Sewa Per Hari</label>
        <input type="number" v-model="car.price" id="price" required />
      </div>
      <div class="form-group">
        <label for="imageUrl">URL Gambar</label>
        <input type="text" v-model="car.imageUrl" id="imageUrl" required />
      </div>
      <button type="submit" class="submit-btn">Tambah Mobil</button>
    </form>

    <div v-if="message" class="message">
      {{ message }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      car: {
        brand: '',
        model: '',
        plate: '',
        price: '',
        imageUrl: ''
      },
      message: ''
    };
  },
  methods: {
    async addCar() {
      try {
        const response = await axios.post('http://localhost:3000/api/cars', this.car);
        if (response.data.success) {
          this.message = 'Mobil berhasil ditambahkan!';
          // Reset form
          this.car = { brand: '', model: '', plate: '', price: '', imageUrl: '' };
        }
      } catch (error) {
        this.message = 'Terjadi kesalahan saat menambahkan mobil';
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.add-car-view {
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 50px auto;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

form label {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

form input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.submit-btn {
  background-color: #28a745;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #218838;
}

.message {
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  color: green;
}
</style>
