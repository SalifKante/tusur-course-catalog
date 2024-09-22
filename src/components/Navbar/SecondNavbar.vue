<template>
  <nav
    class="navbar navbar-light bg-white py-2 border-bottom"
    style="border-top: 2px solid #3c388d"
  >
    <div class="container d-flex">
      <!-- Breadcrumb Links -->
      <a class="nav-link" href="#" style="color: #3c388d">Главная</a>
      <span class="mx-2" style="color: #3c388d">/</span>
      <a class="nav-link" href="#" style="color: #3c388d">Каталог курсов</a>

      <!-- Course Content Button (aligned to the right) -->
      <button
        class="btn btn-outline-primary custom-btn ms-auto"
        style="color: #3c388d; border-radius: 20px"
      >
        <i class="fas fa-list"></i> Содержание курса
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SecondaryNavbar",
};
</script>

<style scoped>
.navbar {
  border-bottom: 1px solid #ececec;
}
/* Custom button styling */
.custom-btn {
  background-color: white !important; /* Force background to stay white */
  color: #3c388d !important; /* Custom text color */
  border-color: #3c388d !important; /* Custom border color */
}

.custom-btn:hover {
  background-color: white !important; /* Ensure background remains white on hover */
  color: #2a2b7a !important; /* Change text color on hover */
  border-color: #2a2b7a !important; /* Change border color on hover */
}
</style>
