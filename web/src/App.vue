<template>
  <div id="app">
    <div class="header">
      <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      text-color="#333"
      active-text-color="#0cb46a">
        <el-menu-item v-for="item in nav" :index="item.path" :key="item.label">{{ item.label }}</el-menu-item>
      </el-menu>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import './style.css'

export default {
  name: 'app',
  data () {
    return {
      activeIndex: '/home',
      nav: [
        { label: '首页', path: '/home' },
        { label: '焙咖整体设计', path: '/design' },
        { label: '门店整修装饰', path: '/decoration' },
        { label: '专属展柜定制', path: '/cabinet' },
        { label: '运营咨询管理', path: '/counselor' }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-menu-item:hover {
  color: #0cb46a!important
}
.header {
  box-shadow: 1px 1px 10px #666
}
</style>
