<script>
import FrontHeader from '../components/FrontHeader.vue';

export default {
  components: {
    FrontHeader,
  },
  data() {
    return {
      view: {
        viewId: null,
      },
      isCollected: false,
      isClick: false,
    };
  },
  methods: {
    render(id) {
      this.axios.get(`http://localhost:3000/views/${id}`).then((res) => {
        // 展開運算子組合需要的資料
        this.view = { ...this.view, ...res.data };
        this.view.id = null;
      });
    },
    // 加入收藏（token in cookie）
    addCollect() {
      // 避免重複加入
      if (this.isCollected && this.view.userId) {
        alert('已加入收藏');
        return;
      }
      // 取得 token
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      // 權限 600
      this.axios
        .post('http://localhost:3000/600/collects', this.view, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then(() => {
          alert('加入成功');
          this.isCollected = true;
        })
        .catch(() => {
          alert('請先登入');
          this.$router.push('/login'); // vue router 內建方法
        });
    },
    // 檢查收藏狀態
    checkCollects() {
      this.axios
        .get(`http://localhost:3000/collects?userId=${this.view.userId}`)
        .then((res) => {
          const addedView = !!res.data.find(this.a);
          if (addedView) {
            this.isCollected = true;
            this.isClick = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    a(view) {
      return view.viewId === this.view.viewId;
    },
  },
  mounted() {
    // 資料
    const id = window.location.href.split('=')[1];
    this.view.viewId = id;
    const userId = document.cookie.replace(
      /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    this.view.userId = userId;
    // 渲染
    this.render(id);
    this.checkCollects();
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
    <a href="#" @click.prevent="addCollect">
      <!-- 加入後即時切換顯示-->
      <span :class="{'d-none' : !isClick}">已收藏</span>
      <span :class="{'d-none' : isClick}" @click="isClick = !isClick">加入收藏</span>
    </a>
  </div>
</template>
