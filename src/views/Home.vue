<template>
  <div id="box">
    <el-form ref="myform" :model="form" label-width="5em" :rules="rules">
      <el-form-item label="账号" prop="name">
        <el-input v-model="form.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
    <vcode
      :show="isShow"
      @onSuccess="win"
      :canvasWidth="500"
      :canvasHeight="150"
      :imgs="['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=424826379,3143641227&fm=11&gp=0.jpg']"
    ></vcode>
    <el-button type="primary" plain @click="send">登录</el-button>
    <el-button type="info" plain @click="resetForm">重置</el-button>
  </div>
</template>
<script>
import Vcode from "vue-puzzle-vcode"; //引入验证码

export default {
  components: {
    Vcode
  },
  data() {
    return {
      isShow: false,
      form: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { min: 3, max: 6, message: "最大长度为6个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 3, max: 10, message: "最大长度为10个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    send(){
      this.axios.get("/all/login",{
        params:{
          id:123
        }
      }).then((data)=>{
        console.log(data)
      }).catch("失败")
    },
    submitForm() {
      // console.log(this.$refs.myform)
      this.$refs.myform.validate(validate => {
        if (validate) {
          // alert('登录成功')
          this.isShow = true;
        }
      });
    },
    resetForm() {
      this.$refs.myform.resetFields();
    },
    win() {
      this.isShow = false;
      this.$refs.myform.resetFields();
      this.$nextTick(() => {
        setTimeout(function() {
          alert("登录成功");
        }, 20);
      });
    }
  }
};
</script>
<style scoped>
#box {
  width: 60%;
  height: 500px;
  background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563350585162&di=ac400c68d6737e0a1f226f26d8620dd0&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F038cf115a0eefaba80121985c90d9a5.jpg")
    no-repeat;
  background-size: 100% 100%;
  margin: auto;
  padding-top: 50px;
  margin: 0 auto;
}
#box input {
  width: 200px;
}
</style>