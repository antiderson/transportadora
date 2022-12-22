<template>
    <div>
        <div class="box">
            <div class="column is-4">
                <h2 class="title is-5">Editar Despesa</h2>
            </div>
            <div class="info">
            </div>
            <button class="button is-primary">Salvar</button>
        </div>

        <label class="label">Selecione o da Despesa</label>
        <div class=" select is-success">
            <select >
                <option>Aprovado</option>
                <option> Rescusado</option>
            </select>
        </div>

        <label class="label">Aprovador</label>
        <div class="select is-success  ">
            <select v-model="despesa.executor">
                <option class="is-success" :value='item' v-for="item in usuarioList" :key="item.id">{{ item.nome }}
                </option>
            </select>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FreteClient } from '@/Client/Frete.client';
import { Frete } from '@/model/Frete';
import { DespesaClient } from '@/Client/Despesa.client';
import { Despesa } from '@/model/Despesa';
import { Usuario } from '@/model/Usuario';
import { UsuarioClient } from '@/Client/Usuario.client';

@Component
export default class Interrompido extends Vue {

    private usuarioClient: UsuarioClient = new UsuarioClient();
    private despesaClient: DespesaClient = new DespesaClient();
    private freteClient: FreteClient = new FreteClient();
    public freteList: Frete[] = [];
    public despesa: Despesa = new Despesa()
    public usuarioList: Usuario[] = []

    public mounted(): void {
        this.listarFrete()
        this.selectUsuarioList()
    }

    private listarFrete(): void {
        this.freteClient.findAll().then(
            suscess => {
                this.freteList = suscess
            },
            error => {
                console.log(error)
            }
        )
    }


    private selectUsuarioList(): void {
        this.usuarioClient.findAll().then(
            suscess => {
                this.usuarioList = suscess
            },
            error => {
                console.log(error)
            }
        )
    }
}
</script>

<style lang="scss">
@import "~bulma/bulma.sass";

.box {
    display: flex;
    align-items: center;
}

.info {
    // background-color: red;
    width: 500px;
    flex-direction: row;
    display: flex;
    justify-content: space-evenly;
}

.content {
    width: 90%;
    margin: auto;
}

h3 {
    display: flex;
    justify-content: flex-start;
}

.button {

    display: flex;
    justify-content: center;

}
</style> 

