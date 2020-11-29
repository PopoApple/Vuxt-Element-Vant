<template>
  <div class="container">
    <div class="sec">
      <el-button>element按钮</el-button>
    </div>
    <div class="sec">
      <van-button>vant按钮</van-button>
    </div>
    <div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'
import { Form } from 'vant'
import { Field } from 'vant'

export default {
    components: {
        VanButton: Button,
        VanForm: Form,
        VanField: Field,
    },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values)
    },
  },
}
</script>

<style scoped>
.container {
  background: #eee;
  padding: 20px 10px;
}
.sec {
  margin-bottom: 10px;
}
</style>

