<script>
import FrontHeader from '../components/FrontHeader.vue';

export default {
  components: {
    FrontHeader,
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      this.axios
        .post('http://localhost:3000/login', this.user)
        .then((res) => {
          alert('登入成功');
          // 儲存 token
          const { accessToken } = res.data;
          const { id } = res.data.user;
          document.cookie = `userToken=${accessToken}; max-age=43200`;
          document.cookie = `userId=${id}; max-age=43200`;
          window.location.href = '/';
        })
        .catch((err) => {
          alert(`登入失敗：${err.response.data}`);
        });
    },
  },
};
</script>

<template>
  <header>
    <FrontHeader />
  </header>
  <div class="container mt-5">
    <h1>登入</h1>
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
        type="submit"
        class="btn btn-primary"
        value="登入"
        @click.prevent="login"
      />
    </form>
  </div>
</template>

<style></style>
