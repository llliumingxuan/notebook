import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import mustDo from '../components/mustDo'
import chooseDo from '../components/chooseDo'
import thingDetail from '../components/thingDetail'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/index',
      redirect: '/'
    },
    //必做事件列表页
    {
      path: '/must-thing',
      component: mustDo
    },
    //选做事件列表页
    {
      path: '/choose-thing',
      component: chooseDo
    },
    {
      path: '/add-thing'
    },
    {
      path: '/thing-detail',
      component: thingDetail,
      beforeEnter: (to, from, next) => {
        const t = this;
        let $vue = t.a.app;
        let id = typeof $vue.$store === 'object' ? $vue.$store.getters.getToDoThingId : '';
        if (id !== '') {
          next()
        } else {
          router.push({path : '/'})
        }
      }
    }
  ]
})
export default router
