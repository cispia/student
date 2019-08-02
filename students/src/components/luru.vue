<<template>
    <div class="content">
        <!-- 学生讲师(上面)-->
        <div class="classify">
            <h3><span id="student" class="classEs">学生</span><span id="teacher">讲师</span></h3>
        </div>
        <!-- (下面) -->
        <div class="studentBottom">
            <div class="student" style="display: block;">
                <!-- 学生权限(左边) -->
                <div class="jurisdiction">
                    <!-- 权限 -->
                    <ul id="quanxian">
                        <li class="active">新增</li>
                        <li>查看</li>
                        <li>修改</li>
                    </ul>
                </div>
                <!-- 具体权限(右边) -->
                <div id="specific">
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
                                        <label for="inputPassword3" class="col-sm-2 control-label">照片上传</label>
                                        <div class="col-sm-2 col-sm-off-2 row-sm-2" style="border:1px solid #ddd;padding:0;margin-left:16px;position:relation;">
                                            <input type="file" style="opacity:0;width:137px;height:160px;padding:0;"
                                                class="form-control" id="inputPassword3">
                                            <img style="width:135px;height:160px;position:absolute;left:0;top:0;" src="data:image/jpeg;base64,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">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-2 control-label">学号</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputEmail3" placeholder="学号">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword3" class="col-sm-2 control-label">姓名</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputPassword3"
                                                placeholder="姓名">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-2 control-label">身份证号</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputEmail3" placeholder="身份证">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword3" class="col-sm-2 control-label">手机号</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputPassword3"
                                                placeholder="手机号">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-2 control-label">班主任</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputEmail3" placeholder="班主任姓名">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword3" class="col-sm-2 control-label">班主任手机号</label>
                                        <div class="col-sm-10">
                                            <input type="tel" class="form-control" id="inputPassword3"
                                                placeholder="班主任手机号">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword3" class="col-sm-2 control-label">性别</label>
                                        <div class="col-sm-10">
                                            <label class="radio-inline">
                                                <input type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                                    value="option1">男
                                            </label>
                                            <label class="radio-inline">
                                                <input type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                                    value="option2">女
                                            </label>
                                        </div>
                                    </div>
                                    <!-- 父亲信息 -->
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-2 control-label">父亲姓名</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputEmail3" placeholder="父亲姓名">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword3" class="col-sm-2 control-label">父亲电话</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputPassword3"
                                                placeholder="父亲电话">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword3" class="col-sm-2 control-label">父亲职业</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputPassword3"
                                                placeholder="父亲职业">
                                        </div>
                                    </div>
                                    <!-- 母亲信息 -->
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-2 control-label">母亲姓名</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputEmail3" placeholder="母亲姓名">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword3" class="col-sm-2 control-label">母亲电话</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputPassword3"
                                                placeholder="母亲电话">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword3" class="col-sm-2 control-label">母亲职业</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputPassword3"
                                                placeholder="母亲职业">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-2 control-label">籍贯(省市县)</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputEmail3" placeholder="籍贯">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword3" class="col-sm-2 control-label">大区</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputPassword3"
                                                placeholder="大区">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword3" class="col-sm-2 control-label">入学时间</label>
                                        <div class="col-sm-10">
                                            <input type="date" class="form-control" id="inputPassword3" placeholder="">
                                        </div>
                                    </div>
                                    <!-- 学制 -->
                                    <div class="form-group">
                                        <label for="inputPassword3" class="col-sm-2 control-label">学制</label>
                                        <div class="col-sm-10">
                                            <label class="radio-inline">
                                                <input type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                                    value="option1"> 15个月
                                            </label>
                                            <label class="radio-inline">
                                                <input type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                                    value="option2"> 2+1
                                            </label>
                                            <label class="radio-inline">
                                                <input type="radio" name="inlineRadioOptions" id="inlineRadio3"
                                                    value="option3"> 3+1
                                            </label>
                                        </div>
                                    </div>
                                    <!-- 学籍 -->
                                    <div class="form-group">
                                        <label for="inputPassword3" class="col-sm-2 control-label">学籍(成考)</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputPassword3"
                                                placeholder="成考">
                                            <input type="text" style="margin-top: 20px;" class="form-control"
                                                id="inputPassword3" placeholder="学历">
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <!-- 班级信息 -->
                        <div class="message">
                            <div class="jichu">
                                <h3>班级信息</h3>
                            </div>
                            <div class="messageBottom">
                                <form class="form-horizontal">
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-2 control-label">班级</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputEmail3" placeholder="班级">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-offset-5 row-sm-offset-1 col-sm-10">
                                            <button type="submit" class="btn btn-default">保存信息</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- 查看 -->
                    <div class="apped">
                        <!-- 积分资料 -->
                        <div>
                            <!-- 查看(上面) -->
                            <div class="jichu">
                                <h3>积分资料</h3>
                            </div>
                            <!-- 查看(下面) -->
                            <div class="jcBottom">
                                <table class="table table-bordered look" border="1" cellspacing="0" cellpadding="0" style="border-collapse: collapse">
                                    <tr>
                                        <td>#</td>
                                        <td>姓名</td>
                                        <td>学号</td>
                                        <td>总分</td>
                                        <td>扣分</td>
                                        <td>剩余分</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>小朱</td>
                                        <td>110</td>
                                        <td>100</td>
                                        <td>0</td>
                                        <td>100</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
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
                                            <td><input type="text" value="3423" /></td>
                                            <td><input type="text" value="3小朱423" /></td>
                                            <td>100</td>
                                            <td><input type="datetime-local" value="100" /></td>
                                            <td><input type="text" value="0" /></td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value="3423" /></td>
                                            <td><input type="text" value="3小朱423" /></td>
                                            <td>100</td>
                                            <td><input type="datetime-local" value="100" /></td>
                                            <td><input type="text" value="0" /></td>
                                            <td>100</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                        <!-- 既往成绩 -->
                        <div>
                            <!-- 既往成绩(上面) -->
                            <div class="jichu">
                                <h3>既往成绩</h3>
                            </div>
                            <!-- 既往成绩(下面) -->
                            <div class="jcBottom">
                                <table class="table table-bordered table-striped biaodan">
                                    <thead>
                                        <th>月度</th>
                                        <th>讲师</th>
                                        <th>班级</th>
                                        <th>时间</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="text" value="第一个月" /></td>
                                            <td><input type="text" value="林润琴" /></td>
                                            <td><input type="text" value="曲晓芳" /></td>
                                            <td><input type="month" /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value="3423" /></td>
                                            <td><input type="text" value="3小朱423" /></td>
                                            <td>100</td>
                                            <td><input type="month" value="100" /></td>

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
                                        <th>单元</th>
                                        <th>宿舍房间</th>
                                        <th>成员</th>
                                        <th>电话</th>
                                        <th>班主任姓名</th>
                                        <th>班主任电话</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="text" value="f座" /></td>
                                            <td><input type="text" value="200" /></td>
                                            <td><input type="text" value="曲晓芳" /></td>
                                            <td><input type="tel" /></td>
                                            <td><input type="text" value="曲晓芳" /></td>
                                            <td><input type="tel" /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value="3423" /></td>
                                            <td><input type="text" value="3小朱423" /></td>
                                            <td><input type="text" value="曲晓芳" /></td>
                                            <td><input type="tel" /></td>
                                            <td><input type="text" value="曲晓芳" /></td>
                                            <td><input type="tel" /></td>
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
                                    <label for="inputPassword3" class="col-sm-2 control-label">姓名</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputPassword3" placeholder="姓名">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword3" class="col-sm-2 control-label">手机号</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputPassword3" placeholder="手机号">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword3" class="col-sm-2 control-label">父亲手机号</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputPassword3" placeholder="手机号">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword3" class="col-sm-2 control-label">母亲手机号</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputPassword3" placeholder="手机号">
                                    </div>
                                </div>
                                <!-- 学制 -->
                                <div class="form-group">
                                    <label for="inputPassword3" class="col-sm-2 control-label">学制</label>
                                    <div class="col-sm-10">
                                        <label class="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                                value="option1"> 15个月
                                        </label>
                                        <label class="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                                value="option2"> 2+1
                                        </label>
                                        <label class="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" id="inlineRadio3"
                                                value="option3"> 3+1
                                        </label>
                                    </div>
                                </div>
                                <!-- 学籍 -->
                                <div class="form-group">
                                    <label for="inputPassword3" class="col-sm-2 control-label">学籍(成考)</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputPassword3" placeholder="成考">
                                        <input type="text" style="margin-top: 20px;" class="form-control"
                                            id="inputPassword3" placeholder="学历">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-offset-4 row-sm-offset-1 col-sm-10">
                                        <button type="submit" class="btn btn-default">保存信息</button>
                                        <button type="submit" class="btn btn-default col-sm-offset-2">开除/退学</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 讲师 -->
            <div class="teacher" style="display: none">
                <!-- 讲师(左边) -->
                <div class="jurisdiction">
                    <ul id="qxUl">
                        <li class="active">查看/修改</li>
                        <li>编辑宿舍</li>
                        <li>月度成绩录入</li>
                        <li>班级处理</li>
                    </ul>
                </div>
                <!-- 讲师(右边) -->
                <div id="specific">
                    <!-- 查看/修改 -->
                    <div class="added" style="display: block">
                        <!-- 查看/修改(上面) -->
                        <div class="jichu">
                            <h3>学生信息</h3>
                        </div>
                        <div class="jcBottom">
                            <table class="table table-bordered table-striped banji">
                                <thead>
                                    <th>班级</th>
                                    <th>人数(人)</th>
                                    <th>末班人数</th>
                                    <th>剩余人数</th>
                                    <th>讲师选择</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="text" value="1808" /></td>
                                        <td><input type="text" value="33" /></td>
                                        <td><input type="text" value="3" /></td>
                                        <td><input type="text" value="30" /></td>
                                        <td><input type="text" value="曲晓芳" /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <form class="form-horizontal">
                                <div class="form-group">
                                    <div class="col-sm-offset-5 row-sm-offset-1 col-sm-10">
                                        <button type="submit" class="btn btn-default">保存</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- 编辑宿舍 -->
                    <div class="added">
                        <!-- 宿舍安排(上面) -->
                        <div class="jichu">
                            <h3>宿舍安排</h3>
                        </div>
                        <!-- 宿舍安排(下面) -->
                        <div class="jcBottom">
                            <table class="table table-bordered table-striped chengji">
                                <thead>
                                    <th>单元楼</th>
                                    <th>宿舍</th>
                                    <th>总人数(人)</th>
                                    <th>住入人数(人)</th>
                                    <th>空床位(人)</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="text" value="f座" /></td>
                                        <td><input type="text" value="203" /></td>
                                        <td><input type="text" value="8" /></td>
                                        <td><input type="text" value="8" /></td>
                                        <td><input type="text" value="0" /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <form class="form-horizontal">
                                <div class="form-group">
                                    <div class="col-sm-offset-4 row-sm-offset-1 col-sm-10">
                                        <button type="submit" class="btn btn-default">保存信息</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- 月度成绩录入 -->
                    <div class="added">
                        <div class="jichu">
                            <h3>成绩录入</h3>
                        </div>
                        <div class="jcBottom">
                            <table class="luru">
                                <tr>
                                    <td>学号</td>
                                    <td>学生姓名</td>
                                    <td colspan="4">
                                        <table class="bishi">
                                            <tr>
                                                <td style="width:324px;height:26px;line-height: 26px;" colspan="4">笔试成绩</td>
                                            </tr>
                                            <tr>
                                                <td style="line-height: 28px;height:28px;width:81px;">第一周</td>
                                                <td style="line-height: 28px;height:28px;width:82px;">第二周</td>
                                                <td style="line-height: 28px;height:28px;width:81px;">第三周</td>
                                                <td style="line-height: 28px;height:28px;width:82px;">月考</td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td>机试</td>
                                    <td>面试</td>
                                    <td>综合积分</td>
                                    <td>是/否重修</td>
                                </tr>
                                <tr>
                                    <td><input type="text" value="1808" /></td>
                                    <td><input type="text" value="33" /></td>
                                    <td><input type="text" value="3" /></td>
                                    <td><input type="text" value="3" /></td>
                                    <td><input type="text" value="3" /></td>
                                    <td><input type="text" value="3" /></td>
                                    <td><input type="text" value="30" /></td>
                                    <td><input type="text" value="87" /></td>
                                    <td><input type="text" value="88" /></td>
                                    <td><input type="text" value="88" /></td>
                                </tr>
                            </table>
                            <form class="form-horizontal">
                                <div class="form-group">
                                    <div class="col-sm-offset-5 row-sm-offset-2 col-sm-10">
                                        <button type="submit" class="btn btn-default row-sm-offset-2">保存</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- 班级处理 -->
                    <div class="added">
                        <div class="jichu">
                            <h3>班级处理</h3>
                        </div>
                        <div class="jcBottom">
                            <table class="table table-bordered table-striped banji">
                                <thead>
                                    <th>班级</th>
                                    <th>人数(人)</th>
                                    <th>末班人数</th>
                                    <th>剩余人数</th>
                                    <th>讲师选择</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="text" value="1808" /></td>
                                        <td><input type="text" value="33" /></td>
                                        <td><input type="text" value="3" /></td>
                                        <td><input type="text" value="30" /></td>
                                        <td><input type="text" value="曲晓芳" /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <form class="form-horizontal">
                                <div class="form-group">
                                    <div class="col-sm-offset-5 row-sm-offset-1 col-sm-10">
                                        <button type="submit" class="btn btn-default">保存</button>
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
export default {
    mounted () {
       var qxList = document.querySelectorAll('#quanxian li');
    var qxLi = document.querySelectorAll('#qxUl li');
    console.log(qxList)
    var qxboxs = document.querySelectorAll('#specific .apped');
    var addboxs = document.querySelectorAll('#specific .added');
    console.log(qxboxs)
    var xuesheng = document.querySelector('.student');
    var laoshi = document.querySelector('.teacher');


    student.onclick = function () {
        xuesheng.style.display = 'inline-block';
        student.className = 'classEs';
        laoshi.style.display = 'none';
        teacher.className = '';
    }
    teacher.onclick = function () {
        xuesheng.style.display = 'none';
        student.className = '';
        laoshi.style.display = 'inline-block';
        teacher.className = 'classEs';
    }

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
    for (var i = 0; i < qxLi.length; i++) {
        qxLi[i].onclick = function () {
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
    data() {
        return {
            
        }
    },

}
</script>
<style scoped>
.shangchuan{
    text-align:center;  
    margin-left: 257px;
}
/* h3{
    text-align:left;
}
    .col-sm-10{
        width:300px;
        text-align:left;
    }
    .form-control{
        width:400px;
    }
    .col-sm-offset-5{
        margin:0;
        padding-left:250px;
    } */
     /* 详情 */
    /* .content {
        width: 1000px;
        min-height: 700px;
        margin-left: 308px;
        text-align:center;
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
        line-height: 56px;
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
        width: 80px;
        height: 58px;
        line-height:56px;
        text-align: center;
        border: solid 1px #ddd;
    }
    .luru tr td:nth-child(3){
        margin: 0;
    }
    .luru tr td input{
        width: 80px;
        height: 58px;
        line-height: 58px;
        border: none;
        text-align: center;
    }
    .bishi {
        width: 324px;
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
</style>
