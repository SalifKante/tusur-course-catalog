<template>
  <div class="community-dev-courses my-4 p-4">
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
          <div
            class="course-card d-flex flex-column flex-md-row"
            @click="toggleCourseSelection(course)"
          >
            <!-- Course Image with Программирование and Star Icon on top -->
            <div class="image-container position-relative">
              <img :src="course.image" class="course-img" alt="Course Image" />

              <!-- Программирование Badge on Image -->
              <span class="programming-badge">Программирование</span>

              <!-- Star icon on Image -->
              <span class="star-icon">
                <i class="far fa-star"></i>
              </span>
            </div>

            <!-- Course Information -->
            <div class="course-info p-3">
              <h6 class="fw-bold">{{ course.title }}</h6>
              <p>{{ course.description }}</p>
              <div class="tags mb-2">
                <span
                  class="badge bg-light text-dark me-1"
                  v-for="tag in course.tags"
                  :key="tag"
                >
                  {{ tag }}
                </span>
              </div>
              <small
                >{{ course.duration }} | старт {{ course.startDate }}</small
              >
              <div class="d-flex justify-content-end mt-3">
                <button class="btn enroll-btn" style="border-radius: 20px">
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
  props: {
    selectedCourses: {
      type: Array,
      default: () => [],
    },
  },
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
  methods: {
    toggleCourseSelection(course) {
      const existingIndex = this.selectedCourses.findIndex(
        (selectedCourse) => selectedCourse === course.title
      );

      if (existingIndex === -1) {
        // Add the course
        this.$emit("update-selected-courses", {
          courses: [...this.selectedCourses, course.title],
          sectionTitle: "Курсы сообщества разработчиков", // Update section title
        });
      } else {
        // Remove the course
        const updatedCourses = [...this.selectedCourses];
        updatedCourses.splice(existingIndex, 1);
        this.$emit("update-selected-courses", {
          courses: updatedCourses,
          sectionTitle: "Курсы сообщества разработчиков", // Update section title
        });
      }
    },
  },
};
</script>

<style scoped>
.community-dev-courses {
  background-color: #f5f7eb;
  padding: 20px;
  border-radius: 10px;
}

.course-card {
  display: flex;
  flex-direction: column; /* Default for mobile view: image on top, content below */
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

@media (min-width: 768px) {
  .course-card {
    flex-direction: row; /* For larger screens: image and content side by side */
  }
}

/* Programming badge on top of image */
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

/* Star icon on top of image */
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

.image-container {
  flex: 1;
  width: 100%; /* Full width in mobile view */
}

.course-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

.course-info {
  flex: 1;
  width: 100%; /* Full width in mobile view */
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
