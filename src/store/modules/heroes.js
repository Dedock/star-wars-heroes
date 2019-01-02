import * as types from '../mutation-types'
import Vue from 'vue'
// import { api } from '@/modules/api'

export const state = {
  heroes: []
}

export const getters = {}

export const actions = {
  async getHeroes ({ state, commit }, { search, side }) {
    try {
      const { data } = await Vue.axios.post('https://cors-anywhere.herokuapp.com/https://fierce-gorge-95655.herokuapp.com/api/heroes', null, {
        params: {
          side,
          search
        }
      })

      commit(types.SET_HEROES, data)
    } catch (e) {
      console.log(e)
    }
  }
}

export const mutations = {
  [types.SET_HEROES] (state, data) {
    state.heroes = data
  }
}
