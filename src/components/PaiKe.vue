<template>
  <div class="content">
    <div class="zheader">
      <h1>排课管理</h1>
    </div>
    <div class="list">
      <h3>
        课程列表
        <span style="float:right;margin-right:80px;">
          <a
            href="#"
            style="font-size:20px;text-decoration:none"
            data-toggle="modal"
            data-target="#luru"
          >录入</a>
        </span>
      </h3>
      <table cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th>班级</th>
            <th>讲师</th>
            <th>班主任</th>
            <th>课程</th>
            <th>开始时间</th>
            <th>结束时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-if="dataLists instanceof Array">
          <tr v-for="(i,$index) in dataLists" :key="$index+'z'">
            <td>{{i.uid}}</td>
            <td>{{i.js}}</td>
            <td>{{i.bs}}</td>
            <td>{{i.subj}}</td>
            <td>{{i.startday}}</td>
            <td>{{i.endday}}</td>
            <td>
              <input
                type="button"
                data-toggle="modal"
                data-target="#case"
                value="删除"
                style="width:100px;height:28px;line-height:30px;background-color: aqua;border: none;border-radius: 4px;"
                @click="delData($index)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 录入 -->
    <div
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="mySmallModalLabel"
      id="luru"
    >
      <div class="modal-dialog modal-sm-10" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel" data-toggle="modal" data-target="#login_in">录入</h4>
          </div>
          <div class="modal-body" style="height:auto;">
            <div class="form-group">
              <label for="user">班级</label>
              <select class="form-control" v-model="dataList.classroom">
                <option v-for="(i,$index) in classList" :value="i.uid" :key="'xx'+$index">{{i.uid}}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="user">讲师</label>
              <select class="form-control" v-model="dataList.teacher">
                <option
                  v-for="(i,$index) in laoshiList"
                  :value="i.name"
                  :key="'xx'+$index"
                >{{i.name}}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="user">班主任</label>
              <input
                type="text"
                class="form-control"
                id="user_in"
                placeholder="班主任"
                v-model="dataList.master"
                oninput="if(value.length>20)value=value.slice(0,20)"
              />
            </div>
            <div class="form-group">
              <label for="user">课程</label>
              <select
                class="form-control"
                v-model="dataList.kecheng"
              >
                <option v-for="(i,$index) in subject" :value="i.subject" :key="$index">{{i.subject}}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="user">开始时间</label>
              <input
                type="number"
                class="form-control"
                id="user_in"
                placeholder="开始时间"
                v-model="dataList.kaishishijian"
                oninput="if(value.length>10)value=value.slice(0,10)"
                onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode)))"
              />
            </div>
            <div class="form-group">
              <label for="user">结束时间</label>
              <input
                type="number"
                class="form-control"
                id="user_in"
                placeholder="结束时间"
                v-model="dataList.jieshushijian"
                oninput="if(value.length>10)value=value.slice(0,10)"
                onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode)))"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              id="btn_in"
              @click="paike()"
              data-dismiss="modal"
            >录入</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
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
      dataList: {
        classroom: "",
        teacher: "",
        master: "",
        kecheng: "",
        kaishishijian: "",
        jieshushijian: ""
      },
      dataLists: [],
      laoshiList: [],
      classList: [],
      subject:[]
    };
  },
  methods: {
     //获取课程
        getsubject(){
            this.axios.post("/all/kc").then((data)=>{
                this.subject=data.data;
            })
        },
    //获取所有老师
    laoshi() {
      this.axios.post("/all/tet").then(res => {
        this.laoshiList = res.data;
      });
    },
    //获取所有班级
    classroomlist() {
      this.axios.post("/all/tetclass").then(res => {
        this.classList = res.data;
      });
    },
    //获取下标
    getindex(v) {
      this.Vindex = v;
    },
    //排课
    paike() {
      if (this.dataList.classroom == "") {
        alert("班级不能为空");
      } else if (this.dataList.teacher == "") {
        alert("讲师不能为空");
      } else if (this.dataList.master == "") {
        alert("班主任不能为空");
      } else if (this.dataList.kecheng == "") {
        alert("课程不能为空");
      } else if (this.dataList.kaishishijian == "") {
        alert("开始时间不能为空");
      } else if (this.dataList.jieshushijian == "") {
        alert("结束时间不能为空");
      } else {
        this.axios
          .post("/all/admin", {
            dataList: this.dataList
          })
          .then(res => {
            if(res.data instanceof Object){
            this.dataLists = res.data;
              alert("录入成功");
              for(var item in this.dataList){
                this.dataList[item]="";
              }
            }else{
              alert(res.data)
            }
          });
      }
    },
    delData(v) {
          this.Vindex = v;
      this.axios
        .post("/all/delke", {
          uid: this.dataLists[this.Vindex].uid
        })
        .then(res => {
          this.dataLists.splice(this.Vindex, 1);
          alert(res.data);
        });
    }
  },
  mounted() {
    this.laoshi();
    this.getsubject();
    this.classroomlist();
    //判断登录状态
    if (localStorage.login) {
      this.logintype = JSON.parse(localStorage.login).logintype;
      if (this.logintype != "管理员") {
        alert("当前用户没有该权限");
        this.$router.push({ path: "/" });
      } else {
        this.axios.post("/all/kecheng").then(res => {
          this.dataLists = res.data;
        });
      }
    } else {
      alert("请先登录");
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}
input {
  outline: none;
}
.content {
  width: 1000px;
  margin-left: 308px;
}
.zheader h1 {
  height: 60px;
  font-weight: 500;
  line-height: 60px;
  padding-left: 20px;
  color: #434340;
  border-bottom: 1px solid #ccc;
}
.zheader h3 {
  line-height: 60px;
}
.chuangjian {
  padding-left: 20px;
  height: 150px;
}
.chuangjian h3 {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;
  color: #434340;
  text-align: left;
}
.tj {
  margin-top: 20px;
  display: none;
}
.item {
  float: left;
  margin-left: 5px;
  margin: 4px;
}
.item:last-child {
  margin-left: 30px;
}
.item input {
  width: 100px;
  height: 25px;
}
#jia {
  width: 100px;
  height: 25px;
  cursor: pointer;
}
#reset {
  width: 100px;
  height: 25px;
  cursor: pointer;
  margin-left: 10px;
}
.list {
  padding-left: 20px;
  margin-top: 20px;
}
.list h3 {
  margin-bottom: 5px;
}
table {
  width: 900px;
}
table tr th,
table tr td {
  border: 1px solid;
  text-align: center;
  border-spacing: 0px;
  min-width: 120px;
  height: 30px;
}
.gai {
  width: 60px;
  height: 24px;
  cursor: pointer;
}
</style>
