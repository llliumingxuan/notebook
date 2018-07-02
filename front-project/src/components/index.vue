<template>
    <div class="index">
      <index-head></index-head>
      <div class="content">
        <div class="entrance must-do" @click="toMustDoThing">
        必做事情
      </div>
        <div class="entrance choose-do" @click="toChooseDoThing">
        选做事情
      </div>
        <div class="entrance add-do" @click="toAddDoThing">
        添加事情
      </div>
      </div>
    </div>
</template>

<script>
  import head from './base/head.vue'
    export default {
      data(){
        return{
            m : 1
        }
      },
      components : {
          'index-head' : head
      },
      methods : {
        toMustDoThing(){
          const t = this;
          t.$router.push({path : 'must-thing'});
        },
        toChooseDoThing(){
          const t = this;
          t.$router.push({path : 'choose-thing'});
        },
        toAddDoThing(){
          const t = this;
          t.$router.push({path : 'add-thing'})
        }
      }
    }
</script>

<style lang="scss">
   .index{
     height: 100%;
     .content{
       margin-top: 100px;
       display: flex;
       flex-direction: row;
       justify-content: space-around;
       align-items: center;
       .entrance{
         width: 200px;
         height: 400px;
         border: 2px solid #555555;
         line-height: 400px;
         text-align: center;
         font-size: 25px;
         cursor: pointer;
         transition: all .4s ease-in-out .1s;
         &:hover{
           width: 240px;
           height: 480px;
           line-height: 480px;
           font-size: 28px;
         }
       }
       .must-do:hover{
         background-color: red;
         color: #eeeeee;
       }
       .choose-do:hover{
         background-color: #fcf73b;
         color: #000;
       }
       .add-do:hover{
         background-color: #cffcf7;
         color: #555555;
       }
     }
   }
</style>
