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
        class="col-lg-4 col-md-6 col-sm-12 mb-4"
      >
        <div class="card h-100">
          <!-- Программирование Badge at the top-left of each card -->
          <span class="programming-badge">Программирование</span>

          <!-- Star icon at the top-right of each card -->
          <span class="star-icon">
            <i class="far fa-star"></i>
          </span>

          <img :src="course.image" class="card-img-top" :alt="course.title" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ course.title }}</h5>
            <p class="card-text">{{ course.description }}</p>

            <!-- Tags Section -->
            <div class="tags mb-2">
              <span
                v-for="(tag, tagIndex) in course.tags"
                :key="tagIndex"
                class="badge bg-light text-dark me-1"
              >
                {{ tag }}
              </span>
            </div>
            <!-- Price/Enroll Button -->
            <div class="price-section">
              <button
                v-if="course.priceText !== 'Записаться бесплатно'"
                class="btn btn-primary w-100"
              >
                {{ course.priceText }} →
              </button>
              <button v-else class="btn btn-outline-primary w-100">
                {{ course.priceText }} →
              </button>
            </div>
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
      courses: [], // Placeholder for the course data
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
  border-radius: 8px;
  transition: box-shadow 0.2s ease;
  cursor: pointer;
  position: relative;
}

.card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Programming badge at the top-left */
.programming-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: white;
  color: rgb(75, 72, 72);
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid gray;
  font-size: 0.9rem;
  font-weight: bold;
}

/* Star icon at the top-right */
.star-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  border-radius: 50%;
  padding: 8px;
  color: rgb(75, 72, 72);
  border: 1px solid gray;
}

.star-icon i {
  font-size: 1.2rem;
}

img.card-img-top {
  border-radius: 15px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
}

.price-section {
  margin-top: 15px;
}

.selected {
  border: 2px solid #3c388d;
  background-color: rgba(60, 56, 141, 0.1);
}

.card-title {
  font-weight: bold;
}

.btn-primary {
  background-color: #3c388d;
  border-color: #3c388d;
}

.btn-outline-primary {
  color: #3c388d;
  border-color: #3c388d;
}
</style>
