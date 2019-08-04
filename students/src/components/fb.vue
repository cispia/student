<template>
     <div class="content">
        <div class="cHead">
            <h1>分班</h1>
        </div>
        <div class='con'>
            <table cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <th>班级</th>
                        <th>人数</th>
                        <th>月度</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1809</td>
                        <td>100</td>
                        <td>实训一</td>
                        <td><input type="button" value="合并/拆分" class="gai btn-primary" data-toggle="modal" data-target=".fb"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="modal fb" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">分班</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                        <label for="exampleInputEmail1">班级</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入班级">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">人数</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入人数">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">月度</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入月度">
                    </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">合并/拆分</button>
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
    .content {
        width: 1000px;
        margin-left: 308px;
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
    .con{
        text-align:center;
    }
    .con > p{
        line-height:50px;
    }
</style>