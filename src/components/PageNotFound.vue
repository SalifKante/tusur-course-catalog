<template>
  <div class="page-not-found">
    <h1>404 - Страница не найдена</h1>
    <p>К сожалению, мы не смогли найти страницу, которую вы ищете.</p>
    <router-link to="/">Вернуться на главную</router-link>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
.page-not-found {
  text-align: center;
  margin-top: 50px;
}
.page-not-found h1 {
  font-size: 3rem;
  color: #dc3545;
}
.page-not-found p {
  font-size: 1.5rem;
}
.page-not-found a {
  display: inline-block;
  margin-top: 20px;
  font-size: 1.25rem;
  color: #007bff;
  text-decoration: none;
}
.page-not-found a:hover {
  text-decoration: underline;
}
</style>
