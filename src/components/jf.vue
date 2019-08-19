<template>
  <div class="content">
    <div class="zheader">
      <h1>综合积分</h1>
    </div>
    <div class="zjieshao">
      <p>
        扣分制度：迟到 5分、旷课 10分、工装未穿 5分、上课玩游戏 10分、
        <span style="float:right;margin-right:80px;">
          <a
            href="#"
            style="font-size:20px;text-decoration:none"
            data-toggle="modal"
            data-target="#luru"
          >录入</a>
        </span>
      </p>
    </div>
    <div class="zcontent">
      <table cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th>学号</th>

            <th>扣除人</th>

            <th>时间</th>

            <th>原因</th>

            <th>分值</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(i,$index) in inputList" :key="$index+'z'">
            <td>{{i.uid}}</td>

            <td>{{i.name}}</td>

            <td>{{i.date}}</td>

            <td>{{i.yuanyin}}</td>

            <td>-{{i.fenzhi}}</td>
          </tr>
        </tbody>
      </table>
    </div>
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
              <label for="user">学号</label>
              <input
                type="number"
                class="form-control"
                id="user_in"
                placeholder="学号"
                v-model="inputs.xuehao"
                @blur="onblur()"
                oninput="if(value.length>5)value=value.slice(0,5)"
              onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'/>
              <span style="color:red;">*&nbsp;&nbsp;&nbsp;&nbsp;{{typeone}}</span>
            </div>
            <div class="form-group">
              <label for="user">扣除人</label>
              <input
                type="text"
                class="form-control"
                id="user_in"
                placeholder="扣除人"
                v-model="inputs.koufenren"
                :disabled="bas"
                oninput="if(value.length>20)value=value.slice(0,20)"
              />
            </div>
            <div class="form-group">
              <label for="user">时间</label>
              <input
                type="number"
                class="form-control"
                id="user_in"
                placeholder="时间"
                v-model="inputs.shijian"
                :disabled="bas"
                oninput="if(value.length>10)value=value.slice(0,10)"
              onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'/>
            </div>
            <div class="form-group">
              <label for="user">原因</label>
              <input
                type="text"
                class="form-control"
                id="user_in"
                placeholder="原因"
                v-model="inputs.yuanyin"
                :disabled="bas"
                oninput="if(value.length>120)value=value.slice(0,120)"
              />
            </div>
            <div class="form-group">
              <label for="user">分值</label>
              <input
                type="number"
                class="form-control"
                id="user_in"
                placeholder="分值"
                v-model="inputs.fenzhi"
                :disabled="bas"
                oninput="if(value.length>5)value=value.slice(0,5)"
              onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'/>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              id="btn_in"
              data-dismiss="modal"
              @click="baocun()"
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
      inputs: {
        xuehao: this.xuehao,
        koufenren: this.koufenren,
        shijian: this.shijian,
        yuanyin: this.yuanyin,
        fenzhi: this.fenzhi,
        score: ""
      },
      inputList: [],
      typeone: "",
      bas: true
    };
  },
  methods: {
    onblur() {
      if (this.inputs.xuehao) {
        this.axios.post("/all/query", {
            uid: this.inputs.xuehao
          }).then(res => {
            this.typeone = res.data.tip ? res.data.tip : res.data;
            this.inputs.score = res.data.score;
            if (res.data.tip) {
              this.bas = false;
            } else {
              this.bas = true;
            }
          });
      }else{
        alert("学号为空");
      }
    },
    baocun() {
      if (
        this.inputs.xuehao == "" ||
        this.inputs.koufenren == "" ||
        this.inputs.shijian == "" ||
        this.inputs.yuanyin == "" ||
        this.inputs.fenzhi == "" ||
        this.inputs.score == ""
      ) {
        alert("不能为空");
      } else {
        this.axios
          .post("/all/kjf", {
            inputs: this.inputs
          })
          .then(res => {
            this.inputList = res.data.change;
            alert(res.data.tip);
          });
      }
    }
  },
  mounted() {
    //判断登录状态
    if (localStorage.login) {
      this.logintype = JSON.parse(localStorage.login).logintype;
      this.axios.post("/all/jfquery").then(res => {
        this.inputList = res.data;
      });
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
  height: 600px;
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
.zjieshao {
  margin-left: 20px;
  margin-top: 20px;
}
.zcontent {
  margin-left: 20px;
  padding-top: 20px;
}

table {
  width: 900px;
}

table tr th,
table tr td {
  border: 1px solid;
  text-align: center;
  border-spacing: 0px;
  padding-left: 4px;
  min-width: 120px;
  height: 30px;
}
table tr td input {
  width: 120px;
  min-height: 30px;
  text-align: center;
}
</style>