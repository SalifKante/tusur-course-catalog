<template>
  <div id="app">
    <!-- Primary AppNavbar Component -->
    <AppNavbar />

    <!-- Secondary AppNavbar Component -->
    <SecondNavbar />

    <div class="container my-4">
      <div class="row">
        <!-- Sidebar on the left -->
        <div class="col-md-3 px-0">
          <Sidebar />
        </div>

        <!-- Popular Courses and Catalog Content on the right -->
        <div class="col-md-9 px-0">
          <PopularCourses />
          <Catalog />
        </div>
      </div>
    </div>

    <!-- AppFooter Component -->
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from "./components/Navbar/AppNavbar.vue";
import AppFooter from "./components/Footer/AppFooter.vue";
import Catalog from "./components/CourseCatalog.vue";
import SecondNavbar from "./components/Navbar/SecondNavbar.vue";
import PopularCourses from "./components/PopularCourses.vue";
import Sidebar from "./components/CourseFilters.vue"; // Assuming your sidebar component is named Sidebar

export default {
  components: {
    AppNavbar,
    AppFooter,
    Catalog,
    SecondNavbar,
    PopularCourses,
    Sidebar, // Include the Sidebar component here
  },
};
</script>

<style>
/* Global styles if necessary */
</style>
