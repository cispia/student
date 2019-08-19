<template>
  <div class="content">
    <p class="login">
      <span @click="cardId=0" :class="{'active':cardId==0}">登录</span> /
      <span @click="cardId=1" :class="{'active':cardId==1}">注册</span>
    </p>
    <form v-show="cardId==0">
      <div class="form-group">
        <label for="exampleInputNumber1" style="color: #fff;">学号</label>
        <input type="number" class="form-control" id="exampleInputNumber1" placeholder="学号" v-model="xuehao" oninput="if(value.length>20)value=value.slice(0,20)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'/>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1" style="color: #fff;" >密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="密码" v-model='mima' oninput="if(value.length>20)value=value.slice(0,20)"/>
      </div>
      <div class="button">
        <button class="btn" type="button" @click="sendin()">登录</button>
        
        <button class="btn" type="button">重置</button>
      </div>
    </form>
    <form v-show="cardId==1">
      <div class="form-group">
        <label for="number" style="color: #fff;">学号</label>
        <input type="number" class="form-control" id="number" placeholder="学号" v-model="xuehao" oninput="if(value.length>20)value=value.slice(0,20)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'/>
      </div>
      <div class="form-group">
        <label for="password" style="color: #fff;">密码</label>
        <input type="password" class="form-control" id="password" placeholder="密码" v-model="mima" oninput="if(value.length>20)value=value.slice(0,20)" />
      </div>
      <div class="checkbox">
        <label>
          <input type="radio" value="学生" name="user" v-model="logintype"/> 学生
        </label>

        <label>
          <input type="radio" value="老师" name="user" v-model="logintype"/> 老师
        </label>
        <label>
          <input type="radio" value="管理员" name="user" v-model="logintype"/> 管理员
        </label>
      </div>

      <div class="aaa">
        <button class="btn" @click="sendup()" type="button">注册</button>
        <button class="btn" type="button">重置</button>
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
      mima:'',//密码
      logintype:'',   //登录状态
    };
  },
  beforeMount(){
    localStorage.login="";
    localStorage.message="";
    this.$parent.$data.loginstatus="登录注册"; 
  },
  methods: {
    //登录
    sendin() {
      if(this.xuehao && this.mima){
        this.axios.post("/all/in", {
         params: {
            xuehao:this.xuehao, //学号
            mima:this.mima,//密码
          }
        }).then((res)=>{
          res.data.tip?alert(res.data.tip):alert(res.data)
          this.xuehao='';
          this.mima='';
          if(res.data.tip){
            localStorage.login=JSON.stringify(res.data);//存储登录信息
            this.$router.push({path:'/'}) //跳转
            this.$parent.$data.loginstatus="退出登录"; //让最后一个的innertext 变为退出登录
          }
        })
      }else{
        alert('学号密码错误!!!')
        this.xuehao='';
        this.mima='';
      }
    },
    //注册
    sendup() {
      if(this.xuehao && this.mima && this.logintype){
        this.axios.post("/all/up", {
            params: {
              xuehao:this.xuehao, //学号
              mima:this.mima, //密码
              logintype:this.logintype //注册状态
            }
        }).then((res)=>{
          alert(res.data)
          if(res.data){
            this.cardId=0;
            this.xuehao='';
            this.mima='';
            this.logintype='';
          }
        })
      }else{
        alert('学号或者密码注册类型错误!!');
        this.xuehao='';
        this.mima='';
        this.logintype='';
      }
        
    },
  }
};
</script>
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"]{
  -moz-appearance: textfield;
}
.button {
  padding-top:20px;
  text-align: center;
}

.button > button {
  margin: 0 10px;
}

.aaa {
  text-align: center;
}

.aaa > button {
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
