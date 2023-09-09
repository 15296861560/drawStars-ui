<template>
  <ds-virtual-list :listData="listData">
    <template #default="scope">
      <div class="ds-virtual-list-item" v-for="item in scope.visibleData">
        {{ item }}
      </div>
    </template>
  </ds-virtual-list>
</template>
<script setup>
import { ref } from "vue";
const listData = ref([]);
for (let i = 0; i < 1000; i++) {
  listData.value.push(i);
}
</script>
<style lang="less" scoped>
.ds-virtual-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: #ecf5ff;
  border-bottom: solid white 4px;
  width: 100%;
  height: 50px;
}
</style>
