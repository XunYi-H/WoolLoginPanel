<template>
  <div>
    MyMain
    <el-input /><span></span>
    <div class="flex">
      <el-input /><span></span>
      <el-button size="large" type=""><span>获取验证码</span></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyMain",
};
</script>

<style lang="less" scoped>
/*.el-button{
    //height: var(--el-button-size)
}*/
.el-button > span {
  align-items: center;
  display: inline-flex;
}
.flex {
  display: flex;
}
</style>