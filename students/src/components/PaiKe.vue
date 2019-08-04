<template>
 <div class="content">
        <div class="zheader">
                <h1>排课管理</h1>
            </div>
            <div class="chuangjian">
                <h3>课程信息添加</h3>
                <div class="item">
                    <input type="button" value="添加" id="jia"/>
                    <input type="button" value="取消" id="reset"/>
                </div>
                <div class="tj">
                    <table cellspacing="0" cellpadding="0">
                        <thead>
                            <tr>
                                <th>班级</th>
                                <th>讲师</th>
                                <th>班主任</th>
                                <th>课程</th>
                                <th>开始时间</th>
                                <th>结束时间</th>
                                <th>是否添加</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text"/></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><input type="button" value="添加" class="gai"/></td>
                            </tr>
                        </tbody>
                    </table>
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
                        <td>1809</td>
                        <td>李广才</td>
                        <td>曲晓芳</td>
                        <td>实训一</td>
                        <td>2019.7.27</td>
                        <td>2019.8.27</td>
                        <td><input type="button" value="修改" class="gai btn-primary" data-toggle="modal" data-target=".paike"/></td>
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
        <div class="modal paike" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">排课管理</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                        <label for="exampleInputEmail1">班级</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入班级">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">讲师</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入讲师">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">班主任</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入班主任">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">课程</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入课程">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">开始时间</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入开始时间">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">结束时间</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入结束时间">
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

</template>

<script>
export default {
    mounted(){
        var tj = document.getElementsByClassName('tj')[0]
        jia.onclick = function(){
            tj.style.display = "block"
        }
        reset.onclick = function(){
            tj.style.display = "none"
        }
    }
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
        padding-left: 20px;
        height: 150px;
    }
    .chuangjian h3{
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 10px;
        color: #434340;
        text-align: left;
    }
    .tj{
        margin-top: 20px;
        display: none;
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
    #jia{
        width: 100px;
        height: 25px;
        cursor: pointer;
    }
    #reset{
        width: 100px;
        height: 25px;
        cursor: pointer;
        margin-left:10px;
    }
    .list{
        padding-left: 20px;
        margin-top: 20px;
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
    .gai{
        width: 60px;
        height: 24px;
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
