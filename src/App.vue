<template>
  <div id="app">
    <!-- Primary AppNavbar Component -->
    <AppNavbar />

    <!-- Main Content -->
    <div class="container mt-navbar content-container">
      <div class="row">
        <!-- Current Section Title (Display above sidebar and checked courses) -->
        <div class="col-12 mb-3">
          <h4 class="section-title">{{ currentSectionTitle }}</h4>
        </div>

        <!-- Sidebar column -->
        <div class="col-lg-3 col-md-4 col-12 px-md-3 mb-4 mb-md-0 mt-component">
          <Sidebar
            :directions="directions"
            :forWhom="forWhom"
            :price="price"
            :document="document"
            :skills="skills"
            @update-selected-courses="updateSelectedCourses"
          />
        </div>

        <!-- Main content area (CheckedCourses + Main Content) -->
        <div class="col-lg-9 col-md-8 col-12 ps-md-4 mt-component">
          <!-- CheckedCourses should be above the Main Content -->
          <div v-if="selectedCourses.length > 0" class="mb-4">
            <CheckedCourses
              :selectedCourses="selectedCourses"
              :sectionTitle="sectionTitle"
              @remove-course="removeCourse"
            />
          </div>

          <!-- Main Content: This is where routed components will be displayed -->
          <router-view
            :selectedCourses="selectedCourses"
            :sectionTitle="sectionTitle"
          />
        </div>
      </div>
    </div>

    <!-- ScrollToTop Component -->
    <ScrollToTop />

    <!-- AppFooter Component -->
    <AppFooter />
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import AppNavbar from "./components/Navbar/AppNavbar.vue";
import AppFooter from "./components/Footer/AppFooter.vue";
import Sidebar from "./components/CourseFilters.vue";
import ScrollToTop from "./components/ScrollToTop.vue";
import CheckedCourses from "./components/CheckedCourses.vue";

export default {
  components: {
    AppNavbar,
    AppFooter,
    Sidebar,
    ScrollToTop,
    CheckedCourses,
  },
  setup() {
    const route = useRoute();
    const currentSectionTitle = ref("");
    const selectedCourses = ref([]);
    const sectionTitle = ref(""); // To track the selected section title

    // Watch for route changes and update the section title
    watch(
      () => route.path,
      (newPath) => {
        switch (newPath) {
          case "/":
            currentSectionTitle.value = "Главная";
            break;
          case "/catalog":
            currentSectionTitle.value = "Каталог курсов";
            break;
          case "/new-courses":
            currentSectionTitle.value = "Новые курсы";
            break;
          default:
            currentSectionTitle.value = "Курсы";
        }
      },
      { immediate: true }
    );

    // Method to update selectedCourses
    const updateSelectedCourses = ({ courses, sectionTitle: title }) => {
      selectedCourses.value = courses || [];
      sectionTitle.value = title || "Выбранные курсы"; // Default to "Выбранные курсы" if no title is provided
    };

    // Method to remove a selected course by index
    const removeCourse = (index) => {
      selectedCourses.value.splice(index, 1);
    };

    return {
      currentSectionTitle,
      selectedCourses,
      sectionTitle,
      updateSelectedCourses,
      removeCourse, // Expose the removeCourse method
    };
  },
  data() {
    return {
      directions: [
        { name: "Разработка", count: 224 },
        { name: "Физика", count: 573 },
        { name: "Моделирование", count: 131 },
        { name: "Машинное обучение", count: 104 },
        { name: "Теория вероятности", count: 252 },
        { name: "Программирование на Python", count: 50 },
      ],
      forWhom: [
        { name: "Абитуриенты", count: 321 },
        { name: "Студенты", count: 38 },
        { name: "Специалисты", count: 218 },
        { name: "Преподаватели", count: 16 },
      ],
      price: [
        { name: "Бесплатно", count: 335 },
        { name: "До 10 000 ₽", count: 121 },
        { name: "10 000–30 000 ₽", count: 614 },
        { name: "Более 30 000 ₽", count: 735 },
      ],
      document: [
        { name: "Сертификат", count: 712 },
        { name: "Диплом о переподготовке", count: 882 },
      ],
      skills: [
        { name: "Основы теории вероятности", count: 683 },
        { name: "Машинное обучение", count: 425 },
        { name: "Основы моделирования", count: 605 },
        { name: "Аналитическое мышление", count: 337 },
        { name: "Знание алгоритмов", count: 801 },
      ],
    };
  },
};
</script>

<style scoped>
/* Adjust margin based on the height of the navbar */
.mt-navbar {
  margin-top: 160px;
}

.section-title {
  margin-top: 30px;
  font-weight: bold;
}

/* Add space between navbar and sidebar & PopularCourses */
.mt-component {
  margin-top: 30px;
}

/* Ensure footer sticks to the bottom */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
}

/* Sidebar and content alignment */
.col-lg-3,
.col-lg-9 {
  padding-left: 15px;
  padding-right: 15px;
}

@media (max-width: 992px) {
  .col-md-4,
  .col-md-8 {
    padding-left: 0;
    padding-right: 0;
  }
  .col-md-4 {
    margin-bottom: 1rem;
  }
}
</style>
