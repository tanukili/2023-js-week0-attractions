<script>
import FrontHeader from '../components/FrontHeader.vue';

export default {
  components: {
    FrontHeader,
  },
  data() {
    return {
      view: [],
    };
  },
  methods: {
    render(id) {
      this.axios.get(`http://localhost:3000/views/${id}`).then((res) => {
        this.view = res.data;
      });
    },
  },
  mounted() {
    const id = location.href.split('=')[1];
    this.render(id);
  },
};
</script>

<template>
  <header>
    <FrontHeader />
  </header>
  <div class="container mt-5">
    <h1>景點詳細</h1>
    <h2 class="fw-bold">{{ view.name }}</h2>
    <p>{{ view.description }}</p>
    <a href="">加入收藏</a>
  </div>
</template>
