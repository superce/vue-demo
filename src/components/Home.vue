<template>
  <div class="home">
    <div class="top">
      <headerDtail />
    </div>
    <div class="middle">
      <List />
    </div>
    <div class="bottom">
      <footerDtail />
    </div>
  </div>
</template>

<script>
import HeaderDtail from '@/components/HeaderDtail'
import FooterDtail from '@/components/FooterDtail'
import List from '@/components/List'
export default {
  name: 'Home',
  components: {
    HeaderDtail,
    FooterDtail,
    List
  }
}
</script>

<style scoped>
  .home{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .home .top,.bottom{
    flex-shrink: 0;
  }
  .home .middle{
    flex-grow: 1;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>
