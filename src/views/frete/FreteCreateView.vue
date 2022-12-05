<template>
    <form>
        <h2 class="title is-3">Cadastro de frete</h2>
        <div class="field">
            <label class="label">Cidade de Origem</label>
            <div class="control">
                <input class="input is-success" type="text" placeholder="Insira a cidade">
                <!-- <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                </span> -->
            </div>

            <label class="label">Cidade de Destino</label>
            <div class="control">
                <input class="input is-success" type="text" placeholder="Insira a cidade">
            </div>

            <label class="label">Produto</label>
            <div class="control">
                <input class="input is-success" type="text" placeholder="Insira o produto">
            </div>

            <label class="label">Caminhão</label>
            <div class="control">
                <input class="input is-success" type="text" placeholder="Informe a placa do caminhão">
            </div>

            <label class="label">Motorista</label>
            <div class="control">
                <input class="input is-success" type="text" placeholder="Nome do motorista">
            </div>

            <label class="label">Preço</label>
            <div class="control">
                <input class="input is-success" type="text" placeholder="Informe o preço por tonelada">
            </div>
        </div>

        <div class="btns"> 
            <button class="button is-primary">Salvar</button>
            <router-link to="/frete" class="button is-primary">Voltar</router-link>
        </div>

    </form>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FreteCreateView extends Vue { }
</script>

<style lang="scss">
@import "~bulma/bulma.sass";

.field {
    margin: auto;
    text-align: left;
    width: 30%;
}

.label{
    margin-top: 20px;
}

// form{
// }

.btns{
    margin-top: 20px;
    display: flex;
    // justify-content: space-between;
    justify-content: flex-end;
    margin-right: 25%;
}
.button{
    margin-left: 5%;
}
</style>