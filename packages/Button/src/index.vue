<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: lgy
 * @Date: 2023-08-20 20:32:07
 * @LastEditors: lgy
 * @LastEditTime: 2023-08-27 19:14:30
-->
<template>
  <button @click="emitEvent">
    <slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(["click"]);
const emitEvent = function (eventData) {
  emit("click", eventData);
};
</script>

<style scoped></style>
