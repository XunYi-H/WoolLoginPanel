<template>
  <div>
    MyTip
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
import { ElNotification } from "element-plus";

export default {
  name: "MyTip",
  methods: {
    startTip() {
      ElMessage({
        showClose: true,
        message: "startTip",
        type: "success",
      });
      ElNotification({
        title: "Title",
        message: "",
      });
    },
    apiTip() {
      ElMessage({
        showClose: true,
        message: "apiTip",
        type: "success",
      });
    },
  },
  created() {
    this.startTip();
  },
};
</script>

<style>
</style>