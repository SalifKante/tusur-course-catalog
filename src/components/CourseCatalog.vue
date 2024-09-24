<template>
  <div class="container my-4">
    <div class="row">
      <!-- New Courses Section -->
      <div class="col-12 mb-4">
        <NewCourses />
      </div>

      <!-- Course Names Section -->
      <div class="col-12">
        <div class="row">
          <!-- Render course names using Bootstrap's grid system -->
          <div class="col-12 mb-4">
            <CourseNames />
          </div>
        </div>
      </div>

      <!-- Recommended Courses Section -->
      <div class="col-12 mb-4">
        <RecommendedCourses />
      </div>
      <div class="col-12 mb-4">
        <CommunityDevCourses />
      </div>
      <div class="col-12 mb-4">
        <AlreadySeenCourses />
      </div>
    </div>
  </div>
</template>

<script>
import NewCourses from "./NewCourses.vue";
import CourseNames from "./CourseNames.vue";
import RecommendedCourses from "./RecommendedCourses.vue";
import CommunityDevCourses from "./CommunityDevCourses.vue";
import AlreadySeenCourses from "./AlreadySeenCourses.vue";

export default {
  name: "CourseCatalog",
  components: {
    NewCourses,
    CourseNames,
    RecommendedCourses,
    CommunityDevCourses,
    AlreadySeenCourses,
  },
};
</script>

<style scoped>
/* No custom styles needed for now, leveraging Bootstrap */
</style>
