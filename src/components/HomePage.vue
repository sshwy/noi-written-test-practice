<template>
  <div class="container-sm">
    <div class="intro text-center">
      <div class="title-container">
        <h1 style="font-size: 4em">NOI 2022 背笔试</h1>
      </div>
      <p>这是一个帮助你记忆 NOI 笔试题库的网站。</p>
      <p>祝所有参赛者 NOI 2022 rp++！</p>
    </div>
    <div class="d-grid gap-2">
      <button
        type="button"
        class="btn btn-primary btn-lg"
        @click="() => this.$emit('start')"
      >
        开始
      </button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["start"],
};
</script>

<style>
.title-container {
  margin: 1em 0;
}
</style>
