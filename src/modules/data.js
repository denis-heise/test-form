import axios from "axios";

export default{
    namespaced: true,
    state () {
        return {
            data: []
        }
    },
    getters: {
        newData (state){
            return state.data;
        }
    },
    mutations: {
        GET_DATA (state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async GET_DATA (context){
            const {data} = await axios.get('https://data-form.onrender.com/data');
            context.commit('GET_DATA', data);
         }
    }
}
