<template>
  <div class="container my-4">
    <div class="row">
      <!-- Filters Section -->
      <div class="col-md-3">
        <CourseFilters @search="onSearch" @filter="onFilterChange" />
      </div>

      <!-- Course Grid Section -->
      <div class="col-md-9">
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
import CourseFilters from "./CourseFilters.vue";
import CourseCard from "./CourseCard.vue";
import axios from "axios";

export default {
  name: "CourseCatalog",
  components: {
    CourseFilters,
    CourseCard,
  },
  data() {
    return {
      courses: [],
      searchQuery: "",
      selectedCategory: "",
    };
  },
  computed: {
    filteredCourses() {
      return this.courses.filter((course) => {
        // Filter by search query and category
        const matchesSearch = course.title
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
        const matchesCategory =
          !this.selectedCategory || course.category === this.selectedCategory;
        return matchesSearch && matchesCategory;
      });
    },
  },
  methods: {
    onSearch(query) {
      this.searchQuery = query;
    },
    onFilterChange(category) {
      this.selectedCategory = category;
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
