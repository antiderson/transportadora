<template>
    <div>
        <h2 class="title is-3">Menu</h2>
        <div class="columns">
            <div class="column is-8">
                <h2 class="title is-5">Lista de frete</h2>
            </div>
            <div class="column">
                <router-link to="/frete/Create" class="button is-primary">Cadastrar</router-link>
                <!-- <a href="FreteCreateView.vue"> -->
                    <!-- <button class="create">
                        Cadastro
                    </button> -->
                <!-- </a> -->
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
                    <th>Opção</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in freteList" :key="item.id">
                    <th>{{item.cadastro}}</th>
                    <th>
                        <span v-if="item.statusFrete === 'CARGA'" class="tag is-primary">Em Carga</span>
                        <span v-if="item.statusFrete === 'EM_TRANSPORTE'" class="tag is-primary">Em Transporte</span>
                        <span v-if="item.statusFrete === 'INTERROMPIDO'" class="tag is-primary">Interrompido</span>
                        <span v-if="item.statusFrete === 'DESCARGA'" class="tag is-primary">Descarga</span>
                        <span v-if="item.statusFrete === 'FATURADO'" class="tag is-primary">Faturado</span>
                        <span v-if="item.statusFrete === 'CANCELADO'" class="tag is-primary">Cancelado</span>


                        <!-- {{item.statusFrete}} -->
                    </th>
                    <th>{{item.cidadeOrigem.nome}}</th>
                    <th>{{item.cidadeDestino.nome}}</th>
                    <th>{{item.caminhao.placa}}</th>
                    <th>{{item.produto.nome}}</th>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FreteClient } from '@/Client/Frete.client';
import { Frete} from '@/model/Frete';

@Component
export default class FreteListView extends Vue { 

    private freteClient:FreteClient = new FreteClient();
    public freteList: Frete[] = []    //private ou public? 

    public mounted(): void{
        this.listarFretes()
    }

    private listarFretes(): void{
        this.freteClient.findAll().then(
            suscess =>{
                console.log("oii")
                this.freteList = suscess
            },
            error =>{
                console.log(error)
            }
        )
    }
}
</script>
