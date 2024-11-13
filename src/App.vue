<template>
  <div id="app">
    <header>
      <div class="logo">
        <img src="@/assets/logo.png" alt="Rental Mobil Brand Logo" />
        <span class="brand-name">Rental Mobil</span>
      </div>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li v-if="!isAuthenticated"><router-link to="/login">Login</router-link></li>
          <li v-if="!isAuthenticated"><router-link to="/register">Register</router-link></li>
          <li v-if="isAuthenticated"><router-link to="/cars">Cars</router-link></li>
          <li v-if="isAuthenticated"><router-link to="/rent/:carId">Rent Car</router-link></li>
          <li v-if="isAuthenticated"><router-link to="/return/:carId">Return Car</router-link></li>
          <li v-if="isAuthenticated">
            <span>Selamat datang {{ $username }}</span>
          </li>
          <li v-if="isAuthenticated">
            <button @click="logout">Logout</button>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <p>&copy; 2024 Rental Mobil - All Rights Reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isAuthenticated: false,
      username: '',  
    };
  },
  methods: {
    logout() {
      this.isAuthenticated = false;
      this.username = '';  
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('username');
      this.$router.push('/login');
    },
    checkAuth() {
      const token = localStorage.getItem('isAuthenticated');
      if (token === 'true') {
        this.isAuthenticated = true;
        this.username = localStorage.getItem('username') || ''; 
      } else {
        this.isAuthenticated = false;
      }
    },
  },
  created() {
    this.checkAuth();
  },
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f4f4f4;
}

header {
  background-color: #282c34;
  color: #ddd;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

header .logo img {
  width: 100px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
}

header .logo .brand-name {
  font-size: 20px;
  font-weight: bold;
  color: #ddd;
}

nav ul {
  list-style-type: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

nav ul li {
  font-size: 16px;
}

nav ul li a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s;
}

nav ul li button {
  color: #ddd;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
}

nav ul li a:hover,
nav ul li button:hover {
  color: #3498db;
}

main {
  flex-grow: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

footer {
  background-color: #282c34;
  color: #ddd;
  padding: 10px;
  text-align: center;
  margin-top: auto;
}

@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
}
</style>
