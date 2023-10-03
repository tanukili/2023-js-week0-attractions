<script>
import FrontHeader from '../components/FrontHeader.vue';

export default {
  components: {
    FrontHeader,
  },
  methods: {
    render() {
      console.log('Hello');
      this.axios.get('https://randomuser.me/api/').then((res) => {
        console.log(res);
      });
    },
  },
  mounted() {
    this.render();
  },
};
</script>

<template>
  <header>
    <FrontHeader />
  </header>
  <h1>首頁</h1>
</template>
