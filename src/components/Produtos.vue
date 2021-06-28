<template>
    <div class="container">
        <div class="row">
            <div v-for="prod of getProd" :key="prod.id" >
                <div class="col-md-2 col-sm-4 col-xs-6" v-if="prod.id_categoria === categoria" >
                    <div class="p-2 box-produto">
                        <input 
                            type="radio" 
                            :disabled="categoria !== 1 && !internetSelecionada"
                            :id="prod.id" 
                            :name="categoria" 
                            :value="prod.id"
                            @click="selecionaCategoria(prod)"
                        ><br />
                        <label :for="prod.id" class="prod-txt-title">{{prod.title}}</label>
                        <p class="prod-txt-preco">R$ {{prod.preco}}</p>
                        <p class="text-right cursor">+ Detalhes</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import GetProdutos from '../services/produtos';

    export default {
    name: 'Produtos',
    props: {
        categoria: Number,
        internetSelecionada: Boolean
    },
    data(){
        return {
            getProd: [],
        }
    },
    mounted(){   
        GetProdutos.listar().then(resposta => {
            this.getProd = resposta.data;
        })
    },
    methods:{
        selecionaCategoria(produto) {
            this.$emit("categoriaSelecionada");

            this.$store.commit('setProduto', produto)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-produto{
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-top: 20px;
    padding: 10px;
}
.prod-txt-title{
    font-weight: bold;
    font-size: 16px;
}
.prod-txt-preco{
    font-weight: bold;
    font-size: 13px;
}
.cursor{
    cursor: pointer;
}
</style>