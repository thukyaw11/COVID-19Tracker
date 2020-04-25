import Vue from 'vue';
import Vuex from 'vuex';
import apiService from '../services/apiService'

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        message : "Hello i m from store",
        countryCases : ''
    },
    mutations : {
        GET_COUNTRY_CASES(state,payload){
            state.countryCases = payload
        }
    },
    actions : {
        getCountryCases({commit}){
        apiService.getCountryCases()
        .then(response => {
            response.json().then(data => {
                console.log(data);
            commit('GET_COUNTRY_CASES',data)

            });
          })

        }
    },
    getters : {
        countrycases(state){
            return state.countryCases;
        }
    },  
})

