<template>
    <div>
        <hr/>
        <div class="table-responsive">
            <table class="table">
                <tr class="cinza">
                    <td>Taxa de instalação</td>
                    <td class="text-right">Grátis</td>
                </tr>

                <tr class="cinza" v-for="item in this.$store.state.produtos" :key="item.id">
                    <td>{{item.title}}</td>
                    <td class="text-right">R${{item.preco}}</td>
                </tr>
               

                <tr class="txt-roxo txt-total">
                    <td>Total</td>
                    <td class="text-right">R${{somaTotal}}/mês</td>
                </tr>
                <tr>
                    <td><button type="button" class="btn btn-primary">Continuar</button></td>
                    <td></td>
                </tr>
            </table>
        </div>

        
    </div>
</template>

<script>
export default {
  name: 'Carrinho',
  computed:{
      somaTotal(){
        return this.$store.state.produtos
                .map(produto => Number(produto.preco))
                .reduce((acc, curr) => acc + curr, 0)
        
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.txt-total{
    font-weight: bold;
    font-size: 18px;
}
td{
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
}
.cinza{
    color: #999;
}
</style>