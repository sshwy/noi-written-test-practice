<template>
  <div class="test-page container-sm">
    <div class="mb-3 text-muted">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">NOI 2022 背笔试</li>
          <li class="breadcrumb-item active" aria-current="page">错题集</li>
        </ol>
      </nav>
    </div>
    <question-card v-if="has_prob" :data="prob" @next="onNextProblem" @wrong-attempt="onWrongAttempt" />
    <div v-else-if="empty">
      <div class="mb-3">看起来你并没有错题 ^_^</div>
    </div>
    <div v-else-if="finish">
      <div class="mb-3">恭喜你完成所有的错题！</div>
      <div class="d-grid gap-2">
        <router-link class="btn btn-primary" to="/">回到主页</router-link>
        <button class="btn btn-primary" type="button" @click="qindex = 0">再做一次</button>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionCard from "./QuestionCard/index.vue";

export default {
  components: {
    QuestionCard,
  },
  data() {
    return {
      qindex: -1,
    };
  },
  created() {
    this.qindex = 0;
  },
  computed: {
    qlist() {
      return this.$store.state.wrong;
    },
    has_prob() {
      return 0 <= this.qindex && this.qindex < this.qlist.length;
    },
    prob() {
      return {
        ...this.qlist[this.qindex],
        total: this.qlist.length,
        current: this.qindex + 1,
      };
    },
    finish() {
      return this.qindex === this.qlist.length;
    },
    empty() {
      return this.qlist.length === 0;
    },
  },
  methods: {
    onNextProblem() {
      ++this.qindex;
    },
    onWrongAttempt(data) {
      this.$store.commit("addwrong", data);
    },
  },
};
</script>

<style>
</style>
