<template>
  <div>
    <LoginForm
      :isAuthenticated="isAuthenticated"
      :username="username"
      @login="handleLogin"
      @logout="handleLogout"
    />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  components: {
    LoginForm
  },
  data() {
    return {
      isAuthenticated: false,
      username: ''
    };
  },
  methods: {
    handleLogin(authData) {
      this.isAuthenticated = authData.isAuthenticated;
      this.username = authData.username;
    },
    handleLogout() {
      this.isAuthenticated = false;
      this.username = '';
    }
  }
};
</script>

<style scoped>
</style>
