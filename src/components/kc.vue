<template>
    <div class="content">
        <div class="cHead">
            <h1>课程</h1>
        </div>
        <div class="con">
            <p style="width:620px;">所有课程</p>
            <table style="width:60%;text-align:center;">
                <tr>
                    <th style="text-align:center;">月份</th>
                    <th style="text-align:center;">课程</th>
                </tr>
                <tr v-for="(item,index) in subject" :key="index">
                    <td>第{{item.uid}}月</td>
                    <td>{{item.subject}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            subject:[]
        }
    },
    mounted() {
        this.getsubject();
        //判断登录状态
        if(localStorage.login){
            this.logintype=JSON.parse(localStorage.login).logintype;
        }else{
            alert('请先登录');
            this.$router.push({path:"/login"});
        }
    },
    methods: {
        getsubject(){
            this.axios.post("/all/kc").then((data)=>{
                this.subject=data.data;
            })
        }
    },
}
</script>
<style scoped>
    .content {
        width: 1000px;
        height: 600px;
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
    table {
        margin-left: 10px;
        border-collapse: collapse;
    } 
    table th,table tr td{
        border:1px solid #a8aeb2;
        /* line-height: 50px; */
        padding: 5px 30px;
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