<template>
    <div id="app" v-cloak>
        <header>
            学生管理系统
        </header>
        <ul class="sidebar">
            <li @click="active=0" :class="{'liActive':active==0}">
                <router-link to='/'>首页</router-link>
            </li>
            <li @click="active=1" :class="{'liActive':active==1}">
                <router-link to='./luru'>讲师/学生</router-link>
            </li>
            <li @click="active=2" :class="{'liActive':active==2}">
                <router-link to='./bj'>班级</router-link>
            </li>
            <li @click="active=3" :class="{'liActive':active==3}">
                <router-link to='./js'>教室</router-link>
            </li>
            <li @click="active=4" :class="{'liActive':active==4}">
                <router-link to='./kc'>课程</router-link>
            </li>
            <li @click="active=5" :class="{'liActive':active==5}">
                <router-link to='./xsmessage'>学生资料</router-link>
            </li>
            <li @click="active=6" :class="{'liActive':active==6}">
                <router-link to='./PaiKe'>排课管理</router-link>
            </li>
            <li @click="active=7" :class="{'liActive':active==7}">
                <router-link to='./xtgg'>分班</router-link>
            </li>
            <li @click="active=8" :class="{'liActive':active==8}">
                <router-link to='./sushe'>宿舍</router-link>
            </li>
            <li @click="active=9" :class="{'liActive':active==9}">
                <router-link to='./jf'>综合积分</router-link>
            </li>
            <li @click="active=10" :class="{'liActive':active==10}">
                <router-link to='./xtgg'>系统公告</router-link>
            </li>
            <li @click="styleactive" :class="{'liActive':active==11}">
                <router-link to='./login'>{{loginstatus}}</router-link>
            </li>
        </ul>
        <router-view/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0, //列表状态
            loginstatus:"登录/注册"//动态名字
        }
    },
    created() {
      this.go() //跳转到首页
    },
    methods: {
        go(){
            this.$router.push({path:'/'}) //跳转到首页方法
        },
        styleactive(){
            if(this.loginstatus=="退出登录"){
                localStorage.login="";
                this.loginstatus="登录/注册"
            }
            this.active=11;
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    user-select: none;
}

html {
    height: 100%;
}

body {
    height: 100%;
    overflow-y: scroll
}

[v-cloak] {
    display: none;
}

/*公用*/

.fl {
    float: left;
}

.fr {
    float: right;
}

/*普通清浮动*/

.clearfix {
    zoom: 1;
}

.clearfix::after,
.clearfix::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    visibility: hidden;
    clear: both;
}

header {
    width: 100%;
    height: 100px;
    line-height: 100px;
    padding-left: 32px;
    font-size: 30px;
    color: #fff;
    background: url('http://img.sccnn.com/bimg/334/0957.jpg') no-repeat;
    background-size: 100%;
    margin-bottom: 40px;
}

.sidebar {
    width: 200px;
    margin-left: 18px;
    margin-right: 90px;
    box-shadow: 0px 0px 1px 1px #ccc;
    border-radius: 5px;
    float: left;
}

.sidebar li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
}

.sidebar li.liActive>a {
    background: #0088cc;
    color: #fff;
}

.sidebar li a {
    color: #0088cf;
    display: inline-block;
    width: 200px;
    padding-left: 14px;
    text-decoration: none;
}
</style>
