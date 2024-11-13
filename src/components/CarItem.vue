<template>
  <div class="car-item">
    <img :src="car.imageUrl" alt="Car image" class="car-image" />
    <div class="car-details">
      <h3>{{ car.brand }} {{ car.model }}</h3>
      <p>No. Plat: {{ car.plate }}</p>
      <p>Harga Sewa: Rp {{ car.price }} per hari</p>
      <button @click="rentCar">Sewa Mobil</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarItem',
  props: {
    car: Object,
  },
  methods: {
    rentCar() {
      this.$router.push({ name: 'rent-car', params: { carId: this.car.id } });
    },
  },
};
</script>

<style scoped>
.car-item {
  width: 300px;
  border: 1px solid #34495e;
  border-radius: 8px;
  overflow: hidden;
  background-color: #2c3e50;
  color: white;
}

.car-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.car-details {
  padding: 15px;
}

button {
  padding: 10px;
  background-color: #1abc9c;
  color: white;
  border: none;
  width: 100%;
  cursor: pointer;
}

button:hover {
  background-color: #16a085;
}
</style>
