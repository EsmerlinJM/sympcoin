import Vue from 'vue'
import Vuex from 'vuex'
import services from './services'

Vue.use(Vuex)

const state = {
  services
}

export default new Vuex.Store({
  state: {
    services:services,
    blocks: []
  },
  mutations: {

  },
  actions: {

  }
})
