<template>
  <div id="app">
    <!--Primary AppNavbar Component -->
    <AppNavbar />

    <!--Primary AppNavbar Component -->
    <SecondNavbar />

    <!-- Main content -->
    <Catalog />

    <!-- AppFooter Component -->
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from "./components/Navbar/AppNavbar.vue";
import AppFooter from "./components/Footer/AppFooter.vue";
import Catalog from "./components/CourseCatalog.vue";
import SecondNavbar from "./components/Navbar/SecondNavbar.vue";

export default {
  components: {
    AppNavbar,
    AppFooter,
    Catalog,
    SecondNavbar,
  },
};
</script>

<style>
/* Global styles if necessary */
</style>
