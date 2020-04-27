import Vue from 'vue';
import Vuex from 'vuex';
import apiService from '../services/apiService'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        message: "Hello i m from store",
        countryCases: '',
        contacts: ''
    },
    mutations: {
        GET_COUNTRY_CASES(state, payload) {
            state.countryCases = payload
        },
        GET_CONTACTS(state, payload) {

            state.contacts = payload
        }
    },
    actions: {
        getCountryCases({ commit }) {
            apiService.getCountryCases()
                .then(response => {
                    response.json().then(data => {
                        commit('GET_COUNTRY_CASES', data)

                    });
                })

        },
        getContacts({ commit }) {
 
            apiService.getContacts()
                .then(response => {
                    response.json().then(data => {
                        commit('GET_CONTACTS', data)
                    });
                })
        }
    },
    getters: {
        countrycases(state) {
            return state.countryCases;
        },
        contacts(state) {
            return state.contacts;
        }
    },
})

