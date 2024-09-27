<template>
  <div class="checked-courses my-4">
    <!-- Section title, fallback to default if not provided -->
    <h5 class="fw-bold mb-3">
      {{ sectionTitle || "Выбранные курсы" }}
    </h5>

    <!-- Display message when no courses are selected -->
    <div
      v-if="!selectedCourses || selectedCourses.length === 0"
      class="text-muted"
    >
      Курсы не выбраны.
    </div>

    <!-- Display the selected courses as clickable badges -->
    <div v-else class="d-flex flex-wrap gap-2">
      <span
        v-for="(course, index) in selectedCourses"
        :key="index"
        class="badge rounded-pill border border-primary px-3 py-2"
        role="button"
        aria-label="Selected Course"
        @click="onCourseClick(course)"
      >
        {{ course }}
        <!-- Remove course icon -->
        <i
          class="fas fa-times ms-1 remove-icon"
          @click.stop="removeCourse(index)"
        ></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckedCourses",
  props: {
    selectedCourses: {
      type: Array,
      required: true,
      default: () => [], // Ensure it defaults to an empty array
    },
    sectionTitle: {
      type: String,
      required: false,
      default: "Выбранные курсы", // Default title if not provided
    },
  },
  methods: {
    onCourseClick(course) {
      // Add logic if you want the badge to be interactive
      console.log("Clicked course:", course);
      // You can also add more functionality here, like redirecting to course details
    },
    removeCourse(index) {
      // Emit an event to remove the course by its index
      this.$emit("remove-course", index);
    },
  },
};
</script>

<style scoped>
.checked-courses {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

/* Badge styling */
.badge {
  transition: background-color 0.2s ease, color 0.2s ease;
  color: #3c388d !important; /* Primary color for text */
  display: inline-flex;
  align-items: center;
}

.badge:hover {
  background-color: #3c388d; /* Primary color */
  color: white !important; /* Text turns white on hover */
  cursor: pointer; /* Show pointer cursor */
}

/* Red "X" icon to remove the course */
.badge i.remove-icon {
  margin-left: 8px;
  color: #dc3545; /* Red color for remove icon */
}

.badge i.remove-icon:hover {
  color: white; /* Hover effect on remove icon */
}
</style>
