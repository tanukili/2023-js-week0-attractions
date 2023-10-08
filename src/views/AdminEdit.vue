<script>
export default {
  data() {
    return {
      view: {},
    };
  },
  methods: {
    render(id) {
      this.axios.get(`http://localhost:3000/views?id=${id}`).then((res) => {
        this.view = res.data[0];
      });
    },
    editView(obj) {
      this.axios
        .patch(`http://localhost:3000/views/${this.view.id}`, obj)
        .then(() => {
          alert('編輯成功');
        })
        .catch(() => {
          alert('編輯失敗');
        });
    },
  },
  mounted() {
    const id = window.location.href.split('=')[1];
    this.render(id);
  },
};
</script>

<template>
  <div class="container mt-5">
    <h1>編輯景點</h1>
    <form action="#">
      <div class="mb-3">
        <label for="title" class="form-label">標題</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="view.name"
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">內文</label>
        <textarea
          class="form-control"
          id="description"
          rows="3"
          v-model="view.description"
        ></textarea>
      </div>
      <input
        @click.prevent="editView(this.view)"
        type="submit"
        class="btn btn-primary"
        value="儲存"
      />
    </form>
  </div>
</template>
