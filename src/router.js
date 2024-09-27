import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./components/MainPage.vue";
import CourseCatalog from "./components/CourseCatalog.vue";
import NewCourses from "./components/NewCourses.vue";
import PageNotFound from "./components/PageNotFound.vue"; // Import the 404 component

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainPage,
    props: (route) => ({
      selectedCourses: route.query.selectedCourses || [], // Pass as query params if available
    }),
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: CourseCatalog,
    props: (route) => ({
      selectedCourses: route.query.selectedCourses || [], // Pass selectedCourses as a query param
    }),
    beforeEnter: (to, from, next) => {
      console.log("Entering Catalog route:", to.query.selectedCourses);
      next();
    },
  },
  {
    path: "/new-courses",
    name: "NewCourses",
    component: NewCourses,
    props: (route) => ({
      selectedCourses: route.query.selectedCourses || [], // Pass selectedCourses as query params
    }),
  },
  // Catch-all route for 404 Page Not Found
  {
    path: "/:catchAll(.*)", // Matches any route not defined above
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
