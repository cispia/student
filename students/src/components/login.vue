<template>
  <div class="content">
    <p class="login">
      <span @click="cardId=0" :class="{'active':cardId==0}">登录</span> /
      <span @click="cardId=1" :class="{'active':cardId==1}">注册</span>
    </p>
    <form v-show="cardId==0">
      <div class="form-group">
        <label for="exampleInputNumber1" style="color: #fff;">学号</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputNumber1"
          placeholder="学号"
          v-model="xuehao"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1" style="color: #fff;" >密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="密码" v-model='mima'/>
      </div>
      <div class="checkbox">
        <label>
          <input type="radio" name="user" checked  @click="abc($event)"/> 学生
        </label>
        <label>
          <input type="radio" name="user" @click="abc($event)" /> 老师
        </label>
      </div>
      <div class="button">
        <button class="btn" @click="sendin()">登录</button>
        <button class="btn">重置</button>
      </div>
    </form>
    <form v-show="cardId==1">
      <div class="form-group">
        <label for="number" style="color: #fff;">学号</label>
        <input type="text" class="form-control" id="number" placeholder="学号" v-model="xuehao" />
      </div>
      <div class="form-group">
        <label for="password" style="color: #fff;">密码</label>
        <input type="password" class="form-control" id="password" placeholder="密码" v-model="mima" />
      </div>
      <div class="checkbox">
        <label>
          <input type="radio" value="学生" name="user" checked @click="abc($event)"/> 学生
        </label>

        <label>
          <input type="radio" value="老师" name="user" @click="abc($event)"/>
          老师
        </label>
      </div>

      <div class="button">
        <button class="btn" @click="sendup()">注册</button>
        <button class="btn">重置</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardId: 0, //选项卡
      xuehao:'',//学号
      mima:"",//密码
      logintype:'',   //登录状态
    };
  },
  methods: {
    //登录
    sendin() {
      this.axios.post("/all/in", {
          params: {
            xuehao:this.xuehao, //学号
            mima:this.mima,//密码
            logintype:this.logintype//登录状态
          }
        }).then(data => {
          data.data.tip?alert(data.data.tip):alert(data.data) //弹出信息
          this.$router.push({path:'/'}) //跳转
          this.$parent.$data.active=0; //找父级然后直接让ative为0
          this.$parent.$data.loginstatus="退出登录"; //让最后一个的innertext 变为退出登录
          localStorage.login=JSON.stringify(data.data);//存储登录信息
        }).catch("失败");
    },
    //注册
    sendup() {
      this.axios.post("/all/up", {
          params: {
            xuehao:this.xuehao, //学号
            mima:this.mima, //密码
            logintype:this.logintype //注册状态
          }
        }).then(data => {
          alert(data.data); //成功弹出
          
        }).catch("失败"); //失败回调
    },
    
    abc(e){
      this.logintype=e.path[0].defaultValue //单选框选择时触发
    },
  }
};
</script>
<style scoped>
.button {
  text-align: center;
}

.button > button {
  margin: 0 10px;
}

.content {
  width: 1000px;
  height: 600px;
  /* background: pink; */
  margin-left: 308px;
}

.header > li {
  float: left;
}

.content {
  width: 1000px;
  min-height: 600px;
  margin-left: 308px;
  background: url(../assets/05458PIC5rJ_1024.jpg)
    no-repeat;
}

.login {
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  color: #fff;
  padding-top: 100px;
}

.login > span {
  cursor: pointer;
}

.login > span.active {
  color: red;
  font-size: 1.1em;
}

form {
  margin-top: 50px;
}

.form-group {
  width: 500px;
  margin: 0 auto;
}

.checkbox {
  text-align: center;
}

.checkbox > label {
  margin: 0 30px;
  color: #fff;
}
</style>
