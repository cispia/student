<template>
 <div class="content">
        <div class="zheader">
                <h1>排课管理</h1>
            </div>
            <div class="chuangjian">
                <h3>课程信息添加</h3>
                <div class="item">
                    班级：
                    <input type="text"/>
                </div>
                <div class="item">
                    讲师：
                    <input type="text"/>
                </div>
                <div class="item">
                    班主任：
                    <input type="text"/>
                </div>
                <div class="item">
                    课程：
                    <input type="text"/>
                </div>
                <div class="item">
                    开始时间：
                    <input type="text"/>
                </div>
                <div class="item">
                    结束时间：
                    <input type="text"/>
                </div>
                <div class="item">
                    <input type="button" value="添加" class="jia"/>
                    <input type="button" value="重置" class="reset"/>
                </div>
            </div>
        <div class="list">
            <h3>课程列表</h3>
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
                <tbody>
                    <tr>
                        <td><input type="text" value="1809"></td>
                        <td><input type="text" value="李广才"></td>
                        <td><input type="text" value="曲晓芳"></td>
                        <td><input type="text" value="实训一"></td>
                        <td><input type="text" value="2019.7.27"></td>
                        <td><input type="text" value="2019.8.27"></td>
                        <td><input type="button" value="修改" class="gai"/></td>
                    </tr>
                </tbody>
            </table>
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
    </div>
</template>

<script>


export default {
}
</script>

<style scoped>
    input{
        border:none;
        outline:none;
    }
   .content {
        width: 1000px;
        margin-left: 308px;
    }
    .zheader h1{
        height: 60px;
        font-weight: 500;
        line-height: 60px;
        padding-left: 20px;
        color: #434340;
        border-bottom:1px solid #ccc;
    }
    .zheader h3{
        line-height: 60px;
    }
    .chuangjian{
        height: 100px;
        padding-left: 20px;
    }
    .chuangjian h3{
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 10px;
        color: #434340;
        text-align: left;
    }
    .item{
        float: left;
        margin-left: 5px;
        margin: 4px;
    }
    .item:last-child{
        margin-left: 30px;
    }
    .item input{
        width: 100px;
        height: 25px;
    }
    .jia{
        width: 100px;
        height: 25px;
        cursor: pointer;
    }
    .reset{
        width: 100px;
        height: 25px;
        cursor: pointer;
        margin-left:10px;
    }
    .list{
        padding-left: 20px;
    }
    .list h3{
        margin-bottom: 5px;
    }
    table{
        width: 900px;
    }
    table tr th,table tr td{
        border: 1px solid;
        text-align: center;
        border-spacing: 0px;
        min-width:120px;
        height:30px;
    }
    table tr td input{
        width: 120px;
        min-height: 30px;
        text-align: center;
    }
    .gai{
        width: 60px;
        height: 20px;
        cursor: pointer;
    }
    .footer{
        margin-top:50px;
        background-color: cyan;
        width: 900px;
        margin-bottom: 10px;
    }
    .tatol{
        padding-left: 40px;
    }
    .dang{
        padding-left: 20px;
    }
    .left{
        float: left;
    }
    .ipt{
        width: 20px;
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
