<template>
  <div class="container-sm pb-5">
    <div class="mb-3 text-muted">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">NOI 2022 背笔试</li>
          <li class="breadcrumb-item active" aria-current="page">题库</li>
        </ol>
      </nav>
    </div>
    <ol>
      <li v-for="o in $store.state.data">
        <p v-html="render(o.content)"></p>
        <p>
          <strong>答案</strong>
          <span v-if="o.type === 'select'">：{{ o.choices[o.answer] }}</span>
          <span v-else><strong>（多选）</strong>：<span v-for="(id, idx) in o.answer">{{ 
            o.choices[id] + (o.answer.length !== idx + 1 && '、' || '') 
          }}</span></span>
        </p>
      </li>
    </ol>
  </div>
</template>
<script>
import { render } from "./utils";
export default {
  methods: {
    render,
  },
}
</script>
<style>
</style>