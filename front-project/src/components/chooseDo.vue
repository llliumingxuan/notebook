<template>
    <div class="choose-do">
        <choose-do-head></choose-do-head>
        <todo-list :todo-thing="todoThings" @clickItem="clickItem" @clickDelete="clickDelete"></todo-list>
    </div>
</template>

<script>
    import head from './base/head'
    import todoList from './base/todoList'
    export default {
      data(){
          let todoThings = [
            {
              progress : 70,
              name : '这是事情的名字',
              date : '2018／06／01',
              id : 1
            },
            {
              progress : 100,
              name : '这也是要做的事情',
              date : '2018／06／03',
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
        'choose-do-head' : head,
        'todo-list' : todoList
      }
    }
</script>

<style>

</style>
