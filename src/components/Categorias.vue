<template>
    <div>
        <div class="row container-categoria" v-for="cat of getCat" :key="cat.id">
            <span class="txt-roxo titulo-categoria">{{cat.title}}</span>

            <p v-if="cat.id === 1">{{sub1}}</p>
            <p v-if="cat.id === 2">{{sub2}}</p>
            <p v-if="cat.id === 3">{{sub3}}</p>            
            <Produtos :categoria="cat.id" />
        </div>
    </div>
</template>

<script>

import GetCategorias from '../services/categorias';

import Produtos from './Produtos.vue';

export default {
    name: 'Categoria',
    components: {
        Produtos
    },
    props: {
        sub1: String,
        sub2: String,
        sub3: String,
    },
    data(){
        return {
            getCat: []
        }
    },
    mounted(){        
        GetCategorias.listar().then(resposta => {
            this.getCat = resposta.data;
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-categoria{
    margin: 50px 0px ;
}
.titulo-categoria{
    font-size: 16px;
    font-weight: bold;
}
</style>
