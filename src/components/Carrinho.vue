<template>
    <div>
        <hr/>
        <div class="table-responsive">
            <table class="table">
                <tr class="cinza">
                    <td>Taxa de instalação</td>
                    <td class="text-right">Grátis</td>
                </tr>
                <tr class="cinza">
                    <td>200MB</td>
                    <td class="text-right">R$99,99</td>
                </tr>
                <tr class="cinza">
                    <td>Full HD</td>
                    <td class="text-right">R$149,99</td>
                </tr>
                <tr class="cinza">
                    <td>Ilimitado Fixo Brasil</td>
                    <td class="text-right">R$19,99</td>
                </tr>
                <tr class="txt-roxo txt-total">
                    <td>Total</td>
                    <td class="text-right">R$269,97/mês</td>
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
  props: {
    msg: String
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