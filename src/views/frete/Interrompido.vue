<template>
    <div>
        <div class="box">
            <div class="column is-4">
                <h2 class="title is-5">Editar frete</h2>
            </div>
            <div class="info" >
                <table class="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>Id Frete: </th>
                            <th>Status: </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in freteList" :key="item.id">
                            <!-- <th>{{item.id}}</th>
                            <th>{{item.statusFrete}}</th> -->
                        </tr>
                    </tbody>
                </table>
                <!-- <span>Id Frete: </span>
                <span>*status*</span> -->
            </div>
            <button class="button is-primary">Salvar</button>
        </div>
        <div class="content">
            <h3>Observação</h3>
            <textarea class="textarea" placeholder="Descreva a situação atual do frete"></textarea>
        </div>
    </div>
</template>

<script lang="ts">
import{Component , Vue} from 'vue-property-decorator';
import { FreteClient } from '@/Client/Frete.client';
import { Frete } from '@/model/Frete';

@Component
export default class Interrompido extends Vue {

    private freteClient : FreteClient = new FreteClient();
    public freteList: Frete[] = [];

    public mounted(): void{
        this.listarFrete()
    }

    private listarFrete(): void{
        this.freteClient.findAll().then(
            suscess => {
                this.freteList = suscess
            },
            error =>{
                console.log(error)
            }
        )
    }

}
</script>

<style lang="scss">
@import "~bulma/bulma.sass";

.box{
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

