<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="login-title">Login Pengguna</h2>
      <form @submit.prevent="loginUser">
        <div class="input-group">
          <label for="username">Username</label>
          <input v-model="credentials.username" id="username" type="text" required placeholder="Masukkan Username" />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input v-model="credentials.password" id="password" type="password" required placeholder="Masukkan Password" />
        </div>
        <button type="submit" class="btn-login">Login</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <div class="links">
          <router-link to="/register">Belum punya akun? Daftar sekarang</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      },
      errorMessage: '',
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await fetch('http://localhost:3000/api/login', {  // Sesuaikan URL
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.credentials),
        });

        const data = await response.json();

        if (response.status === 200) {
          localStorage.setItem('isAuthenticated', true);
          this.$router.push('/cars');
        } else {
          this.errorMessage = data.message || 'Login gagal, coba lagi';
        }
      } catch (error) {
        this.errorMessage = 'Gagal menghubungi server, coba lagi nanti';
      }
    }
  }
};
</script>


<style scoped>
/* Styling tetap sama */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
}

.login-card {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-title {
  text-align: center;
  font-size: 24px;
  color: #333;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  font-size: 14px;
  color: #333;
  display: block;
  margin-bottom: 6px;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 8px;
}

.input-group input:focus {
  border-color: #3498db;
  outline: none;
}

.btn-login {
  width: 100%;
  padding: 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.btn-login:hover {
  background-color: #2980b9;
}

.error-message {
  color: red;
  font-size: 14px;
  text-align: center;
}

.links {
  text-align: center;
  margin-top: 10px;
}

.links a {
  color: #3498db;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}
</style>
