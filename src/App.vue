<script>
import { RouterView } from 'vue-router';
import FrontHeader from './components/FrontHeader.vue';
import AdminHeader from './components/AdminHeader.vue';

export default {
  components: {
    RouterView,
    FrontHeader,
    AdminHeader,
  },
  data() {
    return {
      isAdmin: false,
    };
  },
  methods: {
    checkRole(role) {
      if (role === 'admin') {
        this.isAdmin = true;
      }
    },
    // 移到父層，分別 prop 到子層
    logout() {
      // 清除 cookie 資料
      document.cookie = 'userToken=; max-age=43200';
      document.cookie = 'userId=; max-age=43200';
      document.cookie = 'role=; max-age=43200';
      alert('成功登出');
      // 判斷當下頁面：在其他頁面時導向首頁，在首頁時刷新
      const location = window.location.href.split('#')[1];
      if (location !== '/') {
        this.$router.push('/');
      } else {
        this.$router.go(0);
      }
    },
  },
  mounted() {
    const role = document.cookie.replace(
      /(?:(?:^|.*;\s*)role\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    this.checkRole(role);
  },
};
</script>

<template>
  <header>
    <AdminHeader v-if="isAdmin" :logout="logout" />
    <FrontHeader v-else :logout="logout" />
  </header>
  <RouterView />
</template>
