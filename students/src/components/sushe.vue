<template>
    <div class="content">
        <div class="zheader">
            <h1>宿舍</h1>
        </div>
        <div class="zContent">
            <input type="button" value="添加" class="jiaBtn"/>
            <div class="xia">
                <div class="zItem">
                    寝室：
                    <input type="text"/>
                </div>
                <div class="zItem">
                    姓名：
                    <input type="text"/>
                </div>
                <div class="zItem">
                    班级：
                    <input type="text"/>
                </div>
                <div class="zItem">
                    班主任：
                    <input type="text"/>
                </div>
                <div class="zItem">
                    床号：
                    <input type="text"/>
                </div>
                <div class="zItem">
                    值日号：
                    <input type="text"/>
                </div>
                <div class="zItem">
                    手机号：
                    <input type="text"/>
                </div>
            </div>
            <div class="zList">
                <table cellspacing="0" cellpadding="0">
                    <thead>
                        <tr>
                            <th>学号</th>
                            <th>姓名</th>
                            <th>班级</th>
                            <th>班主任</th>
                            <th>性别</th>
                            <th>寝室</th>
                            <th>床号</th>
                            <th>值日号</th>
                            <th>手机号</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" value="1504990"/></td>
                            <td><input type="text" value="Rain"/></td>
                            <td><input type="text" value="1809"/></td>
                            <td><input type="text" value="曲晓芳"/></td>
                            <td><input type="text" value="男"/></td>
                            <td><input type="text" value="201"/></td>
                            <td><input type="text" value="1"/></td>
                            <td><input type="text" value="1"/></td>
                            <td><input type="text" value="1489965485648986"/></td>
                            <td>
                                <input type="button" value="修改"  class="gai"/>
                                <input type="button" value="删除"  class="del"/>
                            </td>
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
    .zheader{
        height: 60px;
        padding-top: 0;
        line-height: 40px;
        padding: 0 20px;
        border-bottom:1px solid #ccc;
    }
    .zheader h1{
        height: 60px;
        font-weight: 500;
        line-height: 60px;
        padding-left: 20px;
        color: #434340; 
    }
    .jiaBtn{
        margin-left: 20px;
        margin-top: 10px;
        padding: 6px;
        background-color: green;
        border: 1px solid green;
        color: #fff;
        border-radius: 5px; 
    }
    .xia{
        float: right;
        margin-right: 20px;
        margin-top: 20px;
    }
    .zItem{
        float: left;
    }
    .zItem input{
        width: 60px;
        height: 20px;
        vertical-align: middle;
        margin-right:10px; 
    }
    .zList{
        margin-left: 20px;
        margin-top: 20px;
    }
    table{
        width: 900px;
    }
    table tr th,table tr td{
        border: 1px solid;
        text-align: left;
        padding-left: 4px;
        min-width:100px;
        min-height:20px;
    }
     table tr td input{
        width: 100px;
        min-height: 20px;
        text-align: center;
    }
    .gai{
        width: 40px;
        height: 20px;
        cursor: pointer;
    }
    .del{
        width: 40px;
        height: 20px;
        cursor: pointer;
        margin-left:4px;
    }
    .footer{
        background-color: cyan;
        width: 900px;
        margin-bottom: 10px;
        margin-top:20px;
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