<template>
  <div class="car-list">
    <h2>Daftar Mobil</h2>
    <div class="search-container">
      <input v-model="searchBrand" type="text" placeholder="Cari berdasarkan merek" @input="searchCars" />
      <input v-model="searchModel" type="text" placeholder="Cari berdasarkan model" @input="searchCars" />
    </div>
    <div class="cars">
      <CarItem v-for="car in filteredCars" :key="car.id" :car="car" />
    </div>
    <button @click="addCar" class="add-car-button">Tambah Mobil</button>
  </div>
</template>

<script>
import CarItem from './CarItem.vue';

export default {
  name: 'CarList',
  components: { CarItem },
  data() {
    return {
      cars: [],
      filteredCars: [],
      searchBrand: '',
      searchModel: '',
    };
  },
  methods: {
    fetchCars() {
      fetch('http://localhost:3000/api/cars')
        .then(response => response.json())
        .then(data => {
          this.cars = data.cars;
          this.filteredCars = this.cars;
        })
        .catch(err => console.error('Error fetching cars:', err));
    },
    searchCars() {
      this.filteredCars = this.cars.filter(car => {
        return (
          (this.searchBrand ? car.brand.toLowerCase().includes(this.searchBrand.toLowerCase()) : true) &&
          (this.searchModel ? car.model.toLowerCase().includes(this.searchModel.toLowerCase()) : true)
        );
      });
    },
    addCar() {
      this.$router.push({ name: 'add-car' });
    },
  },
  created() {
    this.fetchCars();
  },
};
</script>

<style scoped>
.car-list {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
}

.search-container {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}

.search-container input {
  padding: 8px;
  width: 200px;
  background-color: #34495e;
  color: white;
  border: 1px solid #1abc9c;
}

.cars {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.add-car-button {
  margin-top: 20px;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
}

.add-car-button:hover {
  background-color: #2980b9;
}
</style>
