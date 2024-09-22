<template>
  <div class="card h-100">
    <img class="card-img-top" :src="image" :alt="title" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
      default: "https://via.placeholder.com/200x100",
    },
    title: {
      type: String,
      required: true,
      default: "Course Title",
    },
    description: {
      type: String,
      required: true,
      default: "Course description goes here...",
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px;
}
</style>
