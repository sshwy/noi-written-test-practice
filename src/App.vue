<template>
  <header>
    <ul class="appnav mt-2 mb-2 nav justify-content-center">
      <li>
        <span class="nav-link" @click="() => (this.route = 'home')">首页</span>
      </li>
      <li>
        <span class="nav-link" @click="() => (this.route = 'test')">测试</span>
      </li>
      <li>
        <span class="nav-link" @click="() => (this.route = 'retest')"
          >错题集
          <span v-if="wrong_count" class="badge bg-secondary">{{
            wrong_count
          }}</span></span
        >
      </li>
    </ul>
  </header>

  <main style="max-width: 700px; margin: 0 auto" class="flex-shrink-0">
    <keep-alive>
      <component
        :is="currentPage"
        @start="onStart"
        @routeto="(path) => (this.route = path)"
      />
    </keep-alive>
    <!-- <home-page v-if="route === 'home'"  />
    <test-page
      v-if="route === 'test'"
    />
    <retest-page
      v-if="route === 'retest'"
      @routeto="(path) => (this.route = path)"
    /> -->
  </main>

  <footer class="footer fixed-bottom py-3 bg-light">
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
