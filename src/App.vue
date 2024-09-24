<template>
  <div id="app">
    <!-- Primary AppNavbar Component -->
    <AppNavbar />

    <!-- Main Content -->
    <div class="container mt-navbar content-container">
      <div class="row">
        <!-- Sidebar with margin added below navbar -->
        <div class="col-lg-3 col-md-4 col-12 px-md-3 mb-4 mb-md-0 mt-component">
          <Sidebar />
        </div>

        <!-- Main Content: PopularCourses and Catalog -->
        <div class="col-lg-9 col-md-8 col-12 ps-md-4 mt-component">
          <PopularCourses />
          <Catalog />
        </div>
      </div>
    </div>

    <!-- ScrollToTop Component -->
    <ScrollToTop />

    <!-- AppFooter Component -->
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from "./components/Navbar/AppNavbar.vue";
import AppFooter from "./components/Footer/AppFooter.vue";
import Catalog from "./components/CourseCatalog.vue";
import PopularCourses from "./components/PopularCourses.vue";
import Sidebar from "./components/CourseFilters.vue";
import ScrollToTop from "./components/ScrollToTop.vue";

export default {
  components: {
    AppNavbar,
    AppFooter,
    Catalog,
    PopularCourses,
    Sidebar,
    ScrollToTop,
  },
};
</script>

<style scoped>
/* Adjust margin based on the height of the navbar */
.mt-navbar {
  margin-top: 120px; /* Adjust based on the height of your navbar */
}

/* Add space between navbar and sidebar & PopularCourses */
.mt-component {
  margin-top: 30px; /* Ensure consistent space below navbar */
}

/* Ensure footer sticks to the bottom */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
}

/* Sidebar and content alignment */
.col-lg-3,
.col-lg-9 {
  padding-left: 15px;
  padding-right: 15px;
}

/* Responsive Layout */
@media (max-width: 992px) {
  .col-md-4,
  .col-md-8 {
    padding-left: 0;
    padding-right: 0;
  }
  .col-md-4 {
    margin-bottom: 1rem;
  }
}
</style>
