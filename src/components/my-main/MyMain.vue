<template>
  <div>
    MyMain
    <el-input /><span></span>
    <el-input /><span></span>
    <el-button type="primary">Primary</el-button>
    <el-button type="primary">Primary</el-button>
    <el-steps :active="active" finish-status="success">
    <el-step title="Step 1" />
    <el-step title="Step 2" />
    <el-step title="Step 3" />
  </el-steps>
  </div>
</template>

<script>
export default {
  name: "MyMain",
};
</script>

<style>
</style>