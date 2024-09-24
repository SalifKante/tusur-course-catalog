<template>
  <div class="sidebar p-3">
    <!-- Направление Section -->
    <div class="mb-3">
      <button
        class="btn btn-link text-decoration-none w-100 text-start"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#directionCollapse"
        aria-expanded="false"
        aria-controls="directionCollapse"
      >
        Направление
        <i class="fas fa-chevron-down float-end"></i>
      </button>
      <div class="collapse show" id="directionCollapse">
        <input
          type="text"
          class="form-control my-2"
          placeholder="Поиск"
          v-model="searchDirection"
        />
        <div
          v-for="(item, index) in filteredDirections"
          :key="index"
          class="form-check"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :id="'direction-' + index"
          />
          <label class="form-check-label" :for="'direction-' + index">
            {{ item.name }}
          </label>
          <span class="float-end">{{ item.count }}</span>
        </div>
        <a href="#" class="d-block mt-2 text-primary">Показать всё</a>
      </div>
    </div>

    <!-- Для кого Section -->
    <div class="mb-3">
      <button
        class="btn btn-link text-decoration-none w-100 text-start"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#forWhomCollapse"
        aria-expanded="false"
        aria-controls="forWhomCollapse"
      >
        Для кого
        <i class="fas fa-chevron-down float-end"></i>
      </button>
      <div class="collapse" id="forWhomCollapse">
        <div v-for="(item, index) in forWhom" :key="index" class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            :id="'whom-' + index"
          />
          <label class="form-check-label" :for="'whom-' + index">
            {{ item.name }}
          </label>
          <span class="float-end">{{ item.count }}</span>
        </div>
        <a href="#" class="d-block mt-2 text-primary">Показать всё</a>
      </div>
    </div>

    <!-- Стоимость Section -->
    <div class="mb-3">
      <button
        class="btn btn-link text-decoration-none w-100 text-start"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#priceCollapse"
        aria-expanded="false"
        aria-controls="priceCollapse"
      >
        Стоимость
        <i class="fas fa-chevron-down float-end"></i>
      </button>
      <div class="collapse" id="priceCollapse">
        <div v-for="(item, index) in price" :key="index" class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            :id="'price-' + index"
          />
          <label class="form-check-label" :for="'price-' + index">
            {{ item.name }}
          </label>
          <span class="float-end">{{ item.count }}</span>
        </div>
        <a href="#" class="d-block mt-2 text-primary">Показать всё</a>
      </div>
    </div>

    <!-- Additional Sections (e.g. Длительность, Документ, Навыки) -->
    <div class="mb-3" v-for="section in additionalSections" :key="section.id">
      <button
        class="btn btn-link text-decoration-none w-100 text-start"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#' + section.id"
        aria-expanded="false"
        :aria-controls="section.id"
      >
        {{ section.title }}
        <i class="fas fa-chevron-down float-end"></i>
      </button>
      <div class="collapse" :id="section.id">
        <div
          v-for="(item, index) in section.items"
          :key="index"
          class="form-check"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :id="section.id + '-' + index"
          />
          <label class="form-check-label" :for="section.id + '-' + index">
            {{ item.name }}
          </label>
          <span class="float-end">{{ item.count }}</span>
        </div>
        <a href="#" class="d-block mt-2 text-primary">Показать всё</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchDirection: "",
      directions: [
        { name: "Разработка", count: 224 },
        { name: "Физика", count: 573 },
        { name: "Моделирование", count: 131 },
        { name: "Машинное обучение", count: 104 },
        { name: "Теория вероятности", count: 252 },
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
      additionalSections: [
        {
          id: "durationCollapse",
          title: "Длительность",
          items: [
            { name: "До 1 месяца", count: 867 },
            { name: "1–3 месяца", count: 518 },
            { name: "3–6 месяцев", count: 984 },
            { name: "Более 6 месяцев", count: 109 },
          ],
        },
        {
          id: "documentCollapse",
          title: "Документ после прохождения",
          items: [
            { name: "Сертификат", count: 712 },
            { name: "Диплом о переподготовке", count: 882 },
          ],
        },
        {
          id: "skillsCollapse",
          title: "Навыки",
          items: [
            { name: "Основы теории вероятности", count: 683 },
            { name: "Машинное обучение", count: 425 },
            { name: "Основы моделирования", count: 605 },
            { name: "Аналитическое мышление", count: 337 },
            { name: "Знание алгоритмов", count: 801 },
          ],
        },
      ],
    };
  },
  computed: {
    filteredDirections() {
      return this.directions.filter((item) =>
        item.name.toLowerCase().includes(this.searchDirection.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.sidebar {
  background-color: #f8f9fa;
  border-right: 1px solid #dee2e6;
  position: sticky;
  top: 160px; /* Increased space below the navbar */
  width: 100%;
  max-width: 280px;
  overflow-y: auto;
  padding-bottom: 1rem;
}

@media (max-width: 1300px) {
  .sidebar {
    width: 100%;
    position: relative;
    margin-top: 1rem;
    max-width: 300px;
  }
}

@media (max-width: 992px) {
  .sidebar {
    position: static; /* On smaller screens, make the sidebar static */
    max-width: 100%; /* Full width on smaller screens */
    height: auto; /* Allow auto height for responsiveness */
    overflow-y: visible; /* Avoid scrolling on small screens */
    margin-top: 1rem; /* Add space on top */
  }
}

button.btn-link {
  color: #3c388d;
}

button.btn-link:hover {
  text-decoration: underline;
}
</style>
