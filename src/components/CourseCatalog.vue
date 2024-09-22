<template>
  <div class="container my-4">
    <div class="row">
      <!-- Course Grid Section -->
      <div class="col-12">
        <div class="row">
          <!-- Render course cards using Bootstrap's grid system -->
          <div
            class="col-lg-4 col-md-6 mb-4"
            v-for="course in filteredCourses"
            :key="course.id"
          >
            <CourseCard
              :title="course.title"
              :description="course.description"
              :image="course.image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from "./CourseCard.vue";
import axios from "axios";

export default {
  name: "CourseCatalog",
  components: {
    CourseCard,
  },
  data() {
    return {
      courses: [],
      searchQuery: "", // If you want to keep search functionality
      selectedCategory: "", // If you want to keep category filter
    };
  },
  computed: {
    filteredCourses() {
      // This will return all courses since filters are not used right now
      return this.courses;
    },
  },
  mounted() {
    // Fetch course data from the JSON file
    axios
      .get("/courses.json")
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
/* No custom styles needed for now, leveraging Bootstrap */
</style>
