<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: lgy
 * @Date: 2023-08-27 19:40:49
 * @LastEditors: lgy
 * @LastEditTime: 2023-09-03 21:25:40
-->
# draw-stars-ui

## 使用说明

### 初始化
npm install 

### 本地预览
npm run dev

### 编译文档
npm run build:doc

### 打包
npm run build:lib

### 生成新组件
npm run gen
输入组件英文名
输入组件中文名
输入组件描述

### 发布
npm publish

### 使用
npm install draw-stars-ui --save

在main.ts文件中引入使用
import DrawStartsUI from "draw-stars-ui";
const app = createApp(App);
app.use(DrawStartsUI);