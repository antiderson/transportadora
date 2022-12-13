<template>
    <div>
        <h2 class="title is-3">Menu</h2>
        <div class="columns">
            <div class="column is-8">
                <h2 class="title is-5">Lista de frete</h2>
            </div>
            <div class="column">
                <router-link to="/frete/Create" class="button is-primary">Cadastrar</router-link>
            </div>
        </div>

        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Status do frete</th>
                    <th>Cidade Origem</th>
                    <th>Cidade Destino</th>
                    <th>Caminhão placa</th>
                    <th>Produto</th>
                    <th>Opção</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in freteList" :key="item.id">
                    <th>{{ item.cadastro }}</th>
                    <th>
                        <span v-if="item.statusFrete === 'CARGA'" class="tag is-primary">Em Carga</span>
                        <span v-if="item.statusFrete === 'EM_TRANSPORTE'" class="tag is-link">Em Transporte</span>
                        <span v-if="item.statusFrete === 'INTERROMPIDO'" class="tag is-danger">Interrompido</span>
                        <span v-if="item.statusFrete === 'DESCARGA'" class="tag is-info">Descarga</span>
                        <span v-if="item.statusFrete === 'FATURADO'" class="tag is-success">Faturado</span>
                        <span v-if="item.statusFrete === 'CANCELADO'" class="tag is-warning">Cancelado</span>
                    </th>
                    <th>{{ item.cidadeOrigem.nome }}</th>
                    <th>{{ item.cidadeDestino.nome }}</th>
                    <th>{{ item.caminhao.placa }}</th>
                    <th>{{ item.produto.nome }}</th>
                    <th>
                        <div v-if="item.statusFrete === 'CARGA'">
                            <button class="button is-default" data-modal="modalI">T</button>
                            <RouterLink :to="'/frete/Interrompido/'" class="button is-default">I</RouterLink>
                            
                            <button class="button is-default">C</button>
                        </div>
                        <div v-if="item.statusFrete === 'EM_TRANSPORTE'">
                            <router-link :to="'/frete/Interrompido/'" class="button is-default">I</router-link>
                            <button class="button is-default">D</button>
                        </div>
                        <div v-if="item.statusFrete === 'INTERROMPIDO'">
                            <button class="button is-default">R</button>
                            <button class="button is-default">T</button>
                            <button class="button is-default">C</button>
                        </div>
                        <div v-if="item.statusFrete === 'DESCARGA'">
                            <button class="button is-default">F</button>
                        </div>
                        <div v-if="item.statusFrete === 'FATURADO'">
                            Sem Ação
                        </div>
                        <div v-if="item.statusFrete === 'CANCELADO'">
                            <button class="button is-default">R</button>
                            <router-link :to="'/frete/Interrompido/'" class="button is-default">I</router-link>
                        </div>
                    </th>
                </tr>
            </tbody>
        </table>






    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FreteClient } from '@/Client/Frete.client';
import { Frete } from '@/model/Frete';
import { RouterLink } from 'vue-router';

@Component
export default class FreteListView extends Vue {

    private freteClient: FreteClient = new FreteClient();
    public freteList: Frete[] = []    //private ou public? 

    public mounted(): void {
        this.listarFretes()
    }

    private listarFretes(): void {
        this.freteClient.findAll().then(
            suscess => {
                this.freteList = suscess
            },
            error => {
                console.log(error)
            }
        )
    }
}
</script>


