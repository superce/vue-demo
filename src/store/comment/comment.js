import axios from 'axios'

const state = {
  all:[]
}

const mutations = {
  loadComment(state,getData){
    state.all = getData
  }
}

const actions = {
  loadComment({comit}){
    axios.get("http://localhost:3000/goods").then(
      res => {
        let getData = res.data
        comit('loadComment',getData)
      }
    )
  }
}

export default{
  state,
  mutations,
  actions

}