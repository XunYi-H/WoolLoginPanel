<template>
  <div>
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
    <el-tabs v-model="activeName" class="demo-tabs" stretch>
      <el-tab-pane label="传祺" name="first">
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
                    <el-button
                      @click="getVCode"
                      :disabled="time ? true : false"
                      >{{
                        time ? `${time}秒后重新获取` : "获取验证码"
                      }}</el-button
                    >
                  </template>
                </el-input>
              </el-form-item>
              <el-button
                size="large"
                type="primary"
                style="width: 100%"
                @click="doLogin"
              >
                <span>登录</span>
              </el-button>
            </el-form>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="美团" name="second" @click="generateQRCode()">
        <el-button
          size="large"
          type="primary"
          style="width: 100%"
          @click="generateQRCode()"
        >
          <span>获取二维码</span>
        </el-button>
        <!--<canvas ref="qrcode"></canvas>-->
        <img :src="qrCode" alt="QR Code" v-if="qrStatus" />
      </el-tab-pane>
    </el-tabs>
    <el-alert
      :title="this.$store.state.data"
      type="success"
      center
      effect="dark"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import QRCode from "qrcode";

import axios from "axios";
export default {
  name: "MyMain",
  data() {
    return {
      time: null,
      activeName: ref("first"),
      qrCode: "",
      qrStatus: false,
    };
  },
  created() {},
  mounted() {
    //this.generateQRCode();
  },

  methods: {
    wait(t) {
      return new Promise((e) => setTimeout(e, t));
    },
    async generateQRCode() {
      /*let { data: qrloginres } = await axios.get("./api/qrlogin");
      QRCode.toDataURL(qrloginres.data.imgUrl)
        .then((url) => {
          this.qrCode = url;
        })
        .catch((error) => {
          console.error(error);
        });
      this.qrStatus = true;
      let qruuid = qrloginres.data.qruuid;
      for (let i = 0; i < 30; i++) {
        await this.wait(2000);
        let { data: qrcheckres } = await axios.get("./api/qrcheck?" + qruuid);
        console.log(qrcheckres);
        if (qrcheckres.code == 202) {
          this.$store.commit("Change_data", qrcheckres.data);
          return;
        }
      }*/
      this.$store.commit("Change_data", "目前扫描被限制");
      /*const canvas = this.$refs.qrcode;
      QRCode.toCanvas(canvas, "6", function (error) {
        if (error) console.error(error);
        console.log("QRCode generated!");
      });*/
    },
    Change_PCode(PCode) {
      this.$store.commit("Change_PCode", PCode);
      console.log(PCode);
    },
    Change_VCode(VCode) {
      this.$store.commit("Change_VCode", VCode);
      console.log(VCode);
    },
    async getVCode() {
      let i = 60; // 倒计时秒数
      let t = setInterval(() => {
        this.time = i;
        // 60 秒倒计时结束
        if (i === 0) {
          clearInterval(t);
          this.time = null;
        }
        i--;
      }, 1000);
      const { data: res } = await axios.get("./api/sendcode", {
        params: {
          mobile: this.$store.state.PCode,
        },
      });
      console.log(res);
    },
    async doLogin() {
      const { data: res } = await axios.get("./api/login", {
        params: {
          mobile: this.$store.state.PCode,
          code: this.$store.state.VCode,
        },
      });
      this.$store.commit("Change_data", res.data);
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