<template>
  <div>t</div>
</template>

<script>
import { createApp } from 'vue';
import MyMain from './components/my-main/MyMain.vue';
import axios from 'axios'
export default {
  name:'MyApp',
  created(){
    console.log('created 代码创建生命周期函数');
  }
}
</script>
  
<style>

</style>