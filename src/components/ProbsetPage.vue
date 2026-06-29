<template>
  <div class="container-sm pb-5">
    <page-breadcrumb current="题库" />
    <div class="alert alert-info" role="alert">
      <strong>注意</strong> 在 2026 年的笔试题库中相比于 2026 改动的题目有：
      <ol class="pt-2 mb-0">
        <li><strong>新增题目</strong> 选手丢失密码条，会扣几分：扣 5 分</li>
        <li><strong>新增题目</strong> 在评测考生答案时，如果某测试点的运行内存超过内存限制，则：程序不能正常运行，该测试点得 0 分</li>
        <li><strong>新增题目</strong> 在 NOI 赛场上，选手自测时可以使用的指定工具是：SelfEval</li>
        <li><strong>新增题目</strong> 在 NOI 赛场上，选手使用 SelfEval 得到的自测结果是否可以作为正式成绩：否</li>
        <li><strong>题面变动</strong> 调试程序的方法有：「打印中间结果」改为「使用 print 类语句打印中间结果」</li>
        <li><strong>题面变动</strong> 申请复评流程：签字确认增加「现场工作人员」；「提交至 NOI 科学委员会评测组」改为「交至 NOI 科学委员会评测组处理」</li>
        <li><strong>题面变动</strong> 源代码文件名要求：「试题名称缩写」改为「试题名称」</li>
        <li><strong>题面变动</strong> 登录名单丢失/复评忘记密码：答案改为「请工作人员处理，并需承担总成绩扣分的处罚」</li>
        <li><strong>题面变动</strong> 机试开始前禁止事项：增加「或触摸键盘、鼠标等输入设备」</li>
        <li><strong>题面变动</strong> 选手可携带物品：「笔」改为「无存储和网络功能的笔」</li>
        <li><strong>题面变动</strong> 今年是第几届 IOI：答案参考网址改为 http://www.ioinformatics.org</li>
        <li><strong>修改答案</strong> vim 编辑器中查找字符串「12」：仅 /12（去掉 ?12）</li>
        <li><strong>修改答案</strong> 用来全面管理计算机硬件和软件资源的软件叫：由多选改为单选，答案为操作系统</li>
      </ol>
      <strong>注意</strong> 在 2026 年的笔试题库中相比于 2022 改动的题目有：
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
import PageBreadcrumb from "./PageBreadcrumb.vue";

export default {
  components: {
    PageBreadcrumb,
  },
  methods: {
    render,
  },
}
</script>
<style></style>