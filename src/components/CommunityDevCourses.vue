<template>
  <div
    class="community-dev-courses my-4 p-4"
    style="background-color: #f5f7eb; border-radius: 10px"
  >
    <h5 class="fw-bold mb-3">
      <i class="fas fa-bolt"></i> Станьте частью сообщества разработчиков
    </h5>
    <p class="text-muted">
      Проходите курсы по разработке совершенно бесплатно, лучших возьмем к себе
      в команду
    </p>

    <div id="communityCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div
          v-for="(course, index) in courses"
          :key="course.id"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <div class="d-flex">
            <img
              :src="course.image"
              class="course-img me-3"
              alt="Course Image"
              style="width: 150px; border-radius: 10px"
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
                >
                  {{ tag }}
                </span>
              </div>
              <small>
                {{ course.duration }} | старт {{ course.startDate }}
              </small>
              <div class="d-flex justify-content-end mt-3">
                <button class="btn btn-primary" style="border-radius: 20px">
                  Записаться бесплатно <i class="fas fa-arrow-right"></i>
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
        data-bs-target="#communityCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#communityCarousel"
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
  name: "CommunityDevCourses",
  data() {
    return {
      courses: [],
    };
  },
  mounted() {
    // Fetch data from JSON
    axios
      .get("/communityDevCourses.json")
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
.community-dev-courses {
  background-color: #f5f7eb;
  padding: 20px;
  border-radius: 10px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #3c388d;
}
</style>
