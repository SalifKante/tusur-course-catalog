<template>
  <footer class="bg-primary text-white py-4">
    <div class="container d-flex justify-content-between">
      <!-- Left Section -->
      <div>
        <a href="#" class="text-white text-decoration-none me-4">Вакансии</a>
        <a href="#" class="text-white text-decoration-none"
          >Техническая поддержка</a
        >
        <p class="mt-3 mb-0">© 2024</p>
      </div>

      <!-- Right Section -->
      <div class="social-media-icons">
        <span class="me-2">Мы в социальных сетях</span>
        <a href="#" class="text-white me-3"><i class="fab fa-youtube"></i></a>
        <a href="#" class="text-white me-3"><i class="fab fa-telegram"></i></a>
        <a href="#" class="text-white"><i class="fas fa-globe"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
footer {
  background-color: #3c388d !important; /* Matches the background color from the image */
}
a.text-white {
  font-size: 16px;
}
.social-media-icons i {
  font-size: 20px;
}
</style>
