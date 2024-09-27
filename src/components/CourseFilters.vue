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
        <div class="input-wrapper my-2">
          <input
            type="text"
            class="form-control"
            placeholder="Поиск"
            v-model="searchDirection"
          />
          <!-- Clear Button (X) inside the input -->
          <button
            v-if="searchDirection"
            class="clear-button"
            @click="clearSearch('direction')"
          >
            &times;
          </button>
        </div>
        <!-- Display message if no results found -->
        <div v-if="filteredDirections.length === 0" class="text-danger">
          Ничего не нашлось
        </div>
        <div
          v-else
          v-for="(item, index) in filteredDirections"
          :key="index"
          class="form-check"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :id="'direction-' + index"
            v-model="selectedDirection"
            :value="item.name"
            @change="handleCheckboxChange"
          />
          <label class="form-check-label" :for="'direction-' + index">
            {{ item.name }}
          </label>
          <span class="float-end">{{ item.count }}</span>
        </div>
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
      <div class="collapse show" id="forWhomCollapse">
        <div class="input-wrapper my-2">
          <input
            type="text"
            class="form-control"
            placeholder="Поиск"
            v-model="searchForWhom"
          />
          <!-- Clear Button (X) inside the input -->
          <button
            v-if="searchForWhom"
            class="clear-button"
            @click="clearSearch('forWhom')"
          >
            &times;
          </button>
        </div>
        <!-- Display message if no results found -->
        <div v-if="filteredForWhom.length === 0" class="text-danger">
          Ничего не нашлось
        </div>
        <div
          v-else
          v-for="(item, index) in filteredForWhom"
          :key="index"
          class="form-check"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :id="'whom-' + index"
            v-model="selectedForWhom"
            :value="item.name"
            @change="handleCheckboxChange"
          />
          <label class="form-check-label" :for="'whom-' + index">
            {{ item.name }}
          </label>
          <span class="float-end">{{ item.count }}</span>
        </div>
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
      <div class="collapse show" id="priceCollapse">
        <div class="input-wrapper my-2">
          <input
            type="text"
            class="form-control"
            placeholder="Поиск"
            v-model="searchPrice"
          />
          <!-- Clear Button (X) inside the input -->
          <button
            v-if="searchPrice"
            class="clear-button"
            @click="clearSearch('price')"
          >
            &times;
          </button>
        </div>
        <!-- Display message if no results found -->
        <div v-if="filteredPrice.length === 0" class="text-danger">
          Ничего не нашлось
        </div>
        <div
          v-else
          v-for="(item, index) in filteredPrice"
          :key="index"
          class="form-check"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :id="'price-' + index"
            v-model="selectedPrice"
            :value="item.name"
            @change="handleCheckboxChange"
          />
          <label class="form-check-label" :for="'price-' + index">
            {{ item.name }}
          </label>
          <span class="float-end">{{ item.count }}</span>
        </div>
      </div>
    </div>

    <!-- Документ после прохождения Section -->
    <div class="mb-3">
      <button
        class="btn btn-link text-decoration-none w-100 text-start"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#documentCollapse"
        aria-expanded="false"
        aria-controls="documentCollapse"
      >
        Документ после прохождения
        <i class="fas fa-chevron-down float-end"></i>
      </button>
      <div class="collapse show" id="documentCollapse">
        <div class="input-wrapper my-2">
          <input
            type="text"
            class="form-control"
            placeholder="Поиск"
            v-model="searchDocument"
          />
          <!-- Clear Button (X) inside the input -->
          <button
            v-if="searchDocument"
            class="clear-button"
            @click="clearSearch('document')"
          >
            &times;
          </button>
        </div>
        <!-- Display message if no results found -->
        <div v-if="filteredDocument.length === 0" class="text-danger">
          Ничего не нашлось
        </div>
        <div
          v-else
          v-for="(item, index) in filteredDocument"
          :key="index"
          class="form-check"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :id="'document-' + index"
            v-model="selectedDocument"
            :value="item.name"
            @change="handleCheckboxChange"
          />
          <label class="form-check-label" :for="'document-' + index">
            {{ item.name }}
          </label>
          <span class="float-end">{{ item.count }}</span>
        </div>
      </div>
    </div>

    <!-- Навыки Section -->
    <div class="mb-3">
      <button
        class="btn btn-link text-decoration-none w-100 text-start"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#skillsCollapse"
        aria-expanded="false"
        aria-controls="skillsCollapse"
      >
        Навыки
        <i class="fas fa-chevron-down float-end"></i>
      </button>
      <div class="collapse show" id="skillsCollapse">
        <div class="input-wrapper my-2">
          <input
            type="text"
            class="form-control"
            placeholder="Поиск"
            v-model="searchSkills"
          />
          <!-- Clear Button (X) inside the input -->
          <button
            v-if="searchSkills"
            class="clear-button"
            @click="clearSearch('skills')"
          >
            &times;
          </button>
        </div>
        <!-- Display message if no results found -->
        <div v-if="filteredSkills.length === 0" class="text-danger">
          Ничего не нашлось
        </div>
        <div
          v-else
          v-for="(item, index) in filteredSkills"
          :key="index"
          class="form-check"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :id="'skills-' + index"
            v-model="selectedSkills"
            :value="item.name"
            @change="handleCheckboxChange"
          />
          <label class="form-check-label" :for="'skills-' + index">
            {{ item.name }}
          </label>
          <span class="float-end">{{ item.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    directions: Array,
    forWhom: Array,
    price: Array,
    document: Array,
    skills: Array,
  },
  data() {
    return {
      searchDirection: "",
      searchForWhom: "",
      searchPrice: "",
      searchDocument: "",
      searchSkills: "",
      selectedDirection: [],
      selectedForWhom: [],
      selectedPrice: [],
      selectedDocument: [],
      selectedSkills: [],
    };
  },
  computed: {
    filteredDirections() {
      return this.directions
        ? this.directions.filter((item) =>
            item.name.toLowerCase().includes(this.searchDirection.toLowerCase())
          )
        : [];
    },
    filteredForWhom() {
      return this.forWhom
        ? this.forWhom.filter((item) =>
            item.name.toLowerCase().includes(this.searchForWhom.toLowerCase())
          )
        : [];
    },
    filteredPrice() {
      return this.price
        ? this.price.filter((item) =>
            item.name.toLowerCase().includes(this.searchPrice.toLowerCase())
          )
        : [];
    },
    filteredDocument() {
      return this.document
        ? this.document.filter((item) =>
            item.name.toLowerCase().includes(this.searchDocument.toLowerCase())
          )
        : [];
    },
    filteredSkills() {
      return this.skills
        ? this.skills.filter((item) =>
            item.name.toLowerCase().includes(this.searchSkills.toLowerCase())
          )
        : [];
    },
  },
  methods: {
    handleCheckboxChange() {
      this.$emit("update-selected-courses", {
        courses: this.getAllSelectedValues(),
        sectionTitle: this.getSectionTitle(),
      });
    },
    getAllSelectedValues() {
      return [
        ...this.selectedDirection,
        ...this.selectedForWhom,
        ...this.selectedPrice,
        ...this.selectedDocument,
        ...this.selectedSkills,
      ];
    },
    getSectionTitle() {
      if (this.selectedDirection.length > 0) return "Направление";
      if (this.selectedForWhom.length > 0) return "Для кого";
      if (this.selectedPrice.length > 0) return "Стоимость";
      if (this.selectedDocument.length > 0) return "Документ после прохождения";
      if (this.selectedSkills.length > 0) return "Навыки";
      return "Выбранные курсы";
    },
    clearSearch(section) {
      switch (section) {
        case "direction":
          this.searchDirection = "";
          break;
        case "forWhom":
          this.searchForWhom = "";
          break;
        case "price":
          this.searchPrice = "";
          break;
        case "document":
          this.searchDocument = "";
          break;
        case "skills":
          this.searchSkills = "";
          break;
      }
    },
  },
};
</script>

<style scoped>
.sidebar {
  background-color: #f8f9fa;
  border-right: 1px solid #dee2e6;
  position: sticky;
  top: 160px;
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
    position: static;
    max-width: 100%;
    height: auto;
    overflow-y: visible;
    margin-top: 1rem;
  }
}

button.btn-link {
  color: #3c388d;
}

button.btn-link:hover {
  text-decoration: underline;
}

.input-wrapper {
  position: relative;
}

.clear-button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 18px;
  color: #888;
  cursor: pointer;
  outline: none;
}

.clear-button:hover {
  color: #333;
}
</style>
