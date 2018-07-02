<template>
    <div class="must-do">
        <must-do-head></must-do-head>
        <todo-list :todo-thing="todoThings" @clickItem="clickItem" @clickDelete="clickDelete"></todo-list>
    </div>
</template>

<script>
  import head from './base/head.vue'
  import todoList from './base/todoList.vue'
  export default {
    data(){
      let todoThings = [
        {
          progress : 70,
          name : '这是事情的名字',
          date : '2018／07／01',
          id : 1
        },
        {
          progress : 100,
          name : '这也是要做的事情',
          date : '2018／06／30',
          id : 2
        }
      ];
      return{
        todoThings
      }
    },
    methods : {
      clickItem(id){
        const t = this;
        t.$store.commit('setToDoThingId',id);
        t.$router.push({path : 'thing-detail'});
      },
      clickDelete(id){
        const t = this;
      }
    },
    components : {
      'todo-list' : todoList,
      'must-do-head' : head,
    },
  }
</script>

<style lang="scss">

</style>
