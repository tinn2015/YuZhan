<template>
  <div class="test">
    <div @click="routerLink">点击测试</div>
    <input type="text" v-model.number="query">
    <el-button @click="addRow">新增</el-button>
    <el-button @click="cancel">取消</el-button>
    <el-button @click="postData">提交</el-button>
    <el-button @deleteRow="deleteRow">删除</el-button>
    <el-table :data="tableData" @row-click="rowClick" @row-dblclick="dblclick" @selection-change="handleSelectionChange" ref="elTable">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column v-for="item in titleData" :label="item.label" :prop="item.prop" :key="item.prop">
        <template slot-scope="scope">
          <el-form :model="scope.row" ref="mytableForm"  :rules="tableRules">
            <el-form-item :prop="item.prop">
              <el-input v-if="scope.row.isAdd" v-model="scope.row[item.prop]">
              </el-input>
              <el-input v-else-if="scope.row.isEdit" v-model="scope.row[item.prop]">
              </el-input>
              <span v-else>{{ scope.row[item.prop] }}</span>
            </el-form-item>
          </el-form>
        </template>  
      </el-table-column>
    </el-table>
    <el-button @click="log">dianji </el-button>
    <el-form :model="form" ref="myForm" :rules="rules">
      <el-form-item prop="name">
         <el-autocomplete
          v-model="form.name"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item prop="date">
         <el-date-picker
          v-model="form.date"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right">
        </el-date-picker>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      query: null,
      tableData: [
        { id: 1, date: '12-12', name: 'tinn' },
        { id: 2, date: '12-13', name: 'tinnA' },
        { id: 3, date: '12-14', name: 'tinnB' },
        { id: 4, date: '12-15', name: 'tinnC' }
      ],
      titleData: [
        {label: '日期', prop: 'date'},
        {label: '姓名', prop: 'name'}
      ],
      selectRow: null,
      selection: null,
      restaurants: [
        { value: 'tinn' },
        { value: '小王网电视' },
        { value: '挂号费多久啊' }
      ],
      state2: '',
      form: {
        name: 'tinn',
        date: ''
      },
      rules: {
        name: [
          { required: true, message: 'dd', trigger: 'blur' },
          { required: true, message: 'dd', trigger: 'change' }
        ],
        date: { type: 'date', require: true, message: '时间选择', trigger: 'change' }
      },
      tableRules: {
        date: { required: true, message: 'dd', trigger: 'blur' }
      }
    }
  },
  methods: {
    log () {
      console.log(this.form)
    },
    querySearch (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    routerLink () {
      this.$router.push({
        path: '/subPage',
        query: {
          id: this.query
        }
      })
    },
    addRow () {
      this.tableData.forEach(i => {
        if (i.isEdit) {
          i.isEdit = false
        }
      })
      let obj = {
        date: '',
        name: '',
        isAdd: true
      }
      this.$refs.elTable.toggleRowSelection(this.selectRow)
      this.tableData.unshift(obj)
    },
    cancel () {
      if (this.tableData[0].isAdd) {
        this.tableData.splice(0, 1)
      }
      this.tableData.forEach(i => {
        if (i.isAdd) delete i.isAdd
        if (i.isEdit) delete i.isEdit
      })
      this.render()
    },
    dblclick (row, event) {
      if (this.tableData[0].isAdd) {
        this.tableData[0].isAdd = false
      }
      if (this.selectRow) {
        this.$refs.elTable.clearSelection()
      }
      this.tableData.forEach(i => {
        if (i.id === row.id) {
          i.isEdit = true
        } else {
          i.isEdit = false
        }
      })
      this.$refs.elTable.toggleRowSelection(row)
      this.render()
      this.selectRow = row
    },
    deleteRow () {
    },
    handleSelectionChange (selection) {
      console.log(selection)
      this.selection = selection
    },
    rowClick (row) {
      this.$refs.elTable.clearSelection()
      this.$refs.elTable.toggleRowSelection(row)
    },
    postData () {
      console.log(this.selectRow)
      console.log('submit`````````````````````````````')
    },
    render () {
      this.tableData.push({})
      this.tableData.pop()
    }
  }
}
</script>
<style scope>
</style>