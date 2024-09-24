<template>
  <div class="recommended-courses my-4">
    <h5 class="fw-bold mb-3">
      <i class="fas fa-star"></i> Рекомендованные вам курсы
    </h5>
    <p class="text-muted">
      Помогут расширить компетенции и стать более востребованным специалистом на
      рынке труда
    </p>
    <div class="row">
      <!-- Loop through the recommended courses -->
      <div
        class="col-lg-4 col-md-6 mb-4"
        v-for="(course, index) in courses"
        :key="index"
      >
        <div class="course-card p-3 bg-white rounded-3 shadow-sm">
          <img
            :src="course.image"
            alt="Course Image"
            class="img-fluid rounded mb-3"
            style="height: 180px; object-fit: cover"
          />
          <span class="badge bg-primary mb-2">{{ course.category }}</span>
          <h6 class="fw-bold">{{ course.title }}</h6>
          <p class="text-muted">{{ course.description }}</p>
          <div class="tags mb-3">
            <span
              class="badge bg-secondary me-1"
              v-for="tag in course.tags"
              :key="tag"
              >{{ tag }}</span
            >
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <span class="text-primary fw-bold">{{ course.priceText }}</span>
            <button class="btn btn-primary" style="border-radius: 20px">
              {{ course.buttonText }} <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="text-end">
      <a href="#" class="text-primary"
        >Смотреть все <i class="fas fa-arrow-right"></i
      ></a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RecommendedCourses",
  data() {
    return {
      courses: [], // Courses data from JSON file
    };
  },
  mounted() {
    // Fetch the recommended courses data from the JSON file
    axios
      .get("/recommendedcourses.json")
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
.recommended-courses {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
}
.course-card {
  transition: transform 0.2s ease-in-out;
}
.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}
.badge.bg-primary {
  background-color: #3c388d;
}
.badge.bg-secondary {
  background-color: #6c757d;
}
</style>
