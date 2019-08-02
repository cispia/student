<template>
    <div class="content">
        <div class="cHead">
            <h1>班级</h1>
        </div>
        <div class="con">
            <div class="zhz">
                <button id="add">添加</button>
                <button id="cancel">取消</button>
                <div id="addpeople">
                    <table>
                        <tr>
                            <th>班级</th>
                            <th>是否添加</th>
                        </tr>
                        <tr>
                            <td>
                                <!-- 1809 -->
                                <input type="text">
                            </td>
                            <td>
                                <button id="addBtn">添加</button>
                            </td>
                            <!-- <td>
                                <button id="delete">删除</button>
                            </td> -->
                        </tr>
                    </table>
                </div>
            </div>
            <p>所有班级</p>
            <table>
                <tr>
                    <th>班级</th>
                    <th>是否修改</th>
                    <th>是否删除</th>
                </tr>
                <tr>
                    <td>1809
                        <!-- <input type="text"> -->
                    </td>
                    <td><button id="modify" data-toggle="modal" data-target="#login_in">修改</button></td>
                    <td><button id="delete">删除</button></td>
                </tr>
                <tr>
                    <td>1809
                        <!-- <input type="text"> -->
                    </td>
                    <td><button id="modify" data-toggle="modal" data-target="#login_in">修改</button></td>
                    <td><button id="delete">删除</button></td>
                </tr>
            </table>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" id="login_in">
			<div class="modal-dialog modal-sm" role="document" id="xiug">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="myModalLabel"  data-toggle="modal" data-target="#login_in">修改</h4>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label for="user">班级</label>
							<input type="text" class="form-control" id="user_in" placeholder="班级">
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-primary" id="btn_in">保存</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

export default {
    methods: {
        
    },
    mounted () {
        add.onclick=function(){
        addpeople.style.display = 'block';
    }
    cancel.onclick=function(){
        addpeople.style.display = 'none';
    } 
    }
//    
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
        position:relative;
        height:36px;
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
    .zhz{
        height:120px;
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
        height: 40px;
        border: 1px solid #a8aeb2;
        position: absolute;
        left: 0;
        top: 0;
    }
    #xiug{
        width:500px;
        height:200px;
    }
</style>