<template>
    <div>
        <div class="content">
        <div class="cHead">
            <h1>首页展示</h1>
        </div>
        <div class="con">
            <p>所有人数</p>
            <table>
                <tr>
                    <th>班级</th>
                    <th colspan="3">人数</th>
                    <th colspan="2">末班</th>
                    <th colspan="3">违纪</th>
                </tr>
                <tr>
                    <th>/</th>
                    <th>在校人数</th>
                    <th>休学人数</th>
                    <th>退学人数</th>
                    <th>本月末班人数</th>
                    <th>本月成材率(各阶段)</th>
                    <th>本周违纪人数</th>
                    <th>上周违纪人数</th>
                    <th>违纪类型细分</th>
                </tr>
                <tr>
                    <td>
                        1809
                    </td>
                    <td>
                        31
                    </td>
                    <td>
                        0
                    </td>
                    <td>
                        0
                    </td>
                    <td>
                       6
                    </td>
                    <td>90%</td>
                    <td>6</td>
                    <td>5</td>
                    <td>1111111</td>
                </tr>
                <tr>
                    <td>
                        1809
                    </td>
                    <td>
                        31
                    </td>
                    <td>
                        0
                    </td>
                    <td>
                        0
                    </td>
                    <td>
                        6
                    </td>
                    <td>90%</td>
                    <td>6</td>
                    <td>5</td>
                    <td>1111111</td>
                </tr>
            </table>
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
        text-align: center;
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
        padding: 5px 10px;
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