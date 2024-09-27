<template>
  <div class="already-seen-courses my-4">
    <h5 class="fw-bold mb-3"><i class="fas fa-eye"></i> Вы смотрели ранее</h5>
    <div class="row">
      <div
        v-for="(course, index) in courses"
        :key="index"
        class="col-lg-4 col-md-6 mb-4"
      >
        <div
          class="card h-100 position-relative"
          @click="toggleCourseSelection(course)"
        >
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
            <!-- Button Section -->
            <div class="price-section mt-3">
              <button class="btn btn-primary w-100">
                {{ course.buttonText }} →
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
  name: "AlreadySeenCourses",
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
    // Fetch course data from the JSON file
    axios
      .get("/alreadyseencourses.json")
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
          sectionTitle: "Вы смотрели ранее", // Update section title
        });
      } else {
        // Remove the course
        const updatedCourses = [...this.selectedCourses];
        updatedCourses.splice(existingIndex, 1);
        this.$emit("update-selected-courses", {
          courses: updatedCourses,
          sectionTitle: "Вы смотрели ранее", // Update section title
        });
      }
    },
  },
};
</script>

<style scoped>
.already-seen-courses {
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
