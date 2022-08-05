<template>
  <header>
    <ul class="appnav mt-2 mb-2 nav justify-content-center">
      <li class="nav-link">
        <router-link to="/">首页</router-link>
      </li>
      <li class="nav-link">
        <router-link to="/probset">题库</router-link>
      </li>
      <li class="nav-link">
        <router-link to="/test">测试</router-link>
      </li>
      <li class="nav-link">
        <router-link to="/retest">错题集
          <span v-if="wrong_count" class="badge bg-secondary">{{
              wrong_count
          }}</span>
        </router-link>
      </li>
    </ul>
  </header>

  <main style="max-width: 700px; margin: 0 auto" class="flex-shrink-0">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>

  <footer class="footer fixed-bottom py-2 bg-light">
    <div class="container">
      <span class="text-muted">Last Build Time: {{ build_time }}</span>
    </div>
  </footer>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import TestPage from "./components/TestPage.vue";
import RetestPage from "./components/RetestPage.vue";

export default {
  name: "App",
  components: {
    HomePage,
    TestPage,
    RetestPage,
  },
  data() {
    return {
      route: "home",
      build_time: process.env.VUE_APP_BUILD_TIME,
    };
  },
  methods: {
    onStart() {
      this.route = "test";
    },
  },
  computed: {
    wrong_count() {
      return this.$store.state.wrong.length;
    },
    currentPage() {
      if (this.route === "home") return "home-page";
      if (this.route === "test") return "test-page";
      if (this.route === "retest") return "retest-page";
      return "div";
    },
  },
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, "Helvetica Neue", Avenir,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.appnav li span:hover {
  cursor: pointer;
}
</style>
