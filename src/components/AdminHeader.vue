<script>
export default {
  props: ['logout'],
};
</script>

<template>
  <nav class="navbar navbar-expand bg-body-tertiary">
    <div class="container-fluid d-flex">
      <RouterLink class="navbar-brand" to="/admin/edit">後台</RouterLink>
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link" aria-current="page" to="/"
            >返回首頁</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" aria-current="page" to="/admin/list"
            >後台介面</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink class="btn btn-primary mx-2" to="/admin/addnew"
            >新增景點</RouterLink
          >
        </li>
        <li class="nav-item">
          <a
            class="btn btn-outline-primary mx-2"
            href="#"
            @click.prevent="logout"
            >登出</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
