<template>
  <div class="content">
      <div class="cHead">
            <h1>学生资料</h1>
      </div>
        <table border="1" cellspacing="0" cellpadding="0" style="border-collapse: collapse" width="1000">
            <caption class='p'>详细资料</caption>
            <tr>
                <td rowspan="4" class="sfz">身份证照片</td>
                <td class="w80">姓名</td>
                <td class="w120">你爸爸</td>
                <td>学号</td>
                <td>135446</td>
            </tr>
            <tr>
                <td>身份证号</td>
                <td>410181199909307516aaa</td>
                <td>出生日期：1999.05.30</td>
                <td>年龄：18</td>
            </tr>
            <tr>
                <td>性别</td>
                <td>男</td>
                <td>民族</td>
                <td>汉</td>

            </tr>
            <tr>
                <td>户籍信息</td>
                <td>城市</td>
                <td>政治面貌</td>
                <td>群众</td>
            </tr>
            <tr>
                <td rowspan="2" class="h100">本人信息</td>
                <td>手机号</td>
                <td>156333358887</td>
                <td>入学日期</td>
                <td>2018.04.03</td>
            </tr>
            <tr>
                <td>学制</td>
                <td>15</td>
                <td>学籍</td>
                <td>大专</td>
            </tr>
            <tr>
                <td class="h50">父亲</td>
                <td>姓名</td>
                <td>啦啦啦</td>
                <td>电话号</td>
                <td>123456748955</td>
            </tr>
            <tr>
                <td class="h50">母亲</td>
                <td>姓名</td>
                <td>努力瑞</td>
                <td>电话号</td>
                <td>123456748955</td>
            </tr>
            <tr>
                <td class="h50">综合积分</td>
                <td>100</td>
                <td>扣分详情</td>
                <td colspan="2"></td>
            </tr>
            <tr>
                <td class="h50">宿舍</td>
                <td></td>
                <td>宿舍成员</td>
                <td colspan="3"></td>
            </tr>
            <tr>
                <td class="h50">班级</td>
                <td>1980a</td>
                <td colspan="2">月度：9月<br />讲师：<span>原灏明</span> 电话：1587948961<br /> 班主任：<span>请问</span>电话：8794561894561
                </td>
                <td><span>60</span>人</td>
            </tr>
            <tr>
                <td class="h50">作业情况</td>
                <td colspan="4"></td>
            </tr>
            <tr>
                <td class="h50">末班次数：1</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {}
</script>
<style scoped>
    .p{
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 10px;
        margin-left: 20px;
        color: #434340;
        text-align:left;
    }
    .cHead{
        height: 60px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 10px;
    }
    .cHead h1{
        font-weight: 500;
        line-height: 60px;
        margin-left: 20px;
        color: #434340;
    }
     .sfz {
        width: 150px;
        height: 200px;
    }

    .sfz>img {
        width: 100%;
        height: 100%;
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

    .w120 {
        width: 50px;
    }

    td {
        text-align: center;
    }

   

    .content {
        width: 1000px;
        height: 800px;
        margin-left: 308px;
    }
</style>