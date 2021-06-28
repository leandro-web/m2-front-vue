<template>
  <div class="container">
    <h1 class="txt-roxo text-center m-5">Desafio M2 para desenvolvimento Front-End</h1>
    <Categorias 
      sub1 ='Selecione um plano de internet para continuar'
      sub2 = 'Escolha seu pacote de canais'
      sub3 = 'Agora escolha seu pacote de telefone fixo'
    />
    <Carrinho />
  </div>
</template>

<script>
import Categorias from './components/Categorias.vue';
import Carrinho from './components/Carrinho.vue';

export default {

  name: 'App',
  components: {
    Categorias,
    Carrinho
  },

}
</script>

<style>
h1{
  font-size: 26px;
}
.txt-roxo{
  color: #609;
}
</style>
