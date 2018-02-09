<template>
  <div class="detail">
    <div class="detailHeader">
      <div class="top">
        <div class="return" @click="goBack">
          <svg t="1517967926054" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1888"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">
            <path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
              fill="#515151" p-id="1889"></path>
          </svg>
        </div>
        <div class="title">
          <h2>详情页</h2>
        </div>
      </div>
    </div>
    <div class="detailMain">
 
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Detail',
    methods: {
      goBack() {
        window.history.back();
      }
    }
  }

</script>

<style scoped>
  .detailHeader {
    border-bottom: 1px solid rgba(192, 192, 192, 0.3);
  }

  .detail .top {
    width: 95%;
    margin: 0 auto;
    display: flex;
  }

  .detail .return {
    font-size: 30px;
  }

  .detail .return .icon {
    margin-top: 10px;
  }

  .detail .title {
    margin-left: 50%;
    transform: translateX(-84%);
  }

  .detail .title h2 {
    font-size: 30px;
    line-height: 50px;
  }

</style>
