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
      if (role !== 'admin') {
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
  <RouterView></RouterView>
</template>
