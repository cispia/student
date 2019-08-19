<template>
  <div class="content">
    <div class="cHead">
      <h1>班级</h1>
    </div>
    <div class="con">
      <p style="width:500px;">
        所有班级
        <span style="float:right;">
          <a
            href="#"
            style="font-size:20px;text-decoration: none;"
            data-toggle="modal"
            data-target="#luru"
          >录入</a>
        </span>
      </p>
      <table>
        <tr>
          <th>班级</th>
          <th>是否修改</th>
          <th>是否删除</th>
        </tr>
        <tr v-for="(i,$index) in roomList" :key="$index">
          <td>{{i.uid}}</td>
          <td>
            <button
              id="modify"
              data-toggle="modal"
              @click="getindex($index)"
              data-target="#login_in"
            >修改</button>
          </td>
          <td>
            <button id="delete" @click="mychange($index)">删除</button>
          </td>
        </tr>
      </table>
    </div>
    <!-- 修改 -->
    <div
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="mySmallModalLabel"
      id="login_in"
    >
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel" data-toggle="modal" data-target="#login_in">修改</h4>
          </div>
          <div class="modal-body" style="height:100px;">
            <div class="form-group">
              <label for="user">班级</label>
              <input
                type="number"
                class="form-control"
                id="user_in"
                style="top:40px;width:98%;margin-left:1%;"
                placeholder="班级"
                v-model="newname"
              oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'/>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click="changeroom()"
              id="btn_in"
            >保存</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 录入 -->
    <div
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="mySmallModalLabel"
      id="luru"
    >
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">班级</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="user">班级</label>
              <input
                type="number"
                class="form-control"
                id="user_up"
                placeholder="班级"
                style="top:40px;width:98%;margin-left:1%;"
                v-model="clroom"
              oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'/>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              id="btn_up"
              @click="classroomnum()"
            >确定</button>
            <button type="button" class="btn btn-default">取消</button>
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
      clroom: "", //录入
      roomList: [], //创建完成后
      delList: "", //要删除的哪一条数据
      Vindex: 0, //下标
      newname: "" //新班级
    };
  },
  methods: {
    //录入
    classroomnum() {
      if(this.clroom == ''){
        alert("录入为空，请输入");
        return false;
      }else{
        this.axios
        .post("/all/croom", {
          clroom: this.clroom
        })
        .then(res => {
          if (res.data.room) {
            this.roomList = [];
            this.roomList = res.data.room;
            alert(res.data.tip);
            this.clroom="";
          } else {
            alert(res.data);
            this.clroom="";
          }
        })
      }
    },
    //创建完成后请求
    classroomnum2() {
      this.axios.post("/all/class").then(res => {
        this.roomList = [];
        this.roomList = res.data;
      });
    },
    //修改班级信息
    changeroom() {
      if(this.newname == ''){
        alert("请修改班级");
        return false;
      }else{
        this.axios
        .post("/all/changeclassroom", {
          uid: this.roomList[this.Vindex].uid,
          newname: this.newname
        })
        .then(data => {
          if (data.data.tip == "修改完成") {
            this.roomList = data.data.room;
            alert(data.data.tip);
          } else {
            alert("已有该班级");
          }
        });
      }
    },
    // 获取下标
    getindex(v) {
      this.Vindex = v;
    },
    //删除获取下标
    mychange(v) {
      this.Vindex = v;
      this.delList = this.roomList[this.Vindex].uid;
      this.delroom();
    },
    //删除成功
    delroom() {
      if (this.delList == "") {
        alert("参数缺失");
        return false;
      } else {
        this.axios
          .post("/all/deleclass", {
            delList: this.delList
          })
          .then(res => {
            if (res.data == "删除完成!") {
              this.roomList.splice(this.Vindex, 1);
              alert(res.data);
            }
          });
      }
    }
  },
  mounted() {
    //判断登录状态
    if (localStorage.login) {
      this.logintype = JSON.parse(localStorage.login).logintype;
      this.classroomnum2();
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
input[type="number"]{
  -moz-appearance: textfield;
}
.content {
  width: 1000px;
  height: 600px;
  margin-left: 308px;
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
table {
  margin-left: 10px;
  border-collapse: collapse;
}
table th,
table tr td {
  border: 1px solid #a8aeb2;
  padding: 5px 60px;
  position: relative;
  height: 36px;
}
#addpeople {
  display: none;
  margin-bottom: 10px;
}
#addBtn,
#modify,
#delete {
  width: 60px;
  height: 30px;
  background-color: aqua;
  border: none;
  border-radius: 4px;
}
.con p {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;
  margin-left: 20px;
  color: #434340;
}
input {
  width: 100%;
  height: 40px;
  border: 1px solid #a8aeb2;
  position: absolute;
  left: 0;
  top: 0;
}
</style>