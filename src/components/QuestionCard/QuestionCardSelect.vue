<template>
  <div class="card-body">
    <h5 class="card-title">单选题</h5>
    <p class="card-text" v-html="render(data.content)" />
    <div class="list-group choice-list">
      <button
        v-for="(text, index) in data.choices"
        :key="index"
        type="button"
        :class="[
          'choice-list-item',
          'list-group-item',
          this.detectExtraStyle(index),
        ]"
        @click="() => onSelect(index)"
      >
        <span class="choice-marker">{{ marker(index) }}</span
        >.
        <span class="choice-text">{{ text }}</span>
      </button>
    </div>
    <div v-if="status === 'ok'">
      <span class="fw-bold">回答正确 ^_^</span>
    </div>
    <div v-if="status === 'wrong'">
      <span class="fw-bold text-danger">回答错误 >_&lt;</span>
    </div>
  </div>
</template>

<script>
import { render } from "../utils";

export default {
  emits: ["next", "wrong"],
  props: {
    data: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      status: "asking",
      choose: -1,
    };
  },
  methods: {
    render: render,
    marker(index) {
      return String.fromCharCode("A".charCodeAt(0) + index);
    },
    onSelect(index) {
      this.choose = index;
      if (index === this.data.answer) {
        this.status = "ok";
        setTimeout(() => {
          this.choose = -1;
          this.status = "asking";

          this.$emit("next");
        }, 600);
      } else {
        this.status = "wrong";
        this.$emit("wrong");
      }
    },
    detectExtraStyle(index) {
      if (this.status === "ok") {
        if (index === this.choose) {
          return "bg-success bg-gradient text-white";
        }
      } else if (this.status === "wrong") {
        // if (index === this.data.answer) {
        //   return "bg-success bg-gradient text-white";
        // }
        if (index === this.choose) {
          return "bg-danger bg-gradient text-white";
        }
      }
    },
  },
};
</script>

<style>
</style>