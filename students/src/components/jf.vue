<template>
  <div class="content">
    <div class="zheader">
      <h1>综合积分</h1>
    </div>

    <div class="zcontent">
      <table cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th>学号</th>

            <th>讲师</th>

            <th>扣除人</th>

            <th>时间</th>

            <th>原因</th>

            <th>分值</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><input type="text" value="1504990"/></td>

            <td><input type="text" value="李广才"/></td>

            <td><input type="text" value="李广才"/></td>

            <td><input type="text" value="2019.7.27"/></td>

            <td><input type="text" value="迟到"/></td>

            <td><input type="text" value="5"/></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="footer">
        <div class="left"><span class="dang">每页显示10条</span></div>
          <div class="right">
              <button>首页</button>
              <button>上一页</button>
              <input type="text" value="1" class="ipt"/>
              <button>下一页</button>
          </div>
      </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
input{
      border:none;
      outline:none;
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
  text-align: left;
  border-spacing: 0px;
  padding-left: 4px;
  min-width:120px;
  height:30px;
}
table tr td input{
  width: 120px;
  min-height: 30px;
  text-align: center;
}

.footer {
  background-color: cyan;
  width: 900px;
  margin-bottom: 10px;
  margin-top: 20px;
}

.tatol {
  padding-left: 40px;
}

.dang {
  padding-left: 20px;
}
.left{
  float: left;
}
.ipt{
    width:20px;
    text-align:center;
}
.right{
  float: right;
}
.right button{
  cursor: pointer;
  margin:5px;
}
</style>