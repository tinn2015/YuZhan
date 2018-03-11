<template>
  <div>
    <div id="jstree"></div>
    <el-button @click="refreshTree">刷新树</el-button>
  </div>
</template>
<script>
import $ from 'jquery'
import '../../../static/jstree/jstree.min.js'
import '../../../static/jstree/themes/default/style.min.css'

export default {
  data () {
    return {
      treeEl: null,
      treeData: [
        'Simple root node',
        {
          text: 'Root node 2',
          state: {
            opened: true,
            selected: true
          },
          children: [
            'child1',
            'child2'
          ]
        }
      ]
    }
  },
  mounted () {
    this.treeInit()
    this.treeEl = $('#jstree').jstree(true)
  },
  methods: {
    treeInit () {
      $('#jstree').jstree({
        core: {
          data: this.treeData
        }
      })
    },
    refreshTree () {
      this.treeEl.refresh()
    }
  }
}
</script>
<style scope>
</style>