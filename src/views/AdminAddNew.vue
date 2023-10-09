<script>
export default {
  data() {
    return {
      view: {
        name: '',
        description: '',
      },
    };
  },
  methods: {
    addView(obj) {
      this.axios
        .post(`${import.meta.env.VITE_APP_PATH}/views`, obj)
        .then(() => {
          alert('新增成功');
          this.view.name = '';
          this.view.description = '';
        })
        .catch(() => {
          alert('新增失敗');
        });
    },
  },
};
</script>

<template>
  <div class="container mt-5">
    <h1>新增景點</h1>
    <form action="#" @submit.prevent="addView(this.view)">
      <div class="mb-3">
        <label for="title" class="form-label">標題</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="view.name"
          required
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">內文</label>
        <textarea
          class="form-control"
          id="description"
          rows="3"
          v-model="view.description"
          required
        ></textarea>
      </div>
      <input type="submit" class="btn btn-primary" value="新增景點" />
    </form>
  </div>
</template>
