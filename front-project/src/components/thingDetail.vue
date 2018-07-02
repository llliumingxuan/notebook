<template>
   <div class="thing-detail">
     <thing-detail-head></thing-detail-head>
     <div class="thing-content">
       <el-form label-width="150px" style="margin-top: 80px">
         <el-col :span=12 :offset=5>
           <el-form-item label="事情名称">
             <el-input v-model="thingDetail.name" :readonly="true"></el-input>
           </el-form-item>
         </el-col>
         <el-col :span=12 :offset=5>
           <el-form-item label="预计完成时间">
             <el-date-picker v-model="thingDetailDate"
                             type="date"
                             placeholder="选择日期"
                             :picker-options="pickerOptions">
             </el-date-picker>
           </el-form-item>
         </el-col>
       </el-form>
     </div>
   </div>
</template>

<script>
    import head from './base/head.vue'
    export default {
      data(){
        let thingDetail = {
          id : 1,
          name : '这也是要做的事情',
          date : '2018／06／30'
        };
        let pickerOptions = {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        };
        return{
          thingDetail,
          thingDetailDate : '',
          pickerOptions
        }
      },
      components : {
        'thing-detail-head' : head
      },
      computed : {
        thingId(){
          const t = this;
          return t.$store.getters.getToDoThingId
        }
      }
    }
</script>

<style lang="scss">
  .thing-detail{
    height: 100%;
    .thing-content{
      height: 100%;
    }
  }
</style>
