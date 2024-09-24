<template>
  <div class="already-seen-courses my-4">
    <h5 class="fw-bold mb-3"><i class="fas fa-eye"></i> Вы смотрели ранее</h5>
    <div class="row">
      <div
        v-for="(course, index) in courses"
        :key="index"
        class="col-lg-4 col-md-6 mb-4"
      >
        <div class="card h-100">
          <img :src="course.image" class="card-img-top" :alt="course.title" />
          <div class="card-body">
            <span class="badge bg-primary mb-2">{{ course.category }}</span>
            <h6 class="fw-bold">{{ course.title }}</h6>
            <p class="card-text">{{ course.description }}</p>
            <div class="tags mb-2">
              <span
                class="badge bg-secondary me-1"
                v-for="tag in course.tags"
                :key="tag"
                >{{ tag }}</span
              >
            </div>
            <small class="text-muted">{{ course.duration }} месяцев</small>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary w-100" style="border-radius: 20px">
              {{ course.buttonText }} <i class="fas fa-arrow-right"></i>
            </button>
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
};
</script>

<style scoped>
.already-seen-courses {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
}
.card {
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.card-footer {
  background-color: white;
  border-top: none;
}
.badge {
  background-color: #3c388d;
}
</style>
