<template>
  <my-header></my-header>
  <my-main></my-main>
  <my-tip></my-tip>
  <div>t</div>
</template>

<script>
import MyMain from './components/my-main/MyMain.vue';
import MyHeader from './components/my-header/MyHeader.vue';
import axios from 'axios'
import MyTip from './components/my-tip/MyTip.vue';

export default {
  name:'MyApp',
  created(){
    console.log('created 代码创建生命周期函数');
  },
  components:{
    MyMain,
    MyHeader,
    MyTip
  }
}
</script>
  
<style>

</style>