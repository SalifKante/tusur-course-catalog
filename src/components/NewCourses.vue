<template>
  <div class="new-courses my-4">
    <!-- Section Title -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div>
        <h5 class="fw-bold mb-1">
          <i class="fas fa-hand-peace"></i> Познакомьтесь с новинками
        </h5>
        <p class="text-muted">
          Откройте дверь в новые знания с нашими свежими курсами!
        </p>
      </div>
      <a href="#" class="text-primary fw-bold">Смотреть все</a>
    </div>

    <!-- Course Cards -->
    <div class="row">
      <div
        v-for="(course, index) in courses"
        :key="index"
        class="col-lg-4 col-md-6 mb-4"
      >
        <div class="card h-100">
          <img :src="course.image" class="card-img-top" :alt="course.title" />
          <div class="card-body">
            <span class="badge bg-primary mb-2">{{ course.category }}</span>
            <h6 class="fw-bold">{{ course.title }}</h6>
            <p class="text-muted">{{ course.description }}</p>
            <div class="tags mb-2">
              <span
                class="badge bg-secondary me-1"
                v-for="tag in course.tags"
                :key="tag"
                >{{ tag }}</span
              >
            </div>
            <small
              >{{ course.duration }} месяцев | {{ course.priceText }}</small
            >
          </div>
          <div class="card-footer text-end">
            <button
              class="btn btn-outline-primary"
              :style="{ borderRadius: '20px' }"
            >
              {{ course.buttonText }} <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NewCourses",
  data() {
    return {
      courses: [],
    };
  },
  mounted() {
    axios
      .get("/newcourses.json") // Fetch from the JSON file in the public folder
      .then((response) => {
        this.courses = response.data;
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  },
};
</script>

<style scoped>
.new-courses {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
}

.card {
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.card-footer {
  background-color: transparent;
}

.tags .badge {
  background-color: #dee2e6;
  color: #3c388d;
}
</style>
