import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
    state: {
        produtos:[]
    },
    getters: {},
    mutations: {
        setProduto(state, produto){
            state.produtos = [
                ...state.produtos.filter(prod => prod.id_categoria !== produto.id_categoria),
                produto
            ]
        }
    },
    actions: {}
});