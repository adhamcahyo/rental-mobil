<template>
  <div class="home">
    <div class="hero">
      <div class="overlay">
        <h1>Selamat datang di Rental Mobil CV Cahyo Transport</h1>
        <p>Temukan mobil impianmu untuk disewa dengan harga terbaik.</p>
      </div>
    </div>

    <div class="car-slider">
      <swiper
        slidesPerView="1"
        spaceBetween="10"
        loop="true"
        autoplay="true"
        pagination="true"
        navigation="true"
      >
        <swiper-slide><img src="https://via.placeholder.com/800x400?text=Mobil+1" alt="Mobil 1" /></swiper-slide>
        <swiper-slide><img src="https://via.placeholder.com/800x400?text=Mobil+2" alt="Mobil 2" /></swiper-slide>
        <swiper-slide><img src="https://via.placeholder.com/800x400?text=Mobil+3" alt="Mobil 3" /></swiper-slide>
      </swiper>
    </div>

    <div class="about">
      <h2>Tentang Kami</h2>
      <p>
        CV Cahyo Transport adalah penyedia layanan sewa mobil terpercaya yang siap membantu Anda dengan armada kendaraan terbaik. 
        Kami menawarkan berbagai pilihan mobil untuk kebutuhan Anda, mulai dari liburan, bisnis, hingga keperluan pribadi.
      </p>
    </div>

    <div class="services">
      <h2>Layanan Kami</h2>
      <div class="service-items">
        <div class="service-item">
          <img src="https://via.placeholder.com/150?text=Sewa+Mobil" alt="Sewa Mobil" />
          <h3>Sewa Mobil</h3>
          <p>Pilih mobil sesuai kebutuhan Anda dengan harga bersaing.</p>
        </div>
        <div class="service-item">
          <img src="https://via.placeholder.com/150?text=Antar+Mobil" alt="Antar Mobil" />
          <h3>Antar Jemput</h3>
          <p>Mobil akan diantar langsung ke lokasi Anda untuk kenyamanan lebih.</p>
        </div>
        <div class="service-item">
          <img src="https://via.placeholder.com/150?text=Layanan+Driver" alt="Layanan Driver" />
          <h3>Layanan Driver</h3>
          <p>Gunakan layanan driver berlisensi kami untuk kenyamanan ekstra dalam perjalanan Anda.</p>
        </div>
      </div>
    </div>

    <div class="cta">
      <h2>Siap Sewa Mobil? Hubungi Kami Sekarang!</h2>
      <p>Temukan mobil impian Anda dan sewa sekarang juga!</p>
      <button class="cta-btn" @click="contactUs">Hubungi Kami</button>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  name: 'HomeView',
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    contactUs() {
      window.location.href = 'mailto:contact@cahyotransport.com'; 
    }
  }
}
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
}

.hero {
  position: relative;
  background-image: url('https://via.placeholder.com/1600x600?text=Rental+Mobil');
  background-size: cover;
  background-position: center;
  height: 400px;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  text-align: center;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 20px;
  border-radius: 10px;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 20px;
}

.car-slider {
  margin-top: 40px;
}

.swiper-container {
  width: 100%;
  height: 400px;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about, .services, .cta {
  padding: 40px 20px;
  text-align: center;
}

.about h2, .services h2, .cta h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.about p, .cta p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
}

.service-items {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}

.service-item {
  text-align: center;
}

.service-item img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}

.service-item h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.service-item p {
  color: #666;
}

.cta-btn {
  padding: 12px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.cta-btn:hover {
  background-color: #45a049;
}
</style>
