import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter.js'
import mutations from './mutation.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state : {
    todoThingsDetail : {
      id : ''
    }
  },
  getters,
  mutations
})
export default store
