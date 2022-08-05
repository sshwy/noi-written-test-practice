<template>
  <div class="test-page container-sm">
    <div class="mb-3 text-muted">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">NOI 2022 背笔试</li>
          <li class="breadcrumb-item active">测试</li>
        </ol>
      </nav>
    </div>
    <question-card v-if="has_prob" :data="prob" @next="++qindex" @wrong-attempt="onWrongAttempt" />
    <div v-else-if="finish">
      <div class="mb-3">恭喜你完成所有的试题！</div>
      <div class="d-grid gap-2">
        <router-link class="btn btn-primary" to="/">回到主页</router-link>
        <router-link class="btn btn-primary" to="/retest">查看错题</router-link>
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
    console.log("created");
    this.qindex = 0;
  },
  computed: {
    qlist() {
      return this.$store.state.qlist;
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
  },
  methods: {
    onWrongAttempt(data) {
      this.$store.commit("addwrong", data);
    },
  },
};
</script>

<style>
</style>
