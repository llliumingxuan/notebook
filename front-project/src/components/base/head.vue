<template>
    <div class="header">
        <el-col :span=6 :offset=2>
          <div class="left">学会记录</div>
        </el-col>
        <el-col :span=4 :offset=6>
          <ul class="right">
            <li>准确</li>
            <li>及时</li>
            <li>高效</li>
          </ul>
        </el-col>
        <el-col :span=4 :offset=1>
          <div class="user-content">
            <span class="user-name">{{username}}</span>
            <span>退出</span>
          </div>
        </el-col>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          username : '刘茗轩'
        }
      }
    }
</script>

<style lang="scss">
   .header{
     height: 80px;
     border-bottom: 1px solid #222;
     .left{
       line-height: 80px;
       text-align: center;
       font-size: 25px;
     }
     .right{
       overflow: hidden;
       line-height: 80px;
       li{
         display: block;
         height: 80px;
         width: 60px;
         float: left;
         font-size: 18px;
         text-align: center;
       }
     }
     .user-content{
       font-size: 20px;
       span{
         cursor: pointer;
         margin-right: 10px;
         display: inline-block;
         height: 30px;
         line-height: 30px;
         margin-top: 25px;
       }
       .user-name{
         padding-right: 20px;
         border-right : 3px solid #555555;
         &:hover{
           color: #b8b8b8;
         }
       }
     }
   }
</style>
