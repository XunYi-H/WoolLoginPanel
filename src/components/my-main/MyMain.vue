<template>
  <div>
    MyMain
    <el-input size="large"/><span></span>
    <div class="flex">
      <el-input /><span></span>
      <el-button size="large" type="" class="el-button"><span>获取验证码</span></el-button>
    </div>
    <div>
      <el-button size="large" type="primary" style="width: 100%"
        ><span>获取验证码</span></el-button
      >
    </div>
    <el-button size="large" style="width: 100%"><span>返回</span></el-button>
  </div>
</template>

<script>
export default {
  name: "MyMain",
};
</script>

<style lang="less" scoped>
.el-button {
  //display: flex;
  //height: var(--el-button-size)
  padding:15px 20px;
}

.el-button > span {
  align-items: center;
  display: inline-flex;
}
.flex {
  display: flex;
}
</style>