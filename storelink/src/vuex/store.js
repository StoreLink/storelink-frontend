import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    
    state: {
        storage: []
    },

    actions: {
        GET_STORAGE_FROM_API({commit}) {
            return axios('http://localhost:8080/storage', {
                method: 'GET',
                mode:'cors'
            })
            .then((response) => {
                commit('SET_STORAGE_TO_VUEX', response.data)
            })
        }
    },

    mutations: {
        SET_STORAGE_TO_VUEX: (state, storage) => {
            state.storage = storage
        }
    },

    getters: {
        STORAGE(state) {
            return state.storage;
        }
    }

})

export default store;