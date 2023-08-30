<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: lgy
 * @Date: 2023-08-20 20:28:03
 * @LastEditors: lgy
 * @LastEditTime: 2023-08-27 19:17:12
-->
<template>
  <div class="doc">
    <aside>
      <router-link
        class="aside-nav"
        v-for="(link, index) in dataLinks"
        :key="index"
        :to="link.path"
        >{{ link.name }}</router-link
      >
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import ComponentList from "../packages/list.json";
import { reactive } from "vue";
import { RouterView, RouterLink } from "vue-router";

const dataLinks = reactive(
  ComponentList.map((item) => ({
    path: `/components/${item.compName}`,
    name: item.compZhName,
  }))
);
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
.doc {
  display: flex;
  min-height: 100vh;
  aside {
    width: 200px;
    padding: 15px;
    border-right: 1px solid #ccc;
    .aside-nav {
      min-height: 50px;
      text-decoration: none;
      text-align: left;
      font-size: 24px;
      font-weight: bold;
      cursor: pointer;
      width: 100%;
      display: flex;
      align-items: center;
      border-radius: 4px;
      padding: 8px;
      box-sizing: border-box;
      color: black;
      &:hover {
        background-color: aliceblue;
      }
      &:active {
        color: aqua;
      }
    }
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
  }
}
</style>
