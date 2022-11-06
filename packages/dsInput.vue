<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: lgy
 * @Date: 2022-10-09 23:51:10
 * @LastEditors: lgy
 * @LastEditTime: 2022-10-09 23:58:07
-->
<template>
  <div class="ds-input-box">
    <input class="ds-input-box__inner" :type="inputType" required v-model="inputText" />
    <span class="ds-input-box__tip">{{ placeholder }}</span>
  </div>
</template>
<script>
export default {
  props: {
    inputType: {
      type: String,
      default: "text",
    },
    inputText: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "请输入",
    },
  },
};
</script>
<style scoped lang="less">
.ds-input-box {
  position: relative;
  width: 100%;
  .ds-input-box__inner {
    width: 100%;
    padding: 1rem;
    border: 1px solid aqua;
    background: none;
    border-radius: 4px;
    outline: none;
    font-size: 1rem;
    transition: 0.5s;
    &:valid,
    &:focus {
      border: 1px solid #50c9c3;
      & ~ .ds-input-box__tip {
        color: #50c9c3;
        transform: translateX(1rem) translateY(-0.9rem) scale(0.7); /* 变换位置 */
        padding: 0.5rem;
        background: #fffaf4;
        border-radius: 4px;
        letter-spacing: 0.1rem;
      }
    }
  }
  .ds-input-box__tip {
    position: absolute;
    left: 0;
    top: 0;
    color: #939496;
    padding: 1rem;
    pointer-events: none;
    font-size: 1rem;
    transition: all ease 0.5s;
  }
}
</style>
