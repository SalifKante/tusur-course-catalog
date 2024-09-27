<template>
  <div class="main-content">
    <!-- Popular Courses -->
    <PopularCourses @update-selected-courses="updateSelectedCourses" />

    <!-- Course Names -->
    <CourseNames @update-selected-courses="updateSelectedCourses" />

    <!-- Recommended Courses -->
    <RecommendedCourses @update-selected-courses="updateSelectedCourses" />

    <!-- Community Development Courses -->
    <CommunityDevCourses @update-selected-courses="updateSelectedCourses" />

    <!-- Already Seen Courses -->
    <AlreadySeenCourses @update-selected-courses="updateSelectedCourses" />
  </div>
</template>

<script>
import PopularCourses from "./PopularCourses.vue";
import CourseNames from "./CourseNames.vue";
import RecommendedCourses from "./RecommendedCourses.vue";
import CommunityDevCourses from "./CommunityDevCourses.vue";
import AlreadySeenCourses from "./AlreadySeenCourses.vue";

export default {
  components: {
    PopularCourses,
    CourseNames,
    RecommendedCourses,
    CommunityDevCourses,
    AlreadySeenCourses,
  },
  props: {
    selectedCourses: {
      type: Array,
      default: () => [], // Default empty array
    },
    currentSectionTitle: {
      type: String,
      default: "", // Default empty string
    },
  },
  methods: {
    updateSelectedCourses({ courses, sectionTitle }) {
      this.$emit("update-selected-courses", { courses, sectionTitle });
    },
  },
};
</script>

<style scoped>
.main-content {
  margin-top: 20px;
}
</style>
