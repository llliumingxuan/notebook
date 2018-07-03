<template>
   <div class="thing-detail">
     <thing-detail-head></thing-detail-head>
     <div class="thing-content">
       <p class="title" :class="{'must-do' : thingDetail.type === 1,'choose-do' : thingDetail.type === 2}">{{thingType[thingDetail.type-1]}}</p>
       <el-form label-width="150px">
         <el-col :span=12 :offset=5>
           <el-form-item label="事情名称">
             <el-input v-model="thingDetail.name" :readonly="true"></el-input>
           </el-form-item>
         </el-col>
         <el-col :span=12 :offset=5>
           <el-form-item label="预计完成时间" class="is-required">
             <el-date-picker v-model="thingDetailDate"
                             type="date"
                             placeholder="选择日期"
                             :picker-options="pickerOptions">
             </el-date-picker>
           </el-form-item>
         </el-col>
         <el-col :span=7  :offset=5>
           <el-form-item label="开始时间">
             <el-input v-model="thingDetail.startDate" :readonly="true">
             </el-input>
           </el-form-item>
         </el-col>
         <el-col :span=12 :offset=5>
           <el-form-item label="事情详情描述" class="is-required">
             <el-input type="textarea"
                       :autosize="{ minRows: 2, maxRows: 4}"
                       placeholder="请输入事情的描述详情"
                       v-model="thingDetail.desc"
             >
             </el-input>
           </el-form-item>
         </el-col>
         <el-col :span=12 :offset=5>
           <el-form-item label="是否需要提醒">
             <el-switch v-model="thingDetail.notice"></el-switch>
             <span style="margin: 0 20px 0 40px">提醒方式</span>
             <el-checkbox-group style="display: inline-block" v-model="thingDetail.noticeType">
               <el-checkbox :label="0">QQ</el-checkbox>
               <el-checkbox :label="1">短信</el-checkbox>
               <el-checkbox :label="2">邮件</el-checkbox>
             </el-checkbox-group>
           </el-form-item>
         </el-col>
         <el-col :span=8  :offset=10 style="margin-top:30px">
           <el-button size="large"
                      type="success"
                      @click="saveThingDetail"
           >保存
           </el-button>
           <el-button size="large"
                      type="primary"
                      @click="cancelThingDetail"
           >取消
           </el-button>
         </el-col>
       </el-form>
     </div>
   </div>
</template>

<script>
    import head from './base/head.vue'
    import ElSwitch from "element-ui/packages/switch/src/component";
    export default {
      data(){
        let thingType = ['必做事情','选做事情'];
        let thingDetail = {
          type : 1,
          id : 1,
          name : '这也是要做的事情',
          date : '2018／06／30',
          startDate : '2018/06/30',
          desc : '123456789',
          notice : true,
          noticeType : [0,1,2]
        };
        let pickerOptions = {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        };
        return{
          thingType,
          thingDetail,
          thingDetailDate : '',
          pickerOptions
        }
      },
      components : {
        ElSwitch,
        'thing-detail-head' : head
      },
      computed : {
        thingId(){
          const t = this;
          return t.$store.getters.getToDoThingId
        }
      },
      methods : {
        saveThingDetail(){
          const t = this;
        },
        cancelThingDetail(){
          const t = this;
          let type = t.thingDetail.type;
          let path = ['/must-thing','/choose-thing'];
          t.$router.push({'path' : path[type-1]});
        }
      }
    }
</script>

<style lang="scss">
  .thing-detail{
    height: 100%;
    .title{
      height: 120px;
      line-height: 120px;
      text-align: center;
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 10px;
    }
    .must-do{
      color: red;
    }
    .choose-do{
      color: #c3c014;
    }
    .thing-content{
    }
  }
</style>
