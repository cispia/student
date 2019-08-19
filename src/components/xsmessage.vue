<template>
  <div class="content">
    <div class="cHead">
      <h1>学生资料</h1>
    </div>
    <table
      border="1"
      cellspacing="0"
      cellpadding="0"
      style="border-collapse: collapse"
      width="1000"
      v-show="message"
    >
      <caption class="p">详细资料</caption>
      <tr>
        <td rowspan="4" class="sfz">
          <img :src="message.msg?message.msg.cover:''" />
        </td>
        <td class="w120">姓名</td>
        <td class="w120">{{message.msg?message.msg.name:''}}</td>
        <td class="w120">学号</td>
        <td>{{message.msg?message.msg.uid:''}}</td>
      </tr>
      <tr>
        <td>身份证号</td>
        <td>{{message.msg?message.msg.IDcard:''}}</td>
        <td>年龄</td>
        <td>{{message.msg?message.msg.age:''}}</td>
      </tr>
      <tr>
        <td>性别</td>
        <td>{{message.msg?message.msg.sex:""}}</td>
        <td>学籍</td>
        <td>{{message.msg?message.msg.xueji:''}}</td>
      </tr>
      <tr>
        <td>户籍信息</td>
        <td>{{message.msg?message.msg.address:''}}</td>
        <td>大区</td>
        <td>{{message.msg?message.msg.bigarea:""}}</td>
      </tr>
      <tr>
        <td rowspan="2" class="h100">本人信息</td>
        <td>手机号</td>
        <td>{{message.msg?message.msg.phonenum:''}}</td>
        <td>入学日期</td>
        <td>{{message.msg?message.msg.joinschool:''}}</td>
      </tr>
      <tr>
        <td>学制</td>
        <td>{{message.msg?message.msg.xzhi:''}}</td>
        <td>末班次数</td>
        <td>{{message.msg?message.msg.moban:''}}</td>
      </tr>
      <tr>
        <td class="h50">父亲</td>
        <td>姓名</td>
        <td>{{message.msg?message.msg.fname:''}}</td>
        <td>电话号</td>
        <td>{{message.msg?message.msg.fnum:''}}</td>
      </tr>
      <tr>
        <td class="h50">母亲</td>
        <td>姓名</td>
        <td>{{message.msg?message.msg.mname:''}}</td>
        <td>电话号</td>
        <td>{{message.msg?message.msg.mnum:''}}</td>
      </tr>
      <tr>
        <td class="h50">综合积分</td>
        <td>{{message.msg?message.msg.score:''}}</td>
        <td>扣分详情</td>
        <td colspan="2">{{message.msg?message.msg.yuanyin?message.msg.yuanyin:"暂无":""}}</td>
      </tr>
      <tr>
        <td class="h50">宿舍</td>
        <td>{{message.msg?message.msg.newroom?message.msg.newroom:"暂无":""}}</td>
        <td>宿舍成员</td>
        <td colspan="3" class="asd">
          <span v-show="!(message.people instanceof Array)">暂无</span>
          <span v-for="(i,$index) in message.people" :key="$index">{{i.name}}</span>
        </td>
      </tr>
      <tr></tr>
      <tr>
        <td class="h50">班级</td>
        <td>讲师</td>
        <td>讲师手机号</td>
        <td>班主任</td>
        <td>班主任手机号</td>
      </tr>
      <tr>
        <td class="h50">{{message.msg?message.msg.classroom:''}}</td>
        <td>{{message.msg?message.msg.teacher:''}}</td>
        <td>{{message.msg?message.msg.teachernum:''}}</td>
        <td>{{message.msg?message.msg.master:''}}</td>
        <td>{{message.msg?message.msg.masternum:''}}</td>
      </tr>
      <tr>
        <td colspan="3" class="h50">
          <input
            type="button"
            data-toggle="modal"
            data-target="#dq"
            value="当前状态"
            @click="sstatus()"
            style="width:100px;height:28px;line-height:30px;background-color: aqua;border: none;border-radius: 4px;"
          />
        </td>
        <td colspan="3" class="h50">
          <input
            type="button"
            data-toggle="modal"
            data-target="#fk"
            value="反馈"
            style="width:100px;height:28px;line-height:30px;background-color: aqua;border: none;border-radius: 4px;"
            @click="txt"
          />
        </td>
      </tr>
    </table>
    <!-- 当前状态 -->
    <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" id="dq">
      <div class="modal-dialog modal-sm-10" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4
              class="modal-title"
              id="myModalLabel"
              data-toggle="modal"
              data-target="#login_in"
            >当前状态</h4>
          </div>
          <div class="modal-body" style="height:auto;">
            <div class="model-box">
              <h4>{{nowstatus?nowstatus.status:"在校"}}</h4>
              <div class="qj" v-show="nowstatus?nowstatus.status=='请假':''">
                <ul>
                  <li>请假天数</li>
                  <li>{{nowstatus?nowstatus.daynum:""}}天</li>
                </ul>
              </div>
              <div class="zx" v-show="nowstatus?nowstatus.status=='休学':''">
                <ul>
                  <li>
                    起始时间:
                    <span>{{nowstatus?nowstatus.startdays:""}}</span>
                  </li>
                  <li>
                    结束时间:
                    <span>{{nowstatus?nowstatus.enddays:""}}</span>
                  </li>
                  <li>
                    阶段:
                    <span>{{nowstatus?nowstatus.subject:""}}</span>
                  </li>
                </ul>
              </div>
              <div class="tx" v-show="nowstatus?nowstatus.status=='退学':''">
                <ul>
                  <li>
                    退学阶段：
                    <span>{{nowstatus?nowstatus.txsubject:""}}</span>
                  </li>
                  <li>
                    
                    <span style="text-overflow: ellipsis;white-space:nowrap;overflow:hidden;display:inline-block;width:200px;">原因：{{nowstatus?nowstatus.txyy:""}}</span>
                  </li>
                </ul>
              </div>
              <div class="bjy" v-show="nowstatus?nowstatus.status=='不就业':''">
                <ul>
                  <li>
                    日期:
                    <span>{{nowstatus?nowstatus.notjobtime:""}}</span>
                  </li>
                  <li>
                    拍照上传:
                    <span>
                      <a href="#">查看</a>
                    </span>
                  </li>
                  <li>
                    处理人:
                    <span>{{nowstatus?nowstatus.handler:""}}</span>
                  </li>
                </ul>
              </div>
              <div class="by" v-show="nowstatus?nowstatus.status=='毕业':''">
                <ul>
                  <li>
                    就业：
                  </li>
                  <li>
                    {{nowstatus?nowstatus.jobmsg:""}}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">确定</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 反馈 -->
    <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" id="fk">
      <div class="modal-dialog modal-sm-10" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="height:auto;">
            <div class="fk-box" v-if="fankuilist==''">反馈信息</div>
            <h2 style="padding-left:50px;">{{fankuilist.fuck}}</h2>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logintype: "",
      message: [], //学生信息
      nowstatus:{},
      fankuilist:{},
    };
  },
  // JSON.parse(localStorage.login).uid
  methods: {
    //查看反馈信息
    txt(){
        this.axios.post('/all/lookfuck',{
          uid:this.message.msg.uid
        }).then((res)=>{
          this.fankuilist=res.data
        })
    },
    //
    sstatus() {
      if(this.logintype=="老师"){
        this.axios.post("/all/statusxx",{
        uid:JSON.parse(localStorage.message).msg.uid
      }).then(data=>{
        this.nowstatus=data.data[0];
      })
      }else{
        this.axios.post("/all/statusxx",{
        uid:JSON.parse(localStorage.login).uid
      }).then(data=>{
        this.nowstatus=data.data[0];
      })
      }
    }
  },
  beforeMount() {
    //判断登录状态
    if (localStorage.login) {
      this.logintype = JSON.parse(localStorage.login).logintype;
      if (this.logintype != "学生" && localStorage.message == "") {
        alert("请登录学生账号,再来点击");
        this.$router.push({ path: "/" });
      } else if (this.logintype == "学生") {
        this.axios
          .post("/all/sdetails", {
            uid: JSON.parse(localStorage.login).uid
          })
          .then(res => {
            this.message = res.data;
          });
      } else {
        this.message = JSON.parse(localStorage.message);
      }
    } else {
      alert("请先登录");
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
<style scoped>
.asd {
  text-align: none;
}
.asd > span {
  font-size: 10px;
  color: red;
  padding: 0 10px;
}
.p {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;
  margin-left: 20px;
  color: #434340;
  text-align: left;
}
.cHead {
  height: 60px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}
.cHead h1 {
  font-weight: 500;
  line-height: 60px;
  margin-left: 20px;
  color: #434340;
}
.sfz {
  width: 180px;
  height: 200px;
}

.sfz > img {
  width: 95%;
  height: 95%;
}

.h100 {
  height: 100px;
}

.h50 {
  height: 50px;
}

.h120 {
  height: 120px;
}

.w80 {
  width: 80px;
}
.w10 {
  width: 10px;
}

.w120 {
  width: 200px;
}

td {
  text-align: center;
}

.sc-box ul {
  display: flex;
}
.sc-box ul li {
  flex: 1;
  text-align: center;
  border: 1px solid #ccc;
}

.content {
  width: 1000px;
  height: 800px;
  margin-left: 308px;
}
.model-box {
  border: 1px solid #ccc;
}
.model-box h4 {
  text-align: center;
}
.qj,.tx {
  border: 1px solid #ccc;
  height: 60px;
}
.qj ul,.tx ul {
  display: flex;
}
.qj ul li,.tx ul li {
  line-height: 60px;
  flex: 1;
  text-align: center;
}
.qj ul li:first-child,.tx ul li:first-child {
  border-right: 1px solid #ccc;
}
.zx ul li:last-child {
  border-left: 1px solid #ccc;
}
.zx {
  height: 60px;
}
.zx ul {
  display: flex;
}
.zx ul li {
  line-height: 60px;
  flex: 1;
  text-align: center;
}
.zx ul li:first-child {
  border-right: 1px solid #ccc;
}
.bjy ul li:last-child {
  border-left: 1px solid #ccc;
}
.bjy {
  height: 60px;
}
.bjy ul {
  display: flex;
}
.bjy ul li {
  line-height: 60px;
  flex: 1;
  text-align: center;
}
.bjy ul li:first-child {
  border-right: 1px solid #ccc;
}
.by {
  border: 1px solid #ccc;
  height: 60px;
}
.by ul {
  display: flex;
}
.by ul li {
  line-height: 60px;
  flex: 1;
  text-align: center;
}
.by ul li:first-child {
  border-right: 1px solid #ccc;
}
.tp {
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.fk-box {
  text-align: center;
  height: 100px;
  border: 1px solid #ccc;
  line-height: 100px;
}
</style>