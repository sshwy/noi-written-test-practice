<template>
  <div class="card">
    <div class="card-header">
      Problem No. <span class="fw-bold">{{ data.current }}</span> /
      <span>{{ data.total }} </span>
    </div>
    <question-card-select v-if="data.type === 'select'" :data="data" @next="$emit('next')" @wrong="onWrong" />
    <question-card-multi-select v-else-if="data.type === 'multiselect'" :data="data" @next="$emit('next')" @wrong="onWrong" />
    <div v-else>Unknown Type of Question!</div>
  </div>
</template>

<script>
import QuestionCardSelect from "./QuestionCardSelect.vue";
import QuestionCardMultiSelect from "./QuestionCardMultiSelect.vue";

export default {
  emits: ["next", "wrongAttempt"],
  components: {
    QuestionCardSelect,
    QuestionCardMultiSelect,
  },
  props: {
    data: {
      type: Object,
      require: true,
    },
  },
  methods: {
    onWrong() {
      this.$emit("wrongAttempt", this.$props.data);
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
  text-align: inherit;
}

.choice-list-item:hover {
  z-index: 1;
  color: #495057;
  text-decoration: none;
  background-color: #f8f9fa;
}
</style>