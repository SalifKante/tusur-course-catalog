<template>
  <nav
    class="navbar navbar-light bg-white py-2 border-bottom fixed-top second-navbar"
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
.second-navbar {
  top: 70px; /* Adjust this value to the height of the first navbar */
  z-index: 1030; /* Ensures it's above other content */
  width: 100%; /* Ensure full width */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow for a raised effect */
}

.custom-btn {
  background-color: white !important;
  color: #3c388d !important;
  border-color: #3c388d !important;
}

.custom-btn:hover {
  background-color: white !important;
  color: #2a2b7a !important;
  border-color: #2a2b7a !important;
}
</style>
