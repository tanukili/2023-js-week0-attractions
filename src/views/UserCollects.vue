<script>
import FrontHeader from '../components/FrontHeader.vue';

export default {
  components: {
    FrontHeader,
  },
};
</script>

<template>
  <header>
    <FrontHeader></FrontHeader>
  </header>
  <div class="container mt-5">
    <h1>我的收藏</h1>
    <p>請先登入</p>
  </div>
</template>
