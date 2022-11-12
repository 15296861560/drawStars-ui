<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: lgy
 * @Date: 2022-10-09 23:51:10
 * @LastEditors: lgy
 * @LastEditTime: 2022-10-09 23:58:07
-->
<template>
  <div>
    <div class="ds-hard-tip-bg" v-show="isShow">
      <div class="ds-hard-tip-dialog">
        <div class="ds-hard-tip-title">
          <span>{{ title }}</span
          ><span class="icon-close"></span>
        </div>
        <div class="ds-hard-tip-content">{{ content }}</div>
        <button class="ds-hard-tip-confirm" @click="closeHardTip">
          {{ confirm }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HardTip",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "提示",
    },
    content: {
      type: String,
      default: "这是一个提示",
    },
    confirm: {
      type: String,
      default: "确定",
    },
  },
  data() {
    return {};
  },
  methods: {
    closeHardTip() {
      this.$emit("update:isShow", false);
    },
  },
};
</script>
<style scoped lang="less">
.ds-hard-tip-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  .ds-hard-tip-dialog {
    background-color: white;
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    min-height: 20vh;
    width: 30vw;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1.5vw;

    .ds-hard-tip-title {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      color: #303133;
    }
    .ds-hard-tip-content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 1vw 1.5vw;
      color: #606266;
      font-size: 14px;
      text-align: left;
    }
    .ds-hard-tip-confirm {
      display: inline-block;
      white-space: nowrap;
      cursor: pointer;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: 0.1s;
      font-weight: 500;
      padding: 1vw 1.5vw;
      font-size: 12px;
      border-radius: 4px;
      color: #fff;
      background-color: #409eff;
      border: none;
      &:hover {
        background: #66b1ff;
        border-color: #66b1ff;
      }
      &:active {
        background: #3a8ee6;
        border-color: #3a8ee6;
        color: #fff;
      }
    }
  }
}
</style>
