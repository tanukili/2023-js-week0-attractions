<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">logo</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/"
              >首頁</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="btn btn-primary mx-3" to="/signup"
              >註冊</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="btn btn-outline-primary" to="/login"
              >登入</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
