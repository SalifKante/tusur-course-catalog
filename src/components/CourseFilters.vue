<template>
  <div class="mb-4">
    <div class="form-group">
      <input
        type="text"
        class="form-control mb-3"
        placeholder="Search..."
        v-model="searchQuery"
        @input="onSearch"
      />
    </div>

    <div class="form-group">
      <select
        class="form-select"
        v-model="selectedCategory"
        @change="onFilterChange"
      >
        <option value="">All Categories</option>
        <option
          v-for="category in categories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
      default: () => ["Category 1", "Category 2"],
    },
  },
  data() {
    return {
      searchQuery: "",
      selectedCategory: "",
    };
  },
  methods: {
    onSearch() {
      this.$emit("search", this.searchQuery);
    },
    onFilterChange() {
      this.$emit("filter", this.selectedCategory);
    },
  },
};
</script>

<style scoped>
/* Adjust form styles if needed */
</style>
