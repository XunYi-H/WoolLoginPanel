<template>
  <div>
    MyMain
    <!-- <el-input size="large" />
    <span></span>
    <div class="flex">
      <el-input />
      <span></span>
      <el-button size="large" type class="el-button">
        <span>获取验证码</span>
      </el-button>
    </div>
    <div>
      <el-button size="large" type="primary" style="width: 100%">
        <span>获取验证码</span>
      </el-button>
    </div>
    <el-button size="large" style="width: 100%">
      <span>返回</span>
    </el-button>-->
    <el-row>
      <el-col :xs="1" :sm="5" :md="5" :lg="5" :xl="6"></el-col>
      <el-col :xs="20" :sm="14" :md="14" :lg="14" :xl="12">
        <el-form label-width="0px">
          <el-form-item label>
            <el-input
              size="large"
              placeholder="手机号"
              @change="Change_PCode"
              v-model="this.$store.state.PCode"
            />
          </el-form-item>
          <el-form-item label>
            <el-input
              size="large"
              placeholder="验证码"
              @change="Change_VCode"
              v-model="this.$store.state.VCode"
            >
              <template #append>
                <el-button @click="getVCode">获取验证码</el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-button size="large" type="primary" style="width: 100%">
            <span>登录</span>
          </el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MyMain",
  data() {
    return {};
  },
  methods: {
    Change_PCode(PCode) {
      this.$store.commit("Change_PCode", PCode);
      console.log(PCode);
    },
    Change_VCode(VCode) {
      this.$store.commit("Change_VCode", VCode);
      console.log(VCode);
    },
    async getVCode() {
      console.log("请求");
      const { data: res } = await axios.request("./api/notice");
      console.log(res);
    },
  },
};
</script>

<style lang="less" scoped>
// .el-button {
//   //display: flex;
//   //height: var(--el-button-size)
//   padding: 15px 20px;
// }

// .el-button > span {
//   align-items: center;
//   display: inline-flex;
// }
// .flex {
//   display: flex;
// }
</style>