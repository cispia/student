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
                            <th>班主任</th>
                            <th>任课老师</th>
                            <th>寝室</th>
                            <th>床号</th>
                            <th>值日号</th>
                            <th>是否修改</th>
                            <th>是否删除</th>
                        </tr>
                    </thead>
                    <tbody v-if="dataList instanceof Array">
                        <tr v-for="(i,$index) in dataList" :key="$index+'zjz'">
                            <td>{{i.uid}}</td>
                            <td>{{i.name}}</td>
                            <td>{{i.master}}</td>
                            <td>{{i.teacher}}</td>
                            <td>{{i.newroom}}</td>
                            <td>{{i.bed}}</td>
                            <td>{{i.week}}</td>
                            <td>
                                <input type="button" data-toggle="modal" data-target="#case" @click="getindex($index)" value="修改" style="width:100px;height:28px;line-height:30px;background-color: aqua;border: none;border-radius: 4px;"/>
                            </td>
                            <td>
                                <input type="button" value="删除" @click="delData($index)" style="width:100px;height:28px;line-height:30px;background-color: aqua;border: none;border-radius: 4px;"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" id="case">
            <div class="modal-dialog modal-sm-10" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel"  data-toggle="modal" data-target="#login_in">修改</h4>
                    </div>
                    <div class="modal-body" style="height:auto;">

                        <div class="form-group">
                            <label for="user">旧宿舍</label>
                            <input type="text" class="form-control" id="user_in"   placeholder="旧宿舍" v-model="dataLists.oldroom" oninput="if(value.length>5)value=value.slice(0,5)">
                        </div>
                        <div class="form-group">
                            <label for="user">新宿舍</label>
                            <input type="text" class="form-control" id="user_in"   placeholder="新宿舍" v-model="dataLists.newrooms" oninput="if(value.length>5)value=value.slice(0,5)">
                        </div>
                        <div class="form-group">
                            <label for="user">床号</label>
                            <input type="number" class="form-control" id="user_in"   placeholder="床号" v-model="dataLists.bednum" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'/>
                        </div>
                        <div class="form-group">
                            <label for="user">值日号</label>
                            <input type="number" class="form-control" id="user_in"   placeholder="值日号" v-model="dataLists.weeknum" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" id="btn_in" data-dismiss="modal" @click="dataSave()">保存</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            logintype:'',//登录状态
            dataList:[],//渲染完成后用来接收数据
            dataLists:{  //往后台发送的数据
                oldroom:'',//旧宿舍
                newrooms:'',//新宿舍
                bednum:'',//床号
                weeknum:'',//值日
            },
            list:[],//接收改变的数据
        }
    },
    methods: {
        //获取下标
        getindex(v){
            this.Vindex=v;
        },
        //改变数据
        dataSave(){
            if(this.dataLists.oldroom == "" || this.dataLists.newrooms == "" || this.dataLists.bednum == "" || this.dataLists.weeknum == ""){
                alert("不能为空")
            }else{
                this.axios.post('/all/changess',{
                    dataLists:this.dataLists,
                    uid:this.dataList[this.Vindex].uid
                }).then((res)=>{
                    this.list=res.data.changess
                    this.dataList.splice(this.Vindex,1,this.list)
                    if(res.data){
                        alert(res.data.tip)
                    }
                    // changess: {uid: 123456, bed: "123", week: "123", oldroom: "123", newroom: "123", …}
                    // tip: "修改完成"
                })
            }
            
        },
        //删除数据
        delData(v){
            this.Vindex=v;
            this.axios.post('/all/delss',{
                uid:this.dataList[this.Vindex].uid
            }).then((res)=>{
                this.dataList.splice(this.Vindex,1);
                alert(res.data)
            })
        }
    },
    mounted() {
        //判断登录状态
        if(localStorage.login){
            this.logintype=JSON.parse(localStorage.login).logintype
            //后台发给我的数据
            this.axios.post("/all/ss").then((res)=>{
                this.dataList=res.data
            })
        }else{
            alert('请先登录');
            this.$router.push({path:"/login"});
        }
    },
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
    input{
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
        min-width:90px;
        min-height:20px;
    }
     table tr td input{
        width: 90px;
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
</style>