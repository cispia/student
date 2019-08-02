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
                    <th>人数</th>
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
                        29
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
                        <button id="delete">修改</button>
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
                        29
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
                        <button id="delete">修改</button>
                    </td>
                     <td>
                        <button id="delete">删除</button>
                    </td>
                </tr>
            </table>
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