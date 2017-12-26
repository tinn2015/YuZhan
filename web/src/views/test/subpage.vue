<template>
  <div class="sub-page">
    this is sub page
    <h2>{{ $route.query }}</h2>
    <h3>{{ num }}</h3>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 0
    }
  },
  mounted () {
    console.log(1, this.$route.query)
  },
  watch: {
    '$route.query' (val) {
      console.log(val, 'val')
      this.num = val.id + 1
    }
  }
}
</script>
<style scope>
</style>