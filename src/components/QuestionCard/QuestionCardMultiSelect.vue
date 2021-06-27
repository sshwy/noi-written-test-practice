<template>
  <div class="card-body">
    <h5 class="card-title">多选题</h5>
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
    <div class="mb-3">
      <button type="button" class="btn btn-primary" @click="onConfirm">
        确定
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
      choose_list: [],
    };
  },
  methods: {
    render: render,
    marker(index) {
      return String.fromCharCode("A".charCodeAt(0) + index);
    },
    onSelect(index) {
      if (this.status === "wrong") {
        this.status = "asking";
      }
      if (this.choose_list.includes(index)) {
        this.choose_list = this.choose_list.filter((x) => x !== index);
      } else {
        this.choose_list.push(index);
      }
    },
    onConfirm() {
      if (
        [...this.choose_list].sort().join(",") ===
        [...this.data.answer].sort().join(",")
      ) {
        this.status = "ok";
        setTimeout(() => {
          this.choose_list = [];
          this.status = "asking";

          this.$emit("next");
        }, 600);
      } else {
        this.status = "wrong";
        this.$emit("wrong");
      }
    },
    detectExtraStyle(index) {
      if (this.status === "asking") {
        if (this.choose_list.includes(index)) {
          return "bg-secondary bg-gradient text-white";
        }
      } else if (this.status === "ok") {
        if (this.choose_list.includes(index)) {
          return "bg-success bg-gradient text-white";
        }
      } else if (this.status === "wrong") {
        if (this.choose_list.includes(index)) {
          return "bg-danger bg-gradient text-white";
        }
      }
    },
  },
};
</script>

<style>
.choice-list {
  margin: 1em 0;
}
.choice-list-item {
  transition: 0.2s all ease;
}
</style>