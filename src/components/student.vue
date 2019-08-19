<template>
    <div class="content">
        <!-- 学生讲师(上面)-->
        <div class="classify">
            <h3 v-show="logintype=='管理员'">管理员无法查看</h3>
            <h3><span id="student" class="classEs" v-show="logintype=='学生'">学生</span><span id="teacher" class="classEs"  v-show="logintype=='老师'">讲师</span></h3>
        </div>
        <!-- (下面) -->
        <div class="studentBottom">
            <!-- 学生 -->
            <div class="student" v-show="logintype=='学生'">
                <!-- 学生权限(左边) -->
                <div class="jurisdiction">
                    <!-- 权限 -->
                    <ul id="quanxian">
                        <li class="active">录入(学生)</li>
                        <li @click="chakan()">查看</li>
                        <li>修改</li>
                        <li>反馈</li>
                    </ul>
                </div>
                <!-- 具体权限(右边) -->
                <div id="specific" >
                    <!-- 新增 -->
                    <div class="apped" style="display: block;">
                        <!-- 基础资料 -->
                        <div class="basics">
                            <!-- 基础信息(上面) -->
                            <div class="jichu">
                                <h3>基础信息</h3>
                            </div>
                            <!-- 基础信息(下面) -->
                            <div class="jcBottom">
                                <form class="form-horizontal">
                                    <!-- 照片上传 -->
                                    <div class="form-group " >
                                        <label for="input1" class="col-sm-2 control-label">照片上传</label>
                                        <div class="col-sm-2 col-sm-off-2 row-sm-2" style="border:1px solid #ddd;padding:0;margin-left:16px;position:relative;width:137px;height:160px;">
                                            <input type="file" style="opacity:0;width:137px;height:160px;padding:0;position:absolute;z-index:5;" class="form-control" id="input1" @change="sc()">
                                            <img ref="img" style="width:135px;height:160px;position:absolute;left:0;top:0;z-index:1;" src="../assets/4224370_043416094739_2.jpg">
                                        </div>
                                    </div>
                                    <!-- 名字 -->
                                    <div class="form-group">
                                        <label for="input3" class="col-sm-2 control-label">姓名</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="input3"
                                                placeholder="姓名" v-model="studentName" oninput="if(value.length>20)value=value.slice(0,20)">
                                        </div>
                                    </div>
                                    <!-- 年龄 -->
                                    <div class="form-group">
                                        <label for="input2" class="col-sm-2 control-label">年龄</label>
                                        <div class="col-sm-10">
                                            <input type="number" class="form-control" id="input2" placeholder="年龄" v-model="studentAge" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'/>
                                        </div>
                                    </div>
                                    <!-- 性别 -->
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">性别</label>
                                        <div class="col-sm-10">
                                            <label class="radio-inline">
                                                <input type="radio" name="input1z" id="inlineRadio1"
                                                    value="男" @click="aaa($event)">男
                                            </label>
                                            <label class="radio-inline">
                                                <input type="radio" name="input1z" id="inlineRadio2"
                                                    value="女" @click="aaa($event)">女
                                            </label>
                                        </div>
                                    </div>
                                    <!-- 身份证号 -->
                                    <div class="form-group">
                                        <label for="input4" class="col-sm-2 control-label">身份证号</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="input4" placeholder="身份证" v-model="studentIdCard" maxlength="18">
                                        </div>
                                    </div>
                                    <!-- 手机号 -->
                                    <div class="form-group">
                                        <label for="input5" class="col-sm-2 control-label">手机号</label>
                                        <div class="col-sm-10">
                                            <input type="number" class="form-control" id="input5"
                                                placeholder="手机号" v-model="studentPhone" oninput="if(value.length>11)value=value.slice(0,11)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                        </div>
                                    </div>
                                    <!-- 父亲名字 -->
                                    <div class="form-group">
                                        <label for="father1" class="col-sm-2 control-label">父亲姓名</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="father1" placeholder="父亲姓名" v-model="fatherName" oninput="if(value.length>20)value=value.slice(0,20)">
                                        </div>
                                    </div>
                                    <!-- 父亲手机号 -->
                                    <div class="form-group">
                                        <label for="father2" class="col-sm-2 control-label">父亲电话</label>
                                        <div class="col-sm-10">
                                            <input type="number" class="form-control" id="father2"
                                                placeholder="父亲电话" v-model="fatherPhone" oninput="if(value.length>11)value=value.slice(0,11)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                        </div>
                                    </div>
                                    <!-- 父亲工作 -->
                                    <div class="form-group">
                                        <label for="father3" class="col-sm-2 control-label">父亲职业</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="father3"
                                                placeholder="父亲职业" v-model="fatherJob" oninput="if(value.length>20)value=value.slice(0,20)">
                                        </div>
                                    </div>
                                    <!-- 母亲名字 -->
                                    <div class="form-group">
                                        <label for="mather1" class="col-sm-2 control-label">母亲姓名</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="mather1" placeholder="母亲姓名" v-model="matherName" oninput="if(value.length>20)value=value.slice(0,20)">
                                        </div>
                                    </div>
                                    <!-- 母亲电话 -->
                                    <div class="form-group">
                                        <label for="mather2" class="col-sm-2 control-label">母亲电话</label>
                                        <div class="col-sm-10">
                                            <input type="number" class="form-control" id="mather2"
                                                placeholder="母亲电话" v-model="matherPhone" oninput="if(value.length>11)value=value.slice(0,11)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                        </div>
                                    </div>
                                    <!-- 母亲工作 -->
                                    <div class="form-group">
                                        <label for="mather3" class="col-sm-2 control-label">母亲职业</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="mather3"
                                                placeholder="母亲职业" v-model="matherJob" oninput="if(value.length>20)value=value.slice(0,20)">
                                        </div>
                                    </div>
                                    <!-- 地址 -->
                                    <div class="form-group">
                                        <label for="address1" class="col-sm-2 control-label">籍贯(省市县)</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="address1" placeholder="籍贯" v-model="address" oninput="if(value.length>50)value=value.slice(0,50)">
                                        </div>
                                    </div>
                                    <!-- 大区 -->
                                    <div class="form-group">
                                        <label for="address2" class="col-sm-2 control-label">大区</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="address2"
                                                placeholder="大区" v-model="bigarea" oninput="if(value.length>20)value=value.slice(0,20)">
                                        </div>
                                    </div>
                                    <!-- 入学时间 -->
                                    <div class="form-group">
                                        <label for="time1" class="col-sm-2 control-label">入学时间</label>
                                        <div class="col-sm-10">
                                            <input type="number" class="form-control" id="time1" placeholder="入学时间" v-model="admissionDate" oninput="if(value.length>10)value=value.slice(0,10)" οnkeyup="value=value.replace(/[^\d\.]/g,'')"    οnchange="value=value.replace(/[^\d\.]/g,''">
                                        </div>
                                    </div>
                                    <!-- 学制 -->
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">学制</label>
                                        <div class="col-sm-10">
                                            <label class="radio-inline">
                                                <input type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                                    value="15个月" @click="bbb($event)"> 15个月
                                            </label>
                                            <label class="radio-inline">
                                                <input type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                                    value="2+1" @click="bbb($event)"> 2+1
                                            </label>
                                            <label class="radio-inline">
                                                <input type="radio" name="inlineRadioOptions" id="inlineRadio3"
                                                    value="3+1" @click="bbb($event)"> 3+1
                                            </label>
                                        </div>
                                    </div>
                                    <!-- 学籍 -->
                                    <div class="form-group">
                                        <label for="roll1" class="col-sm-2 control-label">学籍(成考)</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="roll1"
                                                placeholder="成考/学历" v-model="schoolCensus" oninput="if(value.length>20)value=value.slice(0,20)">
                                        </div>
                                    </div>
                                    <!-- 班级信息 -->
                                    <div class="form-group">
                                        <label for="classroom1" class="col-sm-2 control-label">班级</label>
                                        <div class="col-sm-10">
                                            <select class="form-control" v-model="classRoom" >
                                                <option v-for="(i,$index) in classList" :value="i.uid" :key="'xx'+$index">{{i.uid}}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!-- 班主任 -->
                                    <div class="form-group">
                                        <label for="input6" class="col-sm-2 control-label">班主任</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="input6" placeholder="班主任姓名" v-model="coordinator" oninput="if(value.length>20)value=value.slice(0,20)">
                                        </div>
                                    </div>
                                    <!-- 班主任手机号 -->
                                    <div class="form-group">
                                        <label for="input7" class="col-sm-2 control-label">班主任手机号</label>
                                        <div class="col-sm-10">
                                            <input type="number" class="form-control" id="input7"
                                                placeholder="班主任手机号" v-model="coordinatorPhone" oninput="if(value.length>11)value=value.slice(0,11)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                        </div>
                                    </div>
                                    <!-- 讲师 -->
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">讲师</label>
                                        <div class="col-sm-10">
                                            <select class="form-control" v-model="lecturerName" >
                                                <option v-for="(i,$index) in laoshiList" :value="i.name" :key="'xx'+$index">{{i.name}}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <!-- 讲师手机号 -->
                                    <div class="form-group">
                                        <label for="inputtt" class="col-sm-2 control-label">讲师手机号</label>
                                        <div class="col-sm-10">
                                            <input type="number" class="form-control" id="inputtt"
                                                placeholder="讲师手机号" v-model="lecturerPhone" oninput="if(value.length>11)value=value.slice(0,11)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-offset-5 row-sm-offset-1 col-sm-10" style="margin:0;text-align:center;">
                                            <button type="button" class="btn btn-default" @click="uploadInformation()">保存信息</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                    <!-- 查看 -->
                    <div class="apped">
                        <!-- 综合积分 -->
                        <div>
                            <!-- 综合积分(上面) -->
                            <div class="jichu">
                                <h3>综合积分</h3>
                            </div>
                            <!-- 综合积分(下面) -->
                            <div class="jcBottom">
                                <table class="table table-bordered biaodan">
                                    <thead>
                                        <th>学号</th>
                                        <th>姓名</th>
                                        <th>总分</th>
                                        <th>时间</th>
                                        <th>扣分</th>
                                        <th>剩余分</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{{chakanList.msg?chakanList.msg.uid:"暂无"}}</td>
                                            <td>{{chakanList.msg?chakanList.msg.name:"暂无"}}</td>
                                            <td>{{isNaN(parseInt(chakanList.msg?chakanList.msg.score:" ")+parseInt((chakanList.msg?chakanList.msg.fenzhi:" ")?(chakanList.msg?chakanList.msg.fenzhi:" "):0))?"暂无":parseInt(chakanList.msg?chakanList.msg.score:" ")+parseInt((chakanList.msg?chakanList.msg.fenzhi:" ")?(chakanList.msg?chakanList.msg.fenzhi:" "):0)}}</td>
                                            <td>{{(chakanList.msg?chakanList.msg.date:"")?(chakanList.msg?chakanList.msg.date:""):"暂无"}}</td>
                                            <td>{{(chakanList.msg?chakanList.msg.fenzhi:"")?(chakanList.msg?chakanList.msg.fenzhi:""):"暂无"}}</td>
                                            <td>{{chakanList.msg?chakanList.msg.score:"暂无"}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- 宿舍及其他成员 -->
                        <div>
                            <!-- 宿舍及其他成员(上面) -->
                            <div class="jichu">
                                <h3>宿舍及其他成员</h3>
                            </div>
                            <!-- 宿舍及其他成员(下面) -->
                            <div class="jcBottom">
                                <table class="table table-bordered table-striped biaodan">
                                    <thead>
                                        <th>宿舍房间</th>
                                        <th>成员</th>
                                    </thead>    
                                    <tbody>
                                        <tr>
                                            <td>{{chakanList.msg?chakanList.msg.newroom:"暂无"}}</td>
                                            <td><span v-for="(i,$index) in chakanList.people?chakanList.people:''" :key="$index+'qwe'" class="aaa">{{i.name}}</span></td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                        <!-- 老师 -->
                        <div>
                            <div class="jichu">
                                <h3>班主任</h3>
                            </div>
                            <!-- 老师下面 -->
                            <div class="jcBottom">
                                <table class="table table-bordered table-striped biaodan">
                                    <thead>
                                        <th>班主任姓名</th>
                                        <th>班主任电话</th>
                                    </thead>    
                                    <tbody>
                                        <tr>
                                            <td>{{chakanList.msg?chakanList.msg.master:"暂无"}}</td>
                                            <td>{{chakanList.msg?chakanList.msg.masternum:"暂无"}}</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                        <div>
                            <div class="jichu">
                                <h3>老师</h3>
                            </div>
                            <!-- 老师下面 -->
                            <div class="jcBottom">
                                <table class="table table-bordered table-striped biaodan">
                                    <thead>
                                        <th>任课老师姓名</th>
                                        <th>任课老师电话</th>
                                    </thead>    
                                    <tbody>
                                        <tr>
                                            <td>{{chakanList.msg?chakanList.msg.teacher:"暂无"}}</td>
                                            <td>{{chakanList.msg?chakanList.msg.teachernum:"暂无"}}</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                    <!-- 修改 -->
                    <div class="apped">
                        <div class="jichu">
                            <h3>修改信息</h3>
                        </div>
                        <div class="jsBottom">
                            <form class="form-horizontal">
                                <div class="form-group">
                                    <label for="tel1" class="col-sm-2 control-label">手机号</label>
                                    <div class="col-sm-10">
                                        <input type="number" class="form-control" id="tel1" placeholder="本人手机号" v-model="amendPhone" oninput="if(value.length>11)value=value.slice(0,11)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="fathertel" class="col-sm-2 control-label">父亲手机号</label>
                                    <div class="col-sm-10">
                                        <input type="number" class="form-control" id="fathertel" placeholder="父亲手机号" v-model="amendfatherPhone" oninput="if(value.length>11)value=value.slice(0,11)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="mathertel" class="col-sm-2 control-label">母亲手机号</label>
                                    <div class="col-sm-10">
                                        <input type="number" class="form-control" id="mathertel" placeholder="母亲手机号" v-model="amendmatherPhone" oninput="if(value.length>11)value=value.slice(0,11)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                    </div>
                                </div>
                                <!-- 学制 -->
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">学制</label>
                                    <div class="col-sm-10">
                                        <label class="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                                value="15个月" @click="ccc($event)"> 15个月
                                        </label>
                                        <label class="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                                value="2+1" @click="ccc($event)"> 2+1
                                        </label>
                                        <label class="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" id="inlineRadio3"
                                                value="3+1" @click="ccc($event)"> 3+1
                                        </label>
                                    </div>
                                </div>
                                <!-- 学籍 -->
                                <div class="form-group">
                                    <label for="proof1" class="col-sm-2 control-label">学籍(成考)</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="proof1" placeholder="成考" v-model="amendschoolCensus" oninput="if(value.length>20)value=value.slice(0,20)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-offset-4 row-sm-offset-1 col-sm-10">
                                        <button type="button" class="btn btn-default" @click="amend()">保存信息</button>
                                        <!-- <button type="submit" class="btn btn-default col-sm-offset-2">开除/退学</button> -->
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="apped">
                        <div class="jichu">
                            <h3>反馈信息</h3>
                        </div>
                        <div class="jsBottom">
                            <form class="form-horizontal">
                                <div class="form-group">
                                    <label for="tel1" class="col-sm-2 control-label">反馈信息</label>
                                    <div class="col-sm-10  row-sm-2" style="line-height:32px;">
                                        <!-- rows="4" cols="60" -->
                                        <input class="form-control" style="word-wrap:break-word;line-height:32px;wrap:hard;"  v-model="textarea1" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-offset-6 row-sm-offset-1 col-sm-10">
                                        <button type="button" class="btn btn-default" @click="fankuixx()">保存</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 讲师 -->
            <div class="teacher" v-show="logintype=='老师'">
                <!-- 讲师(左边) -->
                <div class="jurisdiction">
                    <ul id="qxUl">
                        <li class="active" @click="lsbjxs(),onblur()">查看/修改</li>
                        <li @click="lurumsg(),onblur()">编辑宿舍</li>
                        <li @click="findxs(),onblur()">月度成绩录入</li>
                        <li>自我录入</li>
                    </ul>
                </div>
                <!-- 讲师(右边) -->
                <div id="specific">
                    <!-- 查看/修改 -->
                    <div class="added" style="display: block">
                        <!-- 查看/修改(上面) -->
                        <div class="jichu">
                            <div class="textL" style="float:left;width:300px;">
                                <h3>学生信息</h3>
                            </div>
                            <div class="form-group" style="float:right;width:500px;margin-top:24px;position:relative;">
                                <input type="number" style="width:490px;display:inline-block;-webkit-appearance: none !important;margin: 0;" class="form-control" placeholder="请输入学号" v-model="xuehaoss" @input="onsearch()"  oninput="if(value.length>5)value=value.slice(0,5)">
                                <span class="glyphicon glyphicon-search" style="position:absolute;right:8px;top:6px;font-size:20px;width:34px;height:34px;cursor: pointer;display: inline-block;"></span>
                                <ul style="width:490px;position:absolute;top:34px;z-index:99;" class="zhujp">
                                    <li v-for="(i,$index) in xuehaossList" :key="$index+'p'">
                                        <ul class="xiaozz">
                                            <li>
                                                {{i.uid}}
                                            </li>
                                            <li>
                                                {{i.name}}
                                            </li>
                                            <li>
                                                <a href="#" data-toggle="modal" data-target="#login_in" @click="mychange($index)">修改</a>
                                            </li>
                                            <li>
                                                <a href="#" data-toggle="modal" data-target="#zhuangtai">状态</a>
                                            </li>
                                            <li>
                                                <a href="#" @click="detail($index)">信息</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- 查看/修改(下面) -->
                        <div class="jcBottom">
                            <table class="table table-bordered table-striped banji">
                                <thead>
                                    <th>学号</th>
                                    <th>姓名</th>
                                    <th>末班次数(次)</th>
                                    <th>综合积分</th>
                                    <th>修改信息</th>
                                    <th>学生状态</th>
                                    <th>学生信息</th>
                                </thead>
                                <tbody v-if="dataList instanceof Array">
                                    <tr v-for="(i,$index) in dataList" :key="'z'+$index">
                                        <td>{{i.uid}}</td>
                                        <td>{{i.name}}</td>
                                        <td>{{i.moban}}</td>
                                        <td>{{i.score}}</td>
                                        <!-- 修改按钮 -->
                                        <td><input type="button" data-toggle="modal" data-target="#login_in" @click="mychange($index)" value="修改" style="width:86px;height:28px;line-height:30px;margin-left:9px;margin-top:4px;background-color: aqua;border: none;border-radius: 4px;" /></td>
                                        <!-- 学生状态按钮 -->
                                        <td><input type="button" data-toggle="modal" data-target="#zhuangtai" @click="mychange($index)" value="学生状态" style="width:86px;height:28px;line-height:30px;margin-left:9px;margin-top:4px;background-color: aqua;border: none;border-radius: 4px;" /></td>
                                        <!-- 学生详情按钮 -->
                                        <td><input @click="detail($index)" type="button" value="学生详情" style="width:86px;height:28px;line-height:30px;margin-left:9px;margin-top:4px;background-color: aqua;border: none;border-radius: 4px;" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- 修改学生信息的模态框 -->
                        <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" id="login_in">
                            <div class="modal-dialog modal-sm-10" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        <h4 class="modal-title" id="myModalLabel"  data-toggle="modal" data-target="#login_in">修改</h4>
                                    </div>
                                    <div class="modal-body" style="height:auto;">
                                        <div class="form-group">
                                            <label for="user">末班次数</label>
                                            <input type="number" class="form-control" id="user_in" style="top:40px;width:68%;margin-left:1%;"  placeholder="末班次数(次)" v-model="lastBus" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                        </div>
                                        <div class="form-group">
                                            <label for="user">综合积分</label>
                                            <input type="number" class="form-control" id="user_in" style="top:40px;width:68%;margin-left:1%;"  placeholder="综合积分" v-model="synthesizeScore" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal" id="btn_in" @click="gitStatus()">保存</button>
                                        <!-- <button type="button" class="btn btn-default" data-dismiss="modal">取消</button> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 学生状态的模态框 -->
                        <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" id="zhuangtai">
                            <div class="modal-dialog modal-sm-10" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        <h4 class="modal-title" id="myModalLabel"  data-toggle="modal" data-target="#login_in">学生状态</h4>
                                    </div>
                                    <div class="modal-body" style="height:auto;">
                                        <div class="form-group">
                                            <label for="user">学生状态</label>
                                            <select class="form-control" style="top:40px;width:68%;margin-left:1%;" v-model="selected">
                                                <option v-for="(i,$index) in items" :value="i.value" :key="$index+'zjz'">{{i.text}}</option>
                                            </select>
                                        </div>
                                        <!-- 请假 -->
                                        <div v-show="this.selected=='1'">
                                            <div class="form-group">
                                                <label for="user">请假</label>
                                                <input type="number" class="form-control" style="top:40px;width:68%;margin-left:1%;"  placeholder="请假时长" v-model="qingjia.qingjiashichang" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                            </div>
                                        </div>
                                        <!-- 休学 -->
                                        <div v-show="this.selected=='3'">
                                            <div class="form-group">
                                                <label for="user">开始时间</label>
                                                <input type="number" class="form-control" style="top:40px;width:68%;margin-left:1%;"  placeholder="开始时间" v-model="xiuxue.xukaishishijian" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                            </div>
                                            <div class="form-group">
                                                <label for="user">结束时间</label>
                                                <input type="number" class="form-control" style="top:40px;width:68%;margin-left:1%;"  placeholder="结束时间" v-model="xiuxue.xxjieshushijian" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                            </div>
                                            <div class="form-group">
                                                <label for="user">所处阶段</label>
                                                <select style="top:40px;width:68%;margin-left:1%;" class="form-control" v-model="xiuxue.xxsuochujieduan" >
                                                <option v-for="(i,$index) in subject" :value="i.subject" :key="$index">{{i.subject}}</option>
                                            </select>
                                            </div>
                                        </div>
                                        <!-- 退学 -->
                                        <div v-show="this.selected=='2'">
                                            <div class="form-group">
                                                <label for="user">所处阶段</label>
                                                <input type="text" class="form-control" style="top:40px;width:68%;margin-left:1%;"  placeholder="本阶段课程" v-model="tuixue.txsuozaijieduan" oninput="if(value.length>20)value=value.slice(0,20)">
                                            </div>
                                            <div class="form-group">
                                                <label for="user">退学原因</label>
                                                <input type="text" class="form-control" style="top:40px;width:68%;margin-left:1%;"  placeholder="原因" v-model="tuixue.txyuanyin" oninput="if(value.length>120)value=value.slice(0,120)">
                                            </div>
                                        </div>
                                        <!-- 不就业协议 -->
                                        <div v-show="this.selected=='4'">
                                            <div class="form-group">
                                                <label for="user">签订日期</label>
                                                <input type="number" class="form-control" id="user_in" style="top:40px;width:68%;margin-left:1%;"  placeholder="签订时间" v-model="bujiuye.bjyqiandingriqi" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                            </div>
                                            <div class="form-group " style="height:186px;">
                                                <label for="input1" class="col-sm-2 control-label" style="margin-left:-14px;">不就业协议</label>
                                                <div class="col-sm-8 row-sm-2" style="top:20px;left:-114px;border:1px solid #ddd;padding:0;position:relative;width:550px;height:163px;border-radius:6px;">
                                                    <input type="file" style="opacity:0;width:550px;height:160px;border-radius:6px;padding:0;position:absolute;z-index:5;" class="form-control" @change="xueshengzhuangtaisc()">
                                                    <img ref="imgs" style="width:550px;height:160px;border-radius:6px;position:absolute;left:0;top:0;z-index:1;" src="../assets/4224370_043416094739_2.jpg">
                                                </div>
                                            </div>
                                        </div>
                                        <!-- 毕业 -->
                                        <div v-show="this.selected=='6'">
                                            <div class="form-group">
                                                <label for="user">就业信息</label>
                                                <input type="text" class="form-control" id="user_in" style="top:40px;width:68%;margin-left:1%;"  placeholder="就业信息" v-model="biye.byxx" oninput="if(value.length>20)value=value.slice(0,20)">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal" id="btn_in" @click="xueshengzhuangtai()">保存</button>
                                        <!-- <button type="button" class="btn btn-default" data-dismiss="modal">取消</button> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 编辑宿舍 -->
                    <div class="added">
                        <!-- 宿舍安排(上面) -->
                        <div class="jichu">
                            <div class="jichu">
                                <div class="textL" style="float:left;width:300px;">
                                    <h3>宿舍安排</h3>
                                </div>
                                <div class="form-group" style="float:right;width:500px;margin-top:24px;position:relative;">
                                    <input type="number" style="width:490px;display:inline-block;" class="form-control" placeholder="请输入学号" v-model="xuehaoss"  @input="onsearch()" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                    <span class="glyphicon glyphicon-search" style="position:absolute;right:8px;top:6px;font-size:20px;width:34px;height:34px;cursor: pointer;display: inline-block;"></span>
                                    <ul style="width:490px;position:absolute;top:34px;z-index:99;" class="zhujp">
                                        <li v-for="(i,$index) in xuehaossList" :key="$index+'p'">
                                            <ul class="xiaozz">
                                                <li>
                                                    {{i.uid}}
                                                </li>
                                                <li>
                                                    {{i.name}}
                                                </li>
                                                <li data-toggle="modal" data-target="#case">
                                                    <a href="#">修改</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- 宿舍安排(下面) -->
                        <div class="jcBottom">
                            <table class="table table-bordered table-striped chengji">
                                <thead>
                                    <th>单元楼 / 宿舍</th>
                                    <th>学号</th>
                                    <th>姓名</th>
                                    <th>床位</th>
                                    <th>值日</th>
                                    <th>班主任</th>
                                    <th>任课老师</th>
                                    <th>修改信息</th>
                                </thead>
                                <tbody v-if="luruList instanceof Array">
                                    <tr v-for="(i,$index) in luruList" :key="'x'+$index">
                                        <td>{{i.newroom?i.newroom:""}}</td>
                                        <td>{{i.uid}}</td>
                                        <td>{{i.name}}</td>
                                        <td>{{i.bed?i.bed:""}}</td>
                                        <td>{{i.week?i.week:""}}</td>
                                        <td>{{i.master}}</td>
                                        <td>{{i.teacher}}</td>
                                        <td><input type="button" data-toggle="modal" data-target="#case" value="修改" @click="mychange($index)" style="width:100px;height:28px;line-height:30px;margin-left:14%;margin-top:4px;background-color: aqua;border: none;border-radius: 4px;" /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" id="case">
                                <div class="modal-dialog modal-sm-10" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                            <h4 class="modal-title" id="myModalLabel"  data-toggle="modal" data-target="#login_in">修改</h4>
                                        </div>
                                        <div class="modal-body" style="height:auto;">
                                            <div class="form-group">
                                                <label for="user">单元楼 / 宿舍</label>
                                                <input type="text" class="form-control" id="user_in" style="top:40px;width:68%;margin-left:1%;"  placeholder="单元楼 / 宿舍" v-model="luruapartment" oninput="if(value.length>5)value=value.slice(0,5)">
                                            </div>
                                            <div class="form-group">
                                                <label for="user">床位</label>
                                                <input type="number" class="form-control" id="user_in" style="top:40px;width:68%;margin-left:1%;"  placeholder="床位"  v-model="lurubed" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                            </div>
                                            <div class="form-group">
                                                <label for="user">值日</label>
                                                <input type="number" class="form-control" id="user_in" style="top:40px;width:68%;margin-left:1%;"  placeholder="周几"  v-model="luruweek" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" id="btn_in" data-dismiss="modal" @click="lurusave()">保存</button>
                                            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 月度成绩录入 -->
                    <div class="added">
                        <div class="jichu">
                            <div class="jichu">
                                <div class="textL" style="float:left;">
                                    <h3>成绩录入</h3>
                                </div>
                                <div class="form-group" style="float:right;width:500px;margin-top:24px;position:relative;">
                                    <input type="number" style="width:490px;display:inline-block;" class="form-control" placeholder="请输入学号" v-model="xuehaoss" @input="onsearch()" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'> 
                                    <span class="glyphicon glyphicon-search" style="position:absolute;right:8px;top:6px;font-size:20px;width:34px;height:34px;cursor: pointer;display: inline-block;"></span>
                                    <ul style="width:490px;position:absolute;top:34px;z-index:99;" class="zhujp">
                                        <li v-for="(i,$index) in xuehaossList" :key="$index+'p'">
                                            <ul class="xiaozz">
                                                <li>
                                                    {{i.uid}}
                                                </li>
                                                <li>
                                                    {{i.name}}
                                                </li>
                                                <li data-toggle="modal" data-target="#xiugai">
                                                    <a href="#">修改</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="jcBottom">
                            <table class="luru">
                                <tr>
                                    <td>学号</td>
                                    <td>学生姓名</td>
                                    <td colspan="4">
                                        <table class="bishi">
                                            <tr>
                                                <td style="width:100%;height:26px;line-height: 26px;" colspan="4">笔试成绩</td>
                                            </tr>
                                            <tr>
                                                <td style="line-height: 28px;height:28px;width:86px;">第一周</td>
                                                <td style="line-height: 28px;height:28px;width:86px;">第二周</td>
                                                <td style="line-height: 28px;height:28px;width:86px;">第三周</td>
                                                <td style="line-height: 28px;height:28px;width:86px;">月考</td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td>机试</td>
                                    <td>面试</td>
                                    <td>综合积分</td>
                                    <td>是/否重修</td>
                                    <td>修改信息</td>
                                </tr>
                                <tbody v-if="changList instanceof Array">
                                <tr v-for="(i,$index) in changList" :key="'c'+$index">
                                    <td>{{i.uid}}</td>
                                    <td>{{i.name}}</td>
                                    <td>{{i.firstscore?i.firstscore:" "}}</td>
                                    <td>{{i.twoscore?i.twoscore:" "}}</td>
                                    <td>{{i.threescore?i.threescore:" "}}</td>
                                    <td>{{i.ykscore?i.ykscore:" "}}</td>
                                    <td>{{i.changescore?i.changescore:" "}}</td>
                                    <td>{{i.mianscore?i.mianscore:" "}}</td>
                                    <td>{{i.totalscore?i.totalscore:" "}}</td>
                                    <td>{{i.status?i.status:" "}}</td>
                                    <td><input type="button" data-toggle="modal" data-target="#xiugai" value="修改"  @click="mychange($index)" style="width:70px;height:28px;line-height:30px;margin-top:4px;background-color: aqua;border: none;border-radius: 4px;" /></td>
                                </tr>
                                </tbody>
                                
                            </table>
                            <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" id="xiugai">
                                <div class="modal-dialog modal-sm-10" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                            <h4 class="modal-title" id="myModalLabel"  data-toggle="modal" data-target="#login_in">修改</h4>
                                        </div>
                                        <div class="modal-body" style="height:auto;">
                                            <div class="form-group">
                                                <label for="user">第一周</label>
                                                <input type="number" class="form-control" id="user_in" style="top:40px;width:68%;margin-left:1%;"  placeholder="第一周" v-model="changone" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                            </div>
                                            <div class="form-group">
                                                <label for="user">第二周</label>
                                                <input type="number" class="form-control" id="user_in" style="top:40px;width:68%;margin-left:1%;"  placeholder="第二周" v-model="changtwo" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                            </div>
                                            <div class="form-group">
                                                <label for="user">第三周</label>
                                                <input type="number" class="form-control" id="user_in" style="top:40px;width:68%;margin-left:1%;"  placeholder="第三周" v-model="changthree" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                            </div>
                                            <div class="form-group">
                                                <label for="user">月考</label>
                                                <input type="number" class="form-control" id="user_in" style="top:40px;width:68%;margin-left:1%;"  placeholder="月考" v-model="changmonth" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                            </div>
                                            <div class="form-group">
                                                <label for="user">机试</label>
                                                <input type="number" class="form-control" id="user_in" style="top:40px;width:68%;margin-left:1%;"  placeholder="机试" v-model="changjis" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                            </div>
                                            <div class="form-group">
                                                <label for="user">面试</label>
                                                <input type="number" class="form-control" id="user_in" style="top:40px;width:68%;margin-left:1%;"  placeholder="面试" v-model="changmianshi" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                            </div>
                                            <div class="form-group">
                                                <label for="user">综合积分</label>
                                                <input type="number" class="form-control" id="user_in" style="top:40px;width:68%;margin-left:1%;"  placeholder="综合积分" v-model="changzongh" oninput="if(value.length>5)value=value.slice(0,5)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                            </div>
                                            <div class="form-group">
                                                <label for="user">是/否重修</label>
                                                <div class="col-sm-12">
                                                    <label class="radio-inline">
                                                        <input type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                                            value="是" v-model="changchongx"> 是 
                                                    </label>
                                                    <label class="radio-inline">
                                                        <input type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                                            value="否" v-model="changchongx"> 否
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="user">原因</label>
                                                <input type="text" class="form-control" id="user_in" style="top:40px;width:68%;margin-left:1%;"  placeholder="原因" v-model="changyuanyin" oninput="if(value.length>50)value=value.slice(0,50)">
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="btn_in" @click="changemonth()">保存</button>
                                            <button type="button" class="btn btn-default">取消</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 新增教师 -->
                    <div class="added">
                        <div class="jichu">
                            <h3>新增教师</h3>
                        </div>
                        <div class="jcBottom">
                            <form class="form-horizontal">
                                <div class="form-group">
                                    <label for="nom1" class="col-sm-2 control-label">姓名</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="nom1"
                                            placeholder="姓名" v-model="newTeacherName" oninput="if(value.length>20)value=value.slice(0,20)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="telmy1" class="col-sm-2 control-label">手机号</label>
                                    <div class="col-sm-10">
                                        <input type="number" class="form-control" id="telmy1"
                                            placeholder="手机号" v-model="newTeacherPhone" oninput="if(value.length>11)value=value.slice(0,11)" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-offset-5 row-sm-offset-1 col-sm-10">
                                        <button type="button" class="btn btn-default" @click="newTeacher()">保存信息</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    </div>
</template>
<script>
var vm={
    data () {
        return {
            items:[
                    {text:'在校',value:'0'},
                    {text:'请假',value:'1'},
                    {text:'退学',value:'2'},
                    {text:'休学',value:'3'},
                    {text:'不就业',value:'4'},
                    {text:'开除',value:'5'},
                    {text:'毕业',value:'6'},
                ],
            selected:'1',
            Vindex:0,//数据更新索引
            logintype:'',//登录状态
            imgurl:'',//图片上传路径
            studentName:'',//学生名字
            studentAge:'',//学生年龄
            studentSex:'',//学生性别
            studentIdCard:'',//学生身份证
            studentPhone:'',//学生手机号
            fatherName:'',//父亲名字
            fatherPhone:'',//父亲手机号
            fatherJob:'',//父亲工作
            matherName:'',//母亲名字
            matherPhone:'',//母亲手机号
            matherJob:'',//母亲工作
            address:'',//地址籍贯
            bigarea:'',//大区
            admissionDate:'',//入学时间
            schoolSystem:'',//学制
            schoolCensus:'',//学籍
            classRoom:'',//班级
            coordinator:'',//班主任
            coordinatorPhone:'',//班主任手机号
            lecturerName:'',//讲师名字
            lecturerPhone:'',//讲师手机号
            amendPhone:'',//修改自己电话号
            amendfatherPhone:'',//修改父亲手机号
            amendmatherPhone:'',//修改母亲手机号
            amendschoolSystem:'',//修改学制
            amendschoolCensus:'',//修改学籍
            newTeacherName:'',//新老师名字
            newTeacherPhone:'',//新老师手机号
            dataList:[],//学生数据
            synthesizeuid:'',//学号
            lastBus:'',//末班次数
            synthesizeScore:'',//综合分数
            //宿舍.......................................................................................................
            luruList: [],//录入数据
            luruapartment:'',//录入单元楼
            lurubed: '',//录入床位
            luruweek:'',//录入值日
            //月度.......................................................................................................
            changList:[],//录入成绩
            changone:'',//录入第一周
            changtwo:'',//第二周
            changthree:'',//第三周
            changmonth:'',//月考
            changjis:'',//机试
            changmianshi:'',//面试
            changzongh:'',//综合分数
            changyuanyin:'',//原因
            changchongx:'',//重修
            //搜索....................................................
            xuehaoss:'',//搜素学号 
            xuehaossList:[],
            sousuosushe:'',//搜索宿舍
            ssssList:[],
            sousuochengji:'',//搜索成绩
            //老师..............................................
            laoshiList:[],
            //班级..............................................
            classList:[],
            //学生查看........................
            chakanList:'',
            //在校..........
            mingzi:'',
            laoshimz:'',
            //请假....
            qingjia:{
                qingjiashichang:'',
            },
            //退学.......
            tuixue:{
                txsuozaijieduan:'',
                txyuanyin:'',
            },
            //休学...
            xiuxue:{
                xukaishishijian:'',
                xxjieshushijian:'',
                xxsuochujieduan:''
            },
            //不就业........
            bujiuye:{
                bjyqiandingriqi:'',
                imgurlz:'',//不就业协议
            },
            //毕业.....
            biye:{
                byxx:'',
            },
            //反馈信息.....
            textarea1:'',
            //老师id
            tuid:0,
            //课程列表
            subject:[]
        }
    },
    methods: {
        //获取课程
        getsubject(){
            this.axios.post("/all/kc").then((data)=>{
                this.subject=data.data;
            })
        },
        //反馈信息
        fankuixx(){
            this.axios.post('/all/fuck',{
                uid:JSON.parse(localStorage.login).uid,
                textarea1:this.textarea1
            }).then((res)=>{
                alert(res.data)
                this.textarea1=''
            })
        },
        
        //学生详情查看
        detail(v){
            this.Vindex=v;
            this.axios.post("/all/sdetails",{
                uid:this.dataList[this.Vindex].uid?this.dataList[this.Vindex].uid:this.xuehaossList[this.Vindex].uid
            }).then((data)=>{
                localStorage.message=JSON.stringify(data.data)
                this.$router.push("/xsmessage")
            })
        },
        
        //学生图片上传
        sc(){
            var href='http://192.168.43.239:3000'
            var f = event.path[0].files[0];
            var d = new FormData;
            d.append('img', f);
            this.axios('/cv/cover/cover',{
                method:'post',
                data:d,
                anync:true,
                contentType:false,
                processData:false,
            }).then((res)=>{
                this.imgurl=href+res.data;
                this.$refs.img.src=this.imgurl;
            })
        },
        //学生信息上传
        uploadInformation(){
            if(this.imgurl == "" || this.studentName == "" || this.studentAge == "" || this.studentSex == "" || this.studentIdCard == "" || this.studentPhone == "" || this.fatherName == "" || this.fatherPhone == "" || this.fatherJob == "" || this.matherName == "" || this.matherPhone == "" || this.matherJob == "" || this.address == "" || this.bigarea == "" || this.admissionDate == "" || this.schoolCensus == "" || this.schoolSystem == "" || this.classRoom == "" || this.coordinator == "" || this.coordinatorPhone == "" || this.lecturerName == "" || this.lecturerPhone == ""){
                alert("请输入内容")
            }else{
                this.axios.post('/all/add',{
                    params:{
                        uid:JSON.parse(localStorage.login).uid,//学号
                        imgurl:this.imgurl,//学生头像
                        studentName:this.studentName,//学生名字
                        studentAge:this.studentAge,//年龄
                        studentSex:this.studentSex,//性别
                        studentIdCard:this.studentIdCard,//身份证
                        studentPhone:this.studentPhone,//手机号
                        fatherName:this.fatherName,//父亲名字
                        fatherPhone:this.fatherPhone,//父亲手机号
                        fatherJob:this.fatherJob,//父亲工作
                        matherName:this.matherName,//母亲名字
                        matherPhone:this.matherPhone,//母亲手机号
                        matherJob:this.matherJob,//母亲工作
                        address:this.address,//地址
                        bigarea:this.bigarea,//大区
                        admissionDate:this.admissionDate,//入学时间
                        schoolSystem:this.schoolSystem,//学制
                        schoolCensus:this.schoolCensus,//学籍
                        classRoom:this.classRoom,//班级
                        coordinator:this.coordinator,//班主任
                        coordinatorPhone:this.coordinatorPhone,//班主任电话
                        lecturerName:this.lecturerName,//讲师名字
                        lecturerPhone:this.lecturerPhone,//讲师手机号
                    }
                }).then((res)=>{
                    alert(res.data)
                })
            }
        },
        //新老师信息上传
        newTeacher(){
            if(this.newTeacherName == "" || this.newTeacherPhone == "" ){
                alert('请输入内容')
            }else{
                this.axios.post('/all/teacher',{
                    params:{
                        uid:JSON.parse(localStorage.login).uid,//学号
                        newTeacherName:this.newTeacherName,//新老师名字
                        newTeacherPhone:this.newTeacherPhone,//新老师手机号
                    }
                }).then((res)=>{
                    alert(res.data)
                    this.newTeacherName=''
                    this.newTeacherPhone=''
                })
            }
        },
        //班级学生宿舍
        lsbjxs(){
            if(this.logintype=='老师'){
                this.axios.post('/all/mystudent',{
                    aname:JSON.parse(localStorage.login).uid
                }).then((res)=>{
                    this.laoshimz=res.data[0].teacher;
                    this.dataList=res.data;
                    this.luruList=res.data;
                    this.changList=res.data;
                })
            }
        },
        //性别
        aaa(e){
            this.studentSex=e.path[0].defaultValue //单选框选择时触发
        },
        //学制
        bbb(e){
            this.schoolSystem=e.path[0].defaultValue //单选框选择时触发
        },
        //修改学制
        ccc(e){
            this.amendschoolSystem=e.path[0].defaultValue //单选框选择时触发
        },
        //修改信息
        amend(){
            if(this.studentPhone == "" || this.fatherPhone == "" || this.matherPhone == "" || this.schoolSystem == "" || this.schoolCensus == ""){
                alert('请输入内容')
            }else{
                this.axios.post('/all/change',{
                    params:{
                        uid:JSON.parse(localStorage.login).uid,//学号
                        studentPhone:this.amendPhone,//手机号
                        fatherPhone:this.amendfatherPhone,//父亲手机号
                        matherPhone:this.amendmatherPhone,//母亲手机号
                        schoolSystem:this.amendschoolSystem,//学制
                        schoolCensus:this.amendschoolCensus,//学籍
                    }
                }).then((res)=>{
                    alert(res.data)
                })
            }
        },
        //获取到老师修改的学生uid
        mychange(v){
            this.synthesizeuid=this.dataList[v].uid;
            this.mingzi=this.dataList[v].name;
            this.Vindex=v;
        },
        //讲师查看修改
        gitStatus(){
            if(this.synthesizeuid == "" || this.lastBus == "" || this.synthesizeScore == ""){
                alert('参数缺失')
            }else{
                this.axios.post('/all/changemsg',{
                    synthesizeuid:this.synthesizeuid,
                    lastBus:this.lastBus,
                    synthesizeScore:this.synthesizeScore,
                }).then((res)=>{
                    if(res.data.tp=="ok" ){
                        alert(res.data.tp);
                        this.dataList.splice(this.Vindex,1,res.data.change);
                        this.onblur();
                    }
                })
            }
        },
        //学生状态
        xueshengzhuangtai(){
                this.axios.post('/all/sdstatus',{
                    synthesizeuid:this.synthesizeuid,
                    mingzi:this.mingzi,
                    selected:this.items[this.selected].text,
                    qingjia:this.qingjia,
                    tuixue:this.tuixue,
                    xiuxue:this.xiuxue,
                    bujiuye:this.bujiuye,
                    biye:this.biye,
                    laoshimingzi:this.laoshimz,
                }).then((res)=>{
                    alert(res.data)
                    this.qingjia.qingjiashichang=''
                    this.tuixue.txsuozaijieduan=''
                    this.tuixue.txyuanyin=''
                    this.xiuxue.xukaishishijian=''
                    this.xiuxue.xxjieshushijian=''
                    this.xiuxue.xxsuochujieduan=''
                    this.bujiuye.bjyqiandingriqi=''
                    this.bujiuye.imgurlz=''
                    this.$refs.imgs.src="";
                    this.biye.byxx=''
                })
        },
        //学生不就业协议上传
        xueshengzhuangtaisc(){
            var href='http://192.168.43.239:3000'
            var f = event.path[0].files[0];
            var d = new FormData;
            d.append('img', f);
            this.axios('/cv/cover/bjy',{
                method:'post',
                data:d,
                anync:true,
                contentType:false,
                processData:false,
            }).then((res)=>{
                this.bujiuye.imgurlz=href+res.data;
                this.$refs.imgs.src=this.bujiuye.imgurlz;
            })
        },
        //宿舍信息查询
        lurumsg(){
            this.axios.post("/all/sushemsg",{
                teuid:JSON.parse(localStorage.login).uid,//老师登录uid
            }).then(data=>{
                if(data.data.length){
                    for(var i=0;i<data.data.length;i++){
                        for(var j=0;j<this.luruList.length;j++){
                            if(data.data[i].uid==this.luruList[j].uid){
                                this.luruList.splice(j,1,data.data[i]);
                                break;
                            }
                        }
                    }
                }else{
                    this.luruList=this.dataList;
                }
            })
        },
        //编辑宿舍录入保存
        lurusave(){
            if(this.lurust == "" || this.luruapartment == "" || this.lurubed == "" || this.luruweek == ""){
                alert('请录入内容')
            }else{
                this.axios.post('/all/sushe',{
                    teuid:JSON.parse(localStorage.login).uid,//老师登录uid
                    lurust:this.dataList[this.Vindex],//学生信息
                    luruapartment: this.luruapartment, //单元楼
                    lurubed: this.lurubed,//床位
                    luruweek: this.luruweek,// 值日
                }).then((res)=>{
                    if(res.data.tp=="ok"){
                        var data=res.data.change;
                    for(var i=0;i<data.length;i++){
                        if(this.luruList[i].uid==data[i].uid){
                            this.luruList.splice(i,1,data[i]);
                            this.onblur();
                        }else{
                            alert("失败")
                        }
                    }
                    this.luruapartment = '';
                    this.lurubed = '';
                    this.luruweek = '';
                    alert('修改成功')
                    }
                })
            }
        },
        //月成绩信息查询
        findxs(){
            this.axios.post("/all/testfind",{
                teuid:JSON.parse(localStorage.login).uid,//老师登录uid
            }).then((data)=>{
                if(data.data.length){
                    for(var i=0;i<data.data.length;i++){
                        for(var j=0;j<this.changList.length;j++){
                            if(data.data[i].uid==this.changList[j].uid){
                            this.changList.splice(j,1,data.data[i]);
                            break;
                            }
                        }
                    }
                }else{
                    this.changList=this.dataList;
                }
            })
        },
        //月度成绩录入保存
        changemonth(){
            if(this.lurust == "" || this.changone == "" || this.changtwo == "" || this.changthree == "" || this.changmonth == "" || this.changjis == "" || this.changmianshi == "" || this.changzongh == "" || this.changyuanyin == "" || this.changchongx == "" ){
                alert('录入信息不全')
            }else{
                this.axios.post('/all/mouthtest',{
                    teuid:JSON.parse(localStorage.login).uid,//老师登录uid
                    lurust:this.dataList[this.Vindex],//学生信息
                    changone:this.changone,//录入第一周
                    changtwo:this.changtwo,//第二周
                    changthree:this.changthree,//第三周
                    changmonth:this.changmonth,//月考
                    changjis:this.changjis,//机试
                    changmianshi:this.changmianshi,//面试
                    changzongh:this.changzongh,//综合分数
                    changyuanyin:this.changyuanyin,//原因
                    changchongx:this.changchongx,//重修
                }).then((res)=>{
                    if(res.data.tp=="ok"){
                        var data=res.data.change;
                    for(var i=0;i<data.length;i++){
                        if(this.changList[i].uid==data[i].uid){
                            this.changList.splice(i,1,data[i]);
                            this.onblur();
                        }
                    }
                    alert('修改成功')
                        this.changone=''//录入第一周
                        this.changtwo=''//第二周
                        this.changthree=''//第三周
                        this.changmonth=''//月考
                        this.changjis=''//机试
                        this.changmianshi=''//面试
                        this.changzongh=''//综合分数
                        this.changyuanyin=''//原因
                        this.changchongx=''//重修
                    }
                })
            }
        },
        //学号搜索
        onsearch(){
            if(this.logintype=="老师"){
                this.tuid=JSON.parse(localStorage.login).uid
                this.axios.post('/all/search',{
                xuehaoss:this.xuehaoss,
                tuid:this.tuid
            }).then((res)=>{
                this.xuehaossList=res.data
            })
            }
            
        },

        onblur(){
            this.xuehaoss=''
            this.xuehaossList=[]
        },
        //获取所有老师
        laoshi(){
            this.axios.post('/all/tet').then((res)=>{
                this.laoshiList=res.data;
            })
        },
        //获取所有班级
        classroomlist(){
            this.axios.post('/all/tetclass').then((res)=>{
                this.classList=res.data;
            })
        },
        //查看本人数据
        chakan(){
            this.axios.post('/all/look',{
                uid:JSON.parse(localStorage.login).uid
            }).then((res)=>{
                if(res.data instanceof Object){
                this.chakanList=res.data
                }else{
                    alert(res.data)
                }
            })
        },
    },
    mounted () {
        this.laoshi();
        this.classroomlist();
        this.getsubject();
        if(localStorage.login){
            this.logintype=JSON.parse(localStorage.login).logintype
            this.lsbjxs()
        }else{
            alert('请先登录');
            this.$router.push({path:"/login"});
        }
        var qxList = document.querySelectorAll('#quanxian li');
        var qxLi = document.querySelectorAll('#qxUl li');
        var qxboxs = document.querySelectorAll('#specific .apped');
        var addboxs = document.querySelectorAll('#specific .added');
        // 选项卡
        for (var i = 0; i < qxList.length; i++) {
            qxList[i].onclick = function () {
                for (var j = 0; j < qxList.length; j++) {
                    qxList[j].index = j;
                    qxList[j].className = ""
                    qxboxs[j].style.display = 'none'
                }
                this.className = "active";
                qxboxs[this.index].style.display = 'block'
            }
        }
        for (var k = 0; k < qxLi.length; k++) {
            qxLi[k].onclick = function () {
                for (var j = 0; j < qxLi.length; j++) {
                    qxLi[j].index = j;
                    qxLi[j].className = ""
                    addboxs[j].style.display = 'none'
                }
                this.className = "active";
                addboxs[this.index].style.display = 'block'
            }
        }
    },
}
export default vm;
</script>
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"]{
  -moz-appearance: textfield;
}
.aaa{
    font-size:12px;
    color:#888;
    padding:0 10px;
}
.shangchuan{
    text-align:center;  
    margin-left: 257px;
}
a{
    text-decoration: none;
}
.color{
    background-color:pink;
}
    /* 详情 */
    .content {
        width: 1000px;
        min-height: 700px;
        margin-left: 368px;
        box-sizing: border-box;
    }

    /* 学生/讲师 */
    .classify {
        width: 100%;
        height: 50px;
        border-bottom: 2px solid;
    }

    .classify h3 {
        font-size: 28px;
    }

    .classify h3 span {
        display: inline-block;
        padding: 0 10px;
        line-height: 48px;
        margin-right: 30px;
    }

    .classify h3 span a{
        line-height: 40px;
    }

    .classify h3 span.classEs {
        /* display: inline-block; */
        /* background: rgb(116, 82, 82); */
        background: rgb(180, 46, 46);
        border-radius: 2px;
        color: #ffffff;
    }

    /* <!-- 学生权限(左边) --> */
    .jurisdiction {
        width: 160px;
        margin-top: 30px;
        float: left;
    }

    .jurisdiction ul {
        width: 160px;
    }

    .jurisdiction ul li {
        height: 46px;
        line-height: 46px;
        border-bottom: 1px solid #ef87ae;
        background: #6cdcbe;
        text-align: center;
        font-size: 18px;
    }

    .jurisdiction ul li.active {
        background: #dc916c;
        color: #fff;

    }

    /* 具体信息 */
    #specific {
        width: 810px;
        margin-left: 30px;
        float: left;
    }

    /* 新增 */
    .apped {
        width: 100%;
        display: none;
    }

    /* 基础资料 */
    .basics {
        width: 100%;
    }

    /* 基础信息(上面) */
    .jichu {
        width: 100%;
        height: 46px;
    }

    .jichu h3 {
        line-height: 46px;
        font-size: 26px;
    }



    .zhujp{
        width: 490px;
        height: auto;
        background-color: #ddd;
        text-indent: 30px;
    }
    .zhujp li{
        line-height: 30px;
    }
    .zhujp li:hover{
        background:lightblue;
        cursor:pointer;
    }
    .xiaozz{
        display: flex;
        z-index:55;
    }
    .xiaozz li{
        flex: 1;
        line-height: 30px;
        text-align: align;
    }





    /* 基础信息(下面) */
    .message {
        width: 100%;
        min-height: 200px;
    }

    .form-group {
        width: 810px;
        margin-right: 0;
        margin-left: 0;
    }

    .table thead th,
    .table tbody td,
    .table tbody td input {
        text-align: center;
    }

    .table tbody td {
        height: 37px;
        border: 1px solid #ddd;
        position: relative;
    }

    .look tr td{
        line-height: 36px;
        text-align: center;
    }
    .biaodan thead th{
        line-height: 36px;
        text-align: center;
        border: solid 2px #ddd;
    }
    .biaodan tbody tr td input {
        width: 100%;
        height: 37px;
        border: none;
        line-height: 37px;
        border: 1px solid #ddd;
        position: absolute;
        left: 0;
        top: 0;
    }

    /* 查看/修改 */
    .added {
        width: 100%;
        display: none;
    }

    .chengji tbody tr td {
        line-height: 37px;
        padding: 0;
    }

    .chengji tbody tr td:nth-child(3) {
        padding: 0;
    }

    .chengji tbody tr td input {
        width: 100%;
        height: 37px;
        border: solid 1px #ddd;
        line-height: 37px;
        position: absolute;
        left: 0;
        top: 0;
    }

    /* .chengji thead tr th{
        height: 56px;
        line-height: 56px;
    } */
    .luru {
        width: 810px;
        height: 56px;
    }
    .luru tr td{
        width: 66px;
        height: 34px;
        line-height:34px;
        text-align: center;
        border: solid 1px #ddd;
    }
    .luru tr td:nth-child(3){
        margin: 0;
    }
    .luru tr td input{
        width: 66px;
        height: 58px;
        line-height: 58px;
        border: none;
        text-align: center;
    }
    .bishi {
        width: 100%;
        height: 58px;
        margin: 0;
    }

    .bishi tbody tr td input {
        border: none;
    }

    .jutichengji {
        margin: 0;
        border: none;
    }

    .jutichengji tbody tr td {
        padding: 0;
    }

    .jutichengji tbody tr td input {
        border: none;
    }

    .bHead {
        line-height: 26px;
        height: 26px;
    }

    .banji thead th,.chengji thead th{
        line-height:36px;
        text-align: center;
        border: solid 1px #ddd;
    }
    
    .banji tbody tr td input {
        width: 100%;
        height: 37px;
        border: none;
        line-height: 37px;
        border: 1px solid #ddd;
        position: absolute;
        left: 0;
        top: 0;
    }
    .t{
        width:570px;
    }
    .t tr th,.t tr td{
        border: 1px solid;
        text-align: center;
        border-spacing: 0px;
        height:30px;
    }
</style>
