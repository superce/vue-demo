<template>
  <div class="list">
    <ul>
      <li v-for="good in goods">       
          <router-link :to="'/detail' + good.price">
          <div class="img">
            <img :src="good.img" :title="good.title" />
          </div>
          <div class="title" :title="good.title">{{ good.title }}</div>
          <div class="price">
            <span>价钱:</span> {{ good.price }}
          </div>
          </router-link>         
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "List",
  // created() {
  //   this.getData();
  // },
  computed: {
    // getData() {
    //   axios.get("http://localhost:3000/goods").then(
    //     res => {
    //       this.goods = res.data.goods;
    //     },
    //     err => {
    //       alert("休息一会");
    //     }
    //   );
    // }
    getData(){
      return this.$store
    }
  },
  data() {
    return {
      goods: []
    };
  },
  computed:{

  }
};
</script>

<style>
.list {
  width: 95%;
  margin: 10px auto;
}

.list ul {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}

.list ul li {
  width: 48%;
  margin: 1%;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
}

.list ul li .img {
  box-shadow: rgba(0, 0, 0, 0.12) 0 0 1px;
}

.list ul li img {
  width: 100%;
}

.list ul li .title,
.price {
  color: #333;
  font-size: 20px;
  margin: 10px 0;
}

.list ul li .price {
  color: rgb(129, 216, 206);
}

.list ul li .price span {
  color: #333;
}
</style>
