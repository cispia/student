<template>
    <div class="content">
        <div class="zheader">
            <h1>宿舍</h1>
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
                            <td>1504990</td>
                            <td>Rain</td>
                            <td>1809</td>
                            <td>曲晓芳</td>
                            <td>男</td>
                            <td>200</td>
                            <td>1</td>
                            <td>1</td>
                            <td>7916516588521561</td>
                            <td>
                                <input type="button" value="修改"  class="gai" data-toggle="modal" data-target=".sushe"/>
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
            <div class="modal sushe" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">宿舍</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                        <label for="exampleInputEmail1">学号</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入学号">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">姓名</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入姓名">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">班级</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入班级">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">班主任</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入班主任">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">性别</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入性别">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">寝室</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入寝室">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">床号</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入床号">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">值日号</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入值日号">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">手机号</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入手机号">
                    </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">修改</button>
                    </div>
                    </div>
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
    .zjieshao{
        margin-left: 20px;
        margin-top: 20px;
    }
    table{
        width: 900px;
    }
    table tr th,table tr td{
        border: 1px solid;
        text-align: center;
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