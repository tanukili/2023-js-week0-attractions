<script>
export default {
  props: ['logout'],
  data() {
    return {
      token: '',
      haveToken: false,
    };
  },
  methods: {
    // 待修改：登出後沒刷新
    checkToken() {
      if (this.token) {
        this.haveToken = true;
      } else {
        this.haveToken = false;
      }
    },
  },
  mounted() {
    this.token = document.cookie.replace(
      /(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    this.checkToken();
  },
};
</script>
<template>
  <nav class="navbar navbar-expand bg-body-tertiary">
    <div class="container-fluid d-flex">
      <a class="navbar-brand" href="#">logo</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link" aria-current="page" to="/"
            >首頁</RouterLink
          >
        </li>
        <li class="nav-item" v-if="haveToken">
          <RouterLink class="nav-link" aria-current="page" to="/collects"
            >收藏列表</RouterLink
          >
        </li>
        <li class="nav-item" v-if="!haveToken">
          <RouterLink class="btn btn-primary mx-2" to="/signup"
            >註冊</RouterLink
          >
        </li>
        <li class="nav-item" v-if="haveToken">
          <a
            class="btn btn-outline-primary mx-2"
            href="#"
            @click.prevent="logout"
            >登出</a
          >
        </li>
        <li class="nav-item" v-else>
          <RouterLink class="btn btn-outline-primary mx-2" to="/login"
            >登入</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
