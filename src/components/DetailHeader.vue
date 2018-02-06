<template>
  <div class="detailHeader">
    <div class="return" @click="goBack"> < </div>
    <div class="title">
      <h2>详情页</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailHeader',
    methods: {
      goBack() {
        window.history.back();
      }
    }

  }

</script>

<style scoped>
.detailHeader{
  width:95%;
  height: 50px;
  margin: 0 auto;
  display: flex;
}
.detailHeader .return{
  flex-grow: 1;
}
.detailHeader .title{
  flex-grow: 2;
}
.detailHeader .title h2{
  font-size: 30px;
  line-height: 50px;
}
</style>
