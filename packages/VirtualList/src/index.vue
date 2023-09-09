<template>
  <div ref="list" class="ds-virtual-list" @scroll="scrollEvent($event)">
    <div class="ds-virtual-list-phantom" :style="{ height: listHeight + 'px' }"></div>
    <div class="ds-virtual-list-container" :style="{ transform: getTransform }">
      <slot :visibleData="visibleData"> </slot>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, defineProps, computed } from "vue";

const props = defineProps({
  //所有列表数据
  listData: {
    type: Array,
    default: () => [],
  },
  //每项高度
  itemSize: {
    type: Number,
    default: 50,
  },
});

const list = ref(null);

const screenHeight = ref(0); //可视区域高度
const startOffset = ref(0); //偏移量
const start = ref(0); //起始索引
const end = ref(0); //结束索引

//列表总高度
const listHeight = computed(() => {
  return props.listData.length * props.itemSize;
});

//可显示的列表项数
const visibleCount = computed(() => {
  return Math.ceil(screenHeight.value / props.itemSize);
});

//偏移量对应的style
const getTransform = computed(() => {
  return `translate3d(0,${startOffset.value}px,0)`;
});

//获取真实显示列表数据
const visibleData = computed(() => {
  return props.listData.slice(start.value, Math.min(end.value, props.listData.length));
});

onMounted(() => {
  screenHeight.value = list.value.clientHeight;
  start.value = 0;
  end.value = start.value + visibleCount.value;
});

function scrollEvent(e) {
  //当前滚动位置
  const scrollTop = list.value.scrollTop;
  //此时的开始索引
  start.value = Math.floor(scrollTop / props.itemSize);
  //此时的结束索引
  end.value = start.value + visibleCount.value;
  //此时的偏移量
  startOffset.value = scrollTop - (scrollTop % props.itemSize);
  console.log(e);
}
</script>

<style lang="less" scoped>
.ds-virtual-list {
  width: 500px;
  height: 500px;
  overflow-y: scroll;
  position: relative;
  .ds-virtual-list-phantom {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
  }
}
</style>
