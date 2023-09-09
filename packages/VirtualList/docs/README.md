<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 虚拟列表

高性能渲染大量数据的虚拟列表

## 基础用法
<Preview comp-name="VirtualList" demo-name="demo">
  <demo />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`listData` | 所有列表数据 | Array | - | `[]` | 是 
`itemSize` | 每项列表的高度（单位px） | Number | - | `50` | 否
