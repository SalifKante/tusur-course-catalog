<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom py-2">
    <div class="container">
      <!-- Left side: Logo and System name -->
      <a class="navbar-brand d-flex align-items-center" href="#">
        <div class="d-flex flex-column align-items-center">
          <img
            :src="require('@/assets/tusur.svg')"
            alt="TUSUR Logo"
            style="height: 40px"
          />
          <span class="fw-bold" style="color: #3c388d">TUSUR UNIVERSITY</span>
        </div>
        <div class="long-bar mx-3"></div>
        <div class="d-flex flex-column">
          <small class="fw-normal" style="color: #3c388d">
            СИСТЕМА УПРАВЛЕНИЯ ОБУЧЕНИЕМ
          </small>
        </div>
      </a>

      <!-- Center part: Course links -->
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link active fw-bold d-flex align-items-center" href="#">
            <i
              class="fas fa-graduation-cap me-2"
              style="color: #3c388d; font-size: 24px"
            ></i>
            Мои курсы
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#">Каталог курсов</a>
        </li>
      </ul>

      <!-- Right side: Icons and profile -->
      <div class="d-flex align-items-center">
        <!-- Search Icon or Input -->
        <div class="nav-item d-flex align-items-center" ref="searchContainer">
          <!-- When not searching, show the icon -->
          <div
            v-if="!isSearching"
            class="nav-link text-dark me-3"
            @click="toggleSearch"
            style="cursor: pointer"
          >
            <i class="fas fa-search"></i>
          </div>

          <!-- When searching, show the input field and search icon -->
          <div v-if="isSearching" class="nav-link text-dark me-3 d-flex">
            <input
              type="text"
              class="form-control"
              v-model="searchQuery"
              placeholder="Search..."
              ref="searchInput"
              style="width: 200px; transition: width 0.3s ease; height: 40px"
            />
            <button
              class="btn btn-outline-secondary ms-1"
              @click="search"
              style="height: 40px"
            >
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>

        <!-- Bell Icon -->
        <a class="nav-link text-dark me-3 position-relative" href="#">
          <i class="fas fa-bell"></i>
          <span
            class="badge bg-primary rounded-circle position-absolute top-0 start-100 translate-middle p-1"
            style="background-color: #3c388d"
          >
            9+
          </span>
        </a>

        <!-- Message Icon -->
        <a class="nav-link text-dark me-3 position-relative" href="#">
          <i class="fas fa-envelope"></i>
          <span
            class="badge bg-primary rounded-circle position-absolute top-0 start-100 translate-middle p-1"
            style="background-color: #3c388d"
          >
            3
          </span>
        </a>

        <!-- Profile Image and Name -->
        <div class="dropdown">
          <a
            class="nav-link dropdown-toggle d-flex align-items-center bg-light rounded-pill py-2 px-3"
            href="#"
            id="profileDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style="border: 1px solid #ececec"
          >
            <img
              src="/user.jpg"
              alt="User Profile"
              class="rounded-circle"
              style="width: 40px; height: 40px"
            />
            <span class="ms-2 fw-bold text-secondary">Салиф Канте</span>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="profileDropdown"
          >
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      isSearching: false, // Control whether search is active
      searchQuery: "", // The text entered in the search field
    };
  },
  methods: {
    toggleSearch() {
      this.isSearching = true; // Activate the search state

      // Automatically focus the input field when it opens
      this.$nextTick(() => {
        const input = this.$refs.searchInput;
        if (input) {
          input.focus();
        }
      });
    },
    closeSearch() {
      this.isSearching = false; // Close search when clicked outside
    },
    search() {
      console.log("Searching for:", this.searchQuery);
    },
    handleClickOutside(event) {
      // Check if click is outside the search container
      if (
        this.$refs.searchContainer &&
        !this.$refs.searchContainer.contains(event.target)
      ) {
        this.closeSearch();
      }
    },
  },
  mounted() {
    // Listen for clicks outside the search field
    document.addEventListener("mousedown", this.handleClickOutside);
  },
  beforeUnmount() {
    // Remove the event listener when the component is destroyed
    document.removeEventListener("mousedown", this.handleClickOutside);
  },
};
</script>

<style scoped>
.long-bar {
  border-left: 2px solid #3c388d; /* Color of the vertical bar */
  height: 40px; /* Adjust the height as needed */
}

/* Adjust input and icon size */
input.form-control {
  transition: width 0.3s ease-in-out;
  width: 0;
  height: 40px; /* Adjust the height */
}

input.form-control:focus {
  width: 200px; /* Expand the input on focus */
}

button.btn-outline-secondary {
  height: 40px; /* Adjust the button height to match the input field */
}
</style>
