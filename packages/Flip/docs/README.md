<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 翻牌器

模拟翻牌计数效果的组件

## 基础用法
<Preview comp-name="Flip" demo-name="demo">
  <demo />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`maxVal` | 最大值 | Number | - | 100 | 否 
`step` | 频次 | Number | - | 1 | 否
`interval` | 间隔时间 | Number | - | 1 | 否
`loop` | 是否循环 | Boolean | true \| false | true | 否
`color` | 颜色 | String | - | #409eff | 否
