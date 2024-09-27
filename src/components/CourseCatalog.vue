<template>
  <div class="course-catalog container my-4">
    <!-- Filtered Course Names Section (above the course list) -->
    <div class="d-flex flex-wrap gap-2 mb-3" v-if="activeFilters.length > 0">
      <span
        v-for="(filter, index) in activeFilters"
        :key="index"
        class="badge rounded-pill bg-secondary text-white px-3 py-2"
      >
        {{ filter }}
        <i class="fas fa-times ms-1" @click="removeFilter(index)"></i>
      </span>
    </div>

    <!-- Courses Section with Pagination -->
    <div class="row">
      <div
        v-for="(course, index) in paginatedCourses"
        :key="index"
        class="col-lg-4 col-md-6 col-sm-12 mb-4"
      >
        <div
          class="card h-100"
          @click="toggleCourseSelection(course)"
          :class="{ selected: isSelected(course.title) }"
        >
          <!-- Программирование Badge at the top-left of each card -->
          <span class="programming-badge">Программирование</span>

          <!-- Star icon at the top-right of each card -->
          <span class="star-icon">
            <i class="far fa-star"></i>
          </span>

          <img
            :src="course.image"
            class="card-img-top rounded-img"
            :alt="course.title"
          />
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

            <!-- Price Section -->
            <div class="price-section">
              <button
                v-if="course.price !== 'Записаться бесплатно'"
                class="btn btn-primary w-100"
              >
                {{ course.price }} →
              </button>
              <button v-else class="btn btn-outline-primary w-100">
                {{ course.price }} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Show More Button -->
    <div class="text-center mb-4">
      <button
        class="btn btn-outline-primary"
        @click="showMore"
        v-if="currentPage < totalPages"
      >
        Показать ещё
      </button>
    </div>

    <!-- Pagination -->
    <nav v-if="totalPages > 1" class="d-flex justify-content-center">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="changePage(currentPage - 1)">
            &laquo;
          </button>
        </li>
        <li
          v-for="page in totalPages"
          :key="page"
          class="page-item"
          :class="{ active: currentPage === page }"
        >
          <button class="page-link" @click="changePage(page)">
            {{ page }}
          </button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="changePage(currentPage + 1)">
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    selectedCourses: {
      type: Array,
      required: false,
      default: () => [],
    },
    sectionTitle: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      courses: [], // Course data
      itemsPerPage: 9, // Number of courses per page
      currentPage: 1, // Current pagination page
      activeFilters: [], // Filters applied to the course list
    };
  },
  computed: {
    filteredCourses() {
      if (!this.activeFilters.length) {
        return this.courses;
      }
      // Apply filters based on active tags and selected checkboxes
      return this.courses.filter((course) => {
        return this.activeFilters.some(
          (filter) =>
            course.title.includes(filter) || course.tags.includes(filter)
        );
      });
    },
    paginatedCourses() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredCourses.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredCourses.length / this.itemsPerPage);
    },
  },
  methods: {
    loadCourses() {
      console.log("Loading courses...");
      fetch("/coursecatalog.json")
        .then((response) => response.json())
        .then((data) => {
          this.courses = data;
          console.log("Loaded courses:", this.courses);
        })
        .catch((error) => console.error("Error loading courses:", error));
    },
    showMore() {
      this.currentPage++;
    },
    changePage(page) {
      this.currentPage = page;
    },
    removeFilter(index) {
      this.activeFilters.splice(index, 1);
      this.$emit("update-filters", this.activeFilters);
    },
    toggleCourseSelection(course) {
      if (!course || !course.title) {
        console.error("Invalid course object:", course);
        return;
      }

      const existingIndex = this.selectedCourses.findIndex(
        (selectedCourse) => selectedCourse === course.title
      );

      if (existingIndex === -1) {
        // Add the course
        this.$emit("update-selected-courses", {
          courses: [...this.selectedCourses, course.title],
          sectionTitle: this.sectionTitle,
        });
      } else {
        // Remove the course
        const updatedCourses = [...this.selectedCourses];
        updatedCourses.splice(existingIndex, 1);
        this.$emit("update-selected-courses", {
          courses: updatedCourses,
          sectionTitle: this.sectionTitle,
        });
      }

      console.log("Updated selectedCourses:", this.selectedCourses);
    },
    isSelected(courseTitle) {
      return this.selectedCourses.includes(courseTitle);
    },
  },
  mounted() {
    this.loadCourses();
  },
};
</script>

<style scoped>
.course-catalog {
  padding-bottom: 1rem;
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

.price {
  font-weight: bold;
  color: #3c388d;
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
