<template>
  <!-- Main Navbar Section (Logo, Links, Icons) -->
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white border-bottom fixed-top"
    id="mainNavbar"
  >
    <div class="container d-flex justify-content-between align-items-center">
      <!-- Left side: Logo and System Name -->
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <div class="d-flex flex-column align-items-center">
          <img
            :src="require('@/assets/tusur.svg')"
            alt="TUSUR Logo"
            class="logo-img"
          />
          <span class="fw-bold system-name" style="color: #3c388d"
            >TUSUR UNIVERSITY</span
          >
        </div>
        <div class="long-bar mx-3"></div>
        <div class="d-flex flex-column">
          <small class="fw-normal system-desc" style="color: #3c388d"
            >СИСТЕМА УПРАВЛЕНИЯ ОБУЧЕНИЕМ</small
          >
        </div>
      </router-link>

      <!-- Hamburger Toggle Button for smaller screens -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links and Search -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto d-flex flex-lg-row align-items-center">
          <li class="nav-item me-lg-3">
            <!-- Update to router-link for Главная -->
            <router-link class="nav-link active fw-bold" to="/">
              <i
                class="fas fa-graduation-cap me-2"
                style="color: #3c388d; font-size: 24px"
              ></i>
              Главная
            </router-link>
          </li>
          <li class="nav-item">
            <!-- Update to router-link for Каталог курсов -->
            <router-link class="nav-link fw-bold" to="/catalog"
              >Каталог курсов</router-link
            >
          </li>
        </ul>

        <!-- Right Side Icons and Profile -->
        <div class="d-flex align-items-center justify-content-center">
          <!-- Search Button that triggers the input field -->
          <div class="nav-item d-flex align-items-center me-3">
            <div
              class="nav-link text-dark d-none d-md-block"
              v-if="!isSearching"
              @click="toggleSearch"
              style="cursor: pointer"
            >
              <i class="fas fa-search"></i>
            </div>

            <!-- Search input field that shows after clicking search icon -->
            <div
              v-if="isSearching"
              ref="searchContainer"
              class="d-flex align-items-center show-small"
            >
              <input
                type="text"
                class="form-control"
                v-model="searchQuery"
                placeholder="Поиск"
                style="width: 200px; height: 35px"
                ref="searchInput"
              />
              <button
                class="btn btn-outline-secondary ms-2"
                @click="search"
                style="height: 35px"
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>

          <a class="nav-link text-dark position-relative me-3" href="#">
            <i class="fas fa-bell"></i>
            <span
              class="badge bg-primary rounded-circle position-absolute top-0 start-100 translate-middle p-1"
              style="background-color: #3c388d"
              >9+</span
            >
          </a>
          <a class="nav-link text-dark position-relative me-3" href="#">
            <i class="fas fa-envelope"></i>
            <span
              class="badge bg-primary rounded-circle position-absolute top-0 start-100 translate-middle p-1"
              style="background-color: #3c388d"
              >3</span
            >
          </a>

          <!-- Profile Dropdown -->
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
              <li><a class="dropdown-item" href="#">Профиль</a></li>
              <li><a class="dropdown-item" href="#">Выход из системы</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- Breadcrumb and Course Content Button (Second Navbar) -->
  <nav
    class="navbar navbar-light bg-white border-bottom fixed-top"
    id="secondNavbar"
  >
    <div
      class="breadcrumb-container container d-flex justify-content-between align-items-center"
    >
      <div class="d-flex">
        <!-- Breadcrumb links updated to router-links -->
        <router-link class="nav-link" to="/" style="color: #3c388d"
          >Главная</router-link
        >
        <span class="mx-2" style="color: #3c388d">/</span>
        <router-link class="nav-link" to="/catalog" style="color: #3c388d"
          >Каталог курсов</router-link
        >
        <span class="mx-2" style="color: #3c388d">/</span>
        <router-link class="nav-link" to="/new-courses" style="color: #3c388d"
          >Новые курсы</router-link
        >
      </div>
      <button
        class="btn btn-outline-primary custom-btn ms-auto"
        style="color: #3c388d; border-radius: 20px"
      >
        <i class="fas fa-list"></i> Содержание курса
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "CombinedNavbar",
  data() {
    return {
      isSearching: false,
      searchQuery: "",
    };
  },
  methods: {
    toggleSearch() {
      this.isSearching = !this.isSearching;
      if (this.isSearching) {
        this.$nextTick(() => {
          const input = this.$refs.searchInput;
          if (input) {
            input.focus();
          }
        });
      }
    },
    search() {
      console.log("Searching for:", this.searchQuery);
    },
    closeSearchOnOutsideClick(event) {
      if (
        this.isSearching &&
        this.$refs.searchContainer &&
        !this.$refs.searchContainer.contains(event.target)
      ) {
        this.isSearching = false;
      }
    },
  },
  mounted() {
    document.addEventListener("mousedown", this.closeSearchOnOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener("mousedown", this.closeSearchOnOutsideClick);
  },
};
</script>

<style scoped>
/* General Navbar Styles */
.long-bar {
  border-left: 3px solid #3c388d; /* Color of the vertical bar */
  height: 40px; /* Adjust the height as needed */
}
#mainNavbar {
  z-index: 1040;
  padding-bottom: 0;
  position: fixed;
  top: 0;
  width: 100%;
}

#secondNavbar {
  z-index: 1039;
  top: 80px; /* Adjust this value based on main navbar height */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

/* Vertical bar styling */
.vertical-bar {
  height: 100%;
  border-left: 1px solid #3c388d;
}

/* Breadcrumb and Course Content Button */
.breadcrumb-container {
  margin-top: 0;
  padding-top: 10px;
  border-top: 2px solid #3c388d;
  width: 100%;
}

/* Add space between logo text and description */
.system-desc {
  padding-left: 5px;
}

/* Responsive Adjustments for Navbar */
@media (max-width: 992px) {
  #secondNavbar {
    top: 100px; /* Adjusted for medium screen sizes */
  }

  .navbar-collapse {
    flex-direction: column;
    align-items: center;
  }

  .navbar-nav {
    margin-bottom: 10px;
  }

  .navbar-nav .nav-link {
    font-size: 16px;
  }

  .d-flex.align-items-center {
    margin-top: 10px;
  }

  .system-name {
    font-size: 14px;
    color: #3c388d;
  }

  .system-desc {
    font-size: 12px;
  }

  .logo-img {
    width: 60px;
  }

  .breadcrumb-container {
    margin-top: 50px;
  }
}

@media (max-width: 576px) {
  #secondNavbar {
    top: 80px; /* Adjusted for small screen sizes */
  }

  .navbar-nav .nav-link {
    font-size: 14px;
  }

  .system-name {
    font-size: 16px;
    color: #3c388d !important;
  }
  .long-bar {
    display: none;
  }
  .system-desc {
    display: none;
  }

  .logo-img {
    width: 70px;
  }
  .show-small {
    display: block;
  }
}
</style>
