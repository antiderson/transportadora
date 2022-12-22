<template>
    <div>
        <h2 class="title is-3">Menu</h2>
        <div class="columns">
            <div class="column is-8">
                <h2 class="title is-5">Lista de despesas</h2>
            </div>
            <div class="column">
                <router-link to="/despesa/Create" class="button is-primary">Cadastrar</router-link>
            </div>
        </div>

        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Valor</th>
                    <th>Tipo da despesa</th>
                    <th>Motorista</th>
                    <th>IdFrete</th>
                    <th>Opção</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in despesaList" :key="item.id">
                    <th>{{ item.cadastro }}</th>

                    <th>{{ item.valor }}</th>
                    <th> Manutenção </th>
                    <th>{{ item.motorista.nome }}</th>
                    <th>{{ item.frete.id }}</th>
                    <th>
                        <router-link :to="`/despesa/Edit/${item.id}`" class="button is-success">Editar</router-link>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DespesaClient } from '@/Client/Despesa.client';
import { Despesa } from '@/model/Despesa';
import { RouterLink } from 'vue-router';
import router from '@/router';
import FreteCreateView from '../frete/FreteCreateView.vue';



@Component
export default class DespesaListView extends Vue {

    private despesaClient: DespesaClient = new DespesaClient();
    public despesaList: Despesa[] = []    //private ou public? 

    public mounted(): void {
        this.listarDespesas()
    }

    private listarDespesas(): void {
        this.despesaClient.findAll().then(
            suscess => {
                this.despesaList = suscess
            },
            error => {
                console.log(error)
            }
        )
    }
}


</script>