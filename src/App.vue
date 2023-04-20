<template>
  <div class="app">
    <my-header></my-header>
    <my-main></my-main>
    <my-tip></my-tip>
  </div>
</template>

<script>
import MyMain from "./components/my-main/MyMain.vue";
import MyHeader from "./components/my-header/MyHeader.vue";
import axios from "axios";
import MyTip from "./components/my-tip/MyTip.vue";

export default {
  name: "MyApp",
  created() {
    console.log("created 代码创建生命周期函数");
    console.log();
  },
  components: {
    MyMain,
    MyHeader,
    MyTip,
  },
};
</script>
  
<style lang="less" scoped>
.app {
  justify-content: center;
  //margin: 0 auto;
  padding: 2rem;
  display: flex;
  place-items: center;
  //align-items: center;
  text-align: center;
}
</style>