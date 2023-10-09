<script>
import { RouterView } from 'vue-router';

export default {
  components: {
    RouterView,
  },
  methods: {
    blockNotAdmin() {
      const role = document.cookie.replace(
        /(?:(?:^|.*;\s*)role\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
      const adminPage = window.location.href.split('/')[4]; // 需要權限的頁面
      if (role !== 'admin' && adminPage === 'admin') {
        alert('您沒有權限進入');
        this.$router.push('/');
      }
    },
  },
  mounted() {
    this.blockNotAdmin();
  },
};
</script>

<template>
  <RouterView :adminBlock="blockNotAdmin"></RouterView>
</template>
