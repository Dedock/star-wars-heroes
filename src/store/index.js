/**
 * @desc store module for general purpose
 */

import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
// import * as types from './mutation-types'

/* Plug in Vuex store */
Vue.use(Vuex)

const state = {}

const getters = {}

const actions = {}

const mutations = {}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules
})
