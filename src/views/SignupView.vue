<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
        role: 'user',
      },
    };
  },
  methods: {
    signup() {
      this.axios
        .post('http://localhost:3000/signup', this.user)
        .then(() => {
          alert('註冊成功');
          window.location.href = '#/login';
        })
        .catch((err) => {
          alert(`註冊失敗：${err.response.data}`);
        });
    },
  },
};
</script>

<template>
  <div class="container mt-5">
    <h1>註冊</h1>
    <form action="#">
      <div class="mb-3">
        <label for="email" class="me-2">信箱</label>
        <input type="email" id="email" v-model="user.email" />
      </div>
      <div class="mb-3">
        <label for="password" class="me-2">密碼</label>
        <input type="password" id="password" v-model="user.password" />
      </div>
      <input
        type="sybmit"
        class="btn btn-primary"
        value="註冊"
        @click="signup"
      />
    </form>
  </div>
</template>

<style></style>
