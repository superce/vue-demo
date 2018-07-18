import Vue from 'vue'
import Vuex from 'vuex'
import comment from './comment/comment.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    comment
  }
})