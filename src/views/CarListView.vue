<template>
  <div class="car-list-view">
    <!-- Navigasi -->
    <div class="nav">
      <router-link to="/add-car" class="nav-link">Tambah Mobil</router-link>
      <form @submit.prevent="searchCars" class="search-form">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Cari mobil berdasarkan merek atau model" 
          class="search-input" 
        />
        <button type="submit" class="search-button">Cari</button>
      </form>
    </div>

    <!-- Judul -->
    <h2>Daftar Mobil untuk Disewa</h2>

    <!-- Loading State -->
    <div v-if="loading" class="loading">
      <p>Memuat daftar mobil...</p>
    </div>

    <!-- Error State -->
    <div v-if="errorMessage" class="error">
      <p>{{ errorMessage }}</p>
    </div>

    <!-- Daftar Mobil -->
    <div v-if="cars.length > 0" class="car-list">
      <div v-for="car in cars" :key="car.plate" class="car-item">
        <img :src="car.imageUrl" :alt="car.brand" class="car-image" />
        <div class="car-details">
          <h3>{{ car.brand }} - {{ car.model }}</h3>
          <p>Nomor Plat: {{ car.plate }}</p>
          <p>Harga: Rp {{ car.price }} / hari</p>
        </div>
      </div>
    </div>

    <!-- Tidak Ada Mobil -->
    <div v-if="cars.length === 0" class="no-cars">
      <p>Belum ada mobil yang tersedia.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cars: [],
      searchQuery: '',
      loading: false,
      errorMessage: ''
    };
  },
  created() {
    this.fetchCars();
  },
  methods: {
    async fetchCars() {
      this.loading = true;
      try {
        const response = await axios.get('http://localhost:3000/api/cars');
        this.cars = response.data.cars;
      } catch (error) {
        this.errorMessage = 'Gagal memuat daftar mobil.';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async searchCars() {
      if (!this.searchQuery) {
        this.fetchCars();  
        return;
      }

      this.loading = true;
      try {
        const response = await axios.get('http://localhost:3000/api/cars/search', {
          params: {
            brand: this.searchQuery,
            model: this.searchQuery
          }
        });
        this.cars = response.data.cars;
      } catch (error) {
        this.errorMessage = 'Gagal melakukan pencarian mobil.';
        console.error(error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.car-list-view {
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: 50px auto;
}

h2 {
  text-align: center;
  color: #2c3e50;
  font-size: 24px;
  margin-bottom: 20px;
}

.nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  background-color: #28a745;
  padding: 12px 20px;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #218838;
}

.search-form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-input {
  padding: 12px 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 250px;
  margin-right: 10px;
  font-size: 16px;
}

.search-button {
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #0056b3;
}

.loading, .error, .no-cars {
  text-align: center;
  color: #999;
  font-size: 18px;
}

.car-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
}

.car-item {
  width: 48%;
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.car-item img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
}

.car-details {
  margin-top: 15px;
}

.car-details h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.car-details p {
  font-size: 16px;
  color: #555;
}

.car-item:hover {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}

.no-cars p {
  font-size: 18px;
  color: #666;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .car-item {
    width: 100%;
  }
}
</style>
