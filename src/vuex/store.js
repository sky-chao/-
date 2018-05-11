import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        age: '18' //存储了一个公共状态age
    },
    mutations: {
        showAge(state, msg) {
            state.age = msg;
        }
    },

})
export default store