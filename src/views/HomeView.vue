<script>
export default {
  data() {
    return {
      views: [],
    };
  },
  methods: {
    render() {
      this.axios.get('http://localhost:3000/views').then((res) => {
        this.views = res.data;
        this.views.forEach((e) => {
          e.href = `#/view?id=${e.id}`;
        });
      });
    },
  },
  mounted() {
    this.render();
  },
};
</script>

<template>
  <div class="container mt-5">
    <h1>景點列表</h1>
    <ul class="row row-cols-2 row-cols-md-3 g-4 list-unstyled">
      <li class="col" v-for="view in views" :key="view.id">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ view.name }}</h5>
            <p class="card-text">
              {{ view.description }}
            </p>
          </div>
          <div class="card-footer">
            <a :href="view.href" class="btn btn-primary">詳細資料</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
