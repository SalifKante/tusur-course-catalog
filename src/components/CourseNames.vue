<template>
  <div class="course-names my-4">
    <h5 class="fw-bold mb-3">Эти курсы ищут чаще всего</h5>
    <div class="d-flex flex-wrap gap-2">
      <span
        v-for="(course, index) in courseNames"
        :key="index"
        class="badge rounded-pill border border-primary text-primary px-3 py-2"
        style="cursor: pointer"
      >
        {{ course }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseNames",
  data() {
    return {
      courseNames: [
        "Курсы по разработке",
        "Go",
        "Английский язык",
        "HTML и CSS",
        "Математика",
        "JavaScript",
        "ООП",
        "Базы данных",
        "Проектный менеджмент",
        "AI",
        "Графический дизайн",
        "Аналитика",
      ],
    };
  },
};
</script>

<style scoped>
.course-names {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
}

.badge {
  transition: background-color 0.2s ease, color 0.2s ease;
}

.badge:hover {
  background-color: #3c388d;
  color: white;
}
</style>
