<template>
  <button
    v-show="isVisible"
    @click="scrollToTop"
    class="btn btn-primary scroll-to-top"
  >
    <i class="fas fa-arrow-up"></i>
    <!-- FontAwesome arrow-up icon -->
  </button>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    checkScroll() {
      this.isVisible = window.scrollY > 300;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.checkScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.checkScroll);
  },
};
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #3c388d;
  border-radius: 50%;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 1000;
}

@media (max-width: 576px) {
  .scroll-to-top {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
}
</style>
