<template>
<div class="home">
    <div class="top">
      <headerDtail />
    </div>
    <div class="middle">
      <div class="lodding">
        <img src="../assets/loading_green.c0f9be0.gif" alt="">
      </div>
    </div>
    <div class="bottom">
      <footerDtail />
    </div>
  </div>
</template>

<script>
import HeaderDtail from "./HeaderDtail";
import FooterDtail from "./FooterDtail";
export default {
  name: "Se",
  components: {
    HeaderDtail,
    FooterDtail
  }
};
</script>

<style scoped>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.home .top,
.bottom {
  flex-shrink: 0;
}
.home .middle {
  flex-grow: 1;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.home .middle .lodding{
  width: 50px;
  margin: 20px auto 0;
  
}
.home .middle .lodding img{
  width:100%;
}
</style>

