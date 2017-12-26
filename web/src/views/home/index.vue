<template>
  <div class="home">
    <el-carousel :interval="4000" arrow="always" height="500px">
      <el-carousel-item class="carousel-item" v-for="item in 4" :key="item">
        <h3>tip: 这里是一些体现公司主旨或者成果的宣传图片</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="con">
      <div>tip: 首页将分几个块，最好图文并茂，体现出公司的特色，运营方向</div>
      <el-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
  </div>
</template>


<script>
export default {
}
</script>
<style scope>
  .carousel-item {
    text-align: center;
    height: 500px
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .con {
    margin-top: 15px;
  }
</style>