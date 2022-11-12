/*
 * @Description: 
 * @Version: 2.0
 * @Autor: lgy
 * @Date: 2022-10-07 23:48:11
 * @LastEditors: lgy
 * @LastEditTime: 2022-11-13 00:42:06
 */
import less from 'less'

import Flop from './flop'
import HardTip from './hardTip'
import dsInput from './dsInput'

const components = [Flop, HardTip, dsInput]

// 定义install方法
const install = function (Vue) {
  // 注册所有的组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 导出install方法
export default {
  install
}