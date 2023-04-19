<template>
  <my-header></my-header>
  <my-main></my-main>
  <div>t</div>
</template>

<script>
import MyMain from './components/my-main/MyMain.vue';
import MyHeader from './components/my-header/MyHeader.vue';
import axios from 'axios'

export default {
  name:'MyApp',
  created(){
    console.log('created 代码创建生命周期函数');
  },
  components:{
    MyMain,
    MyHeader
  }
}
</script>
  
<style>

</style>