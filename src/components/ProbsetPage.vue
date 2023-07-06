<template>
  <div class="container-sm pb-5">
    <div class="mb-3 text-muted">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">NOI 2023 背笔试</li>
          <li class="breadcrumb-item active" aria-current="page">题库</li>
        </ol>
      </nav>
    </div>
    <div class="alert alert-info" role="alert">
      <strong>注意</strong> 在 2023 年的笔试题库中相比于 2022 改动的题目有：
      <ol class="pt-2 mb-0">
        <li><strong>删除题目</strong> 选手回答填空题，提交的答案中可以包含引号吗</li>
        <li><strong>修改答案</strong> 在 NOI Linux 中，从虚拟终端切换回桌面环境的快捷键是：Alt+F2</li>
        <li><strong>题面变动</strong> 字长为 64 位的计算机,表示它能作为一个整体进行传送的数据长度可为几个字节：8（题面中 32 改为 64）</li>
      </ol>
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
<style></style>