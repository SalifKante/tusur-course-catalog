<template>
  <div class="popular-courses mt-popular my-4">
    <h5 class="fw-bold mb-3"><i class="fas fa-bolt"></i> Популярные курсы</h5>
    <div id="courseCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div
          v-for="(course, index) in courses"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <div
            class="course-card d-flex align-items-center flex-column flex-md-row"
          >
            <!-- Image section with badge and star icon -->
            <div class="image-container position-relative">
              <!-- Программирование Badge at the top-left -->
              <span class="programming-badge">Программирование</span>

              <!-- Star icon at the top-right -->
              <span class="star-icon">
                <i class="far fa-star"></i>
              </span>

              <!-- Course Image -->
              <img :src="course.image" class="course-img" :alt="course.title" />
            </div>

            <!-- Course Information Section -->
            <div class="course-info p-3">
              <h6 class="fw-bold">{{ course.title }}</h6>
              <p>{{ course.description }}</p>
              <div class="tags mb-2">
                <span
                  class="badge bg-light text-dark me-1"
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
                <button
                  class="btn enroll-btn"
                  style="border-radius: 20px"
                  @click="selectCourse(course)"
                >
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
  methods: {
    selectCourse(course) {
      // Emit selected course to parent for global handling
      this.$emit("update-selected-courses", {
        courses: [course.title], // Update with the course title
        sectionTitle: "Популярные курсы", // Set the section title as Popular Courses
      });
    },
  },
};
</script>

<style scoped>
.popular-courses {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
}

/* Space between PopularCourses and navbar */
.mt-popular {
  margin-top: 30px; /* Adjust this value as needed */
}

.course-card {
  display: flex;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;
  flex-direction: column; /* Mobile view: image on top, content below */
}

@media (min-width: 768px) {
  .course-card {
    flex-direction: row; /* On larger screens: image and content side by side */
  }
}

/* Ensures image and course info are equal height */
.image-container {
  flex: 1;
  width: 100%;
}

.course-info {
  flex: 1;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.course-img {
  width: 100%;
  height: auto; /* Ensure image scales correctly */
  object-fit: cover;
  border-radius: 10px;
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

/* Arrow controls style */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #3c388d;
}

/* Custom button styles specifically for the "Записаться" button */
.enroll-btn {
  background-color: #3c388d; /* Default background color */
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  transition: background-color 0.3s ease-in-out;
}

.enroll-btn:hover {
  background-color: #0d6efd; /* Bootstrap primary color on hover */
  color: #fff;
}

/* Ensure that the carousel control buttons retain their default styling */
.carousel-control-prev,
.carousel-control-next {
  background-color: transparent; /* Make sure they stay transparent */
  border: none;
}
</style>
