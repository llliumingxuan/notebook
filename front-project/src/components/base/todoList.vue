<template>
    <div class="todo-thing">
        <div class="thing-item" v-for="item,index in todoThing" :key="index" @click="clickItem(item.id)">
          <el-col :span=4 :offset=1>
            <el-progress type="circle" :percentage=item.progress :width="80" :status="item.progress === 100?'success' : '' ">
            </el-progress>
          </el-col>
          <el-col :span=4>
            <div class="thing-name">{{item.name}}</div>
          </el-col>
          <el-col :span=4 :offset=2>
            <div class="thing-date">{{item.date}}</div>
          </el-col>
          <el-col :span=2 :offset=5>
            <div class="thing-delete" @click.stop="clickDelete(item.id)">放弃</div>
          </el-col>
        </div>
    </div>
</template>

<script>
    export default {
      props : ['todoThing'],
      data(){
        return{

        }
      },
      methods : {
        clickItem(id){
          const t = this;
          t.$emit('clickItem',id);
        },
        clickDelete(id){
          const t = this;
          t.$emit('clickDelete',id)
        }
      }
    }
</script>

<style lang="scss">
  .thing-item{
    height: 80px;
    border: 1px solid #555555;
    padding: 5px 0;
    margin: 10px 80px 0;
    border-radius: 10px;
    cursor: pointer;
    .thing-name,.thing-date,.thing-delete{
      height: 80px;
      line-height: 80px;
      text-align: center;
    }
    .thing-delete{
      border-radius: 50%;
      background-color: #fc6360;
      color: #eeeeee;
    }
  }
</style>
