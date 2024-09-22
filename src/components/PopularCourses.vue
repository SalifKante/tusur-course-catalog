<template>
  <div class="popular-courses my-4">
    <h5 class="fw-bold mb-3"><i class="fas fa-bolt"></i> Популярные курсы</h5>
    <div id="courseCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div
          v-for="(course, index) in courses"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <div class="course-card d-flex">
            <img
              :src="course.image"
              class="course-img me-3"
              :alt="course.title"
            />
            <div class="course-info">
              <span class="badge bg-primary mb-2">{{ course.category }}</span>
              <h6 class="fw-bold">{{ course.title }}</h6>
              <p>{{ course.description }}</p>
              <div class="tags mb-2">
                <span
                  class="badge bg-secondary me-1"
                  v-for="tag in course.tags"
                  :key="tag"
                  >{{ tag }}</span
                >
              </div>
              <small
                >{{ course.duration }} месяцев | старт
                {{ course.startDate }}</small
              >
              <div class="d-flex justify-content-end mt-3">
                <button class="btn btn-primary" style="border-radius: 20px">
                  Записаться <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Carousel Controls -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#courseCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#courseCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PopularCourses",
  data() {
    return {
      courses: [],
    };
  },
  mounted() {
    // Fetch the courses from popularcourses.json
    axios
      .get("/popularcourses.json")
      .then((response) => {
        this.courses = response.data;
      })
      .catch((error) => {
        console.error("Error fetching popular courses:", error);
      });
  },
};
</script>

<style scoped>
.popular-courses {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
}
.course-card {
  display: flex;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.course-img {
  width: 150px;
  border-radius: 10px;
  object-fit: cover;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #3c388d;
}
</style>
