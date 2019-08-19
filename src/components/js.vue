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
                <tr v-for="(item,index) in roomList" :key="'o'+index">
                    <td>{{item.uid}}</td>
                    <td>{{item.dians}}</td>
                    <td>{{item.tableds}}</td>
                    <td>{{item.yizi}}</td>
                    <td>{{item.kongt}}</td>
                    <td>
                        <button id="delete" data-toggle="modal" @click="getindex(index)" data-target="#login_in">修改</button>
                    </td>
                    <td>
                        <button id="delete" @click="mychange(index)">删除</button>
                    </td>
                </tr>
            </table>
        </div>
        <!-- 修改 -->
        <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" id="login_in">
			<div class="modal-dialog modal-sm" role="document">
				<div class="modal-content" >
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="myModalLabel"  data-toggle="modal" data-target="#login_in">修改</h4>
					</div>
					<div class="modal-body" >
                        <div class="form-group">
							<label for="user">电风扇</label>
							<input type="number" class="form-control" id="user_in" style="top:40px;width:98%;margin-left:1%;" v-model="Assets.shan" placeholder="电风扇" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'/>
						</div>
                        <div class="form-group">
							<label for="user">桌子</label>
							<input type="number" class="form-control" id="user_in" style="top:40px;width:98%;margin-left:1%;" v-model="Assets.mtable" placeholder="桌子" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))' />
						</div>
                        <div class="form-group">
							<label for="user">椅子</label>
							<input type="number" class="form-control" id="user_in" style="top:40px;width:98%;margin-left:1%;" v-model="Assets.myizi" placeholder="椅子" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'/>
						</div>
                        <div class="form-group">
							<label for="user">空调</label>
							<input type="number" class="form-control" id="user_in" style="top:40px;width:98%;margin-left:1%;" v-model="Assets.mkong" placeholder="空调" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'/>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-primary" @click="updateasset()" data-dismiss="modal" id="btn_in">保存</button>
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
            roomList:[],
            Assets:{
                shan:'',
                mtable:'',
                myizi:'',
                mkong:''
            },
            Vindex:0
        }
    },
    methods: {
        //获取下标
        getindex(v){
            this.Vindex=v;
        },
        //更新教室资产
        updateasset(){
            if(this.Assets.shan == '' || this.Assets.mtable == '' || this.Assets.myizi == '' || this.Assets.mkong == ''){
                alert("请修改资产")
                return false;
            }else{
                this.axios.post("/all/asset",{
                    uid:this.roomList[this.Vindex].uid,
                    my:this.Assets
                }).then((data)=>{
                    if(data.data.asset){
                        var json=data.data.asset; 
                        this.roomList.map((item,index)=>{
                            if(item.uid==json.uid){
                                this.roomList.splice(index,1,json);
                            }
                        })
                    alert(data.data.tip)
                    this.Assets.shan = '';
                    this.Assets.mtable = '';
                    this.Assets.myizi = '';
                    this.Assets.mkong='';
                    }
                })
            }
            
        },
        //创建完成后请求
        classroomnum2(){
            this.axios.post('/all/class').then(res=>{
                this.roomList=[];
                this.roomList=res.data;
            })
        },
        //删除获取下标
        mychange(v){
            this.Vindex=v;
            this.delList=this.roomList[this.Vindex].uid;
            this.delroom();
        },
        //删除成功
        delroom(){
            if(this.delList == ''){
                alert("数据缺失");
                return false;
            }else{
                this.axios.post('/all/deleclass',{
                    delList:this.delList,
                }).then(res=>{
                    if(res.data=="删除完成!"){
                        this.roomList.splice(this.Vindex,1);
                        alert(res.data);
                    }
                })
            }
            
        }
    },
    mounted () {
        this.classroomnum2();
        //判断登录状态
        if(localStorage.login){
            this.logintype=JSON.parse(localStorage.login).logintype
        }else{
            alert('请先登录');
            this.$router.push({path:"/login"});
        }
    }
}
</script>
<style scoped>
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        }
        input[type="number"]{
        -moz-appearance: textfield;
        }
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