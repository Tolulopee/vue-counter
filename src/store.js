import {createStore} from 'vuex';

const store = createStore(
    {
        state:{
            counter: 0
        },
        getters:{
            
            counter: state => state.counter
        },
        mutations:{
            increment(state){
                state.counter++
            },
            decrement(state){
                state.counter--
            },
            reset(state){
                state.counter = 0
            },
            

        },
        actions:{
            increment({commit}){ // context.commit('increment')
                commit('increment')
            },
            decrement({commit}){ // context.commit('decrement')
                commit('decrement')
            },
            reset({commit}){ // context.commit('reset')
                commit('reset')
            },


        },
        modules:{

        },
    }
)

export default store