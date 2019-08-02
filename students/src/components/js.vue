<template>
    <div class="content">
        <div class="cHead">
            <h1>资产</h1>
        </div>
        <div class="con">
            <p>所有资产</p>
            <table>
                <tr>
                    <th>班级</th>
                    <th>电风扇</th>
                    <th>桌子</th>
                    <th>椅子</th>
                    <th>空调</th>
                    <th>是否修改</th>
                    <th>是否删除</th>
                </tr>
                <tr>
                    <td>
                        1809
                    </td>
                    <td>
                        2
                    </td>
                    <td>
                        29
                    </td>
                    <td>
                        29
                    </td>
                    <td>
                        1
                    </td>
                    <td>
                        <button id="delete" data-toggle="modal" data-target="#login_in">修改</button>
                    </td>
                    <td>
                        <button id="delete">删除</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        1809
                    </td>
                    <td>
                        2
                    </td>
                    <td>
                        29
                    </td>
                    <td>
                        29
                    </td>
                    <td>
                        1
                    </td>
                    <td>
                        <button id="delete" data-toggle="modal" data-target="#login_in">修改</button>
                    </td>
                     <td>
                        <button id="delete">删除</button>
                    </td>
                </tr>
            </table>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" id="login_in">
			<div class="modal-dialog modal-sm" role="document">
				<div class="modal-content" style="width:400px;">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="myModalLabel"  data-toggle="modal" data-target="#login_in">修改</h4>
					</div>
					<div class="modal-body" style="height:500px;width:400px;">
						<div class="form-group">
							<label for="user">班级</label>
							<input type="text" class="form-control" id="user_in" style="top:40px;width:98%;margin-left:1%;"  placeholder="班级">
						</div>
                        <div class="form-group">
							<label for="user">电风扇</label>
							<input type="text" class="form-control" id="user_in" style="top:40px;width:98%;margin-left:1%;"  placeholder="电风扇">
						</div>
                        <div class="form-group">
							<label for="user">桌子</label>
							<input type="text" class="form-control" id="user_in" style="top:40px;width:98%;margin-left:1%;"  placeholder="桌子">
						</div>
                        <div class="form-group">
							<label for="user">椅子</label>
							<input type="text" class="form-control" id="user_in" style="top:40px;width:98%;margin-left:1%;"  placeholder="椅子">
						</div>
                        <div class="form-group">
							<label for="user">空调</label>
							<input type="text" class="form-control" id="user_in" style="top:40px;width:98%;margin-left:1%;"  placeholder="空调">
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-primary" id="btn_in">保存</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
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
        height: 600px;
        /* background: pink; */
        margin-left: 308px;
        /* float: right; */
        /* margin-right: 100px; */
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
    table {
        margin-left: 10px;
        border-collapse: collapse;
    } 
    table th,table tr td{
        border:1px solid #a8aeb2;
        /* line-height: 50px; */
        padding: 5px 30px;
    }
    #add,#cancel{
        width: 80px;
        height: 30px;
        margin-bottom: 10px;
        background-color: aqua;
        border: none;
        border-radius: 4px; 
        margin-left: 10px;
    }
    #addpeople{
        display: none;
        margin-bottom: 10px;
    }
    #addBtn,#modify,#delete{
        width: 60px;
        height: 30px;
        background-color: aqua;
        border: none;
        border-radius: 4px; 
    }
    .con p{
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 10px;
        margin-left: 20px;
        color: #434340;
    }
    input{
        width: 100%;
        height: 50px;
    }
</style>