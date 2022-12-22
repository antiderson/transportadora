<template>
    <form>
        <h2 class="title is-3">Cadastro de despesa</h2>
        <div class="field">

            <div class="teste">
                <label class="label">Valor</label>
                <div class="control">
                    <input class="input is-success" type="number" v-model="despesa.valor"
                        placeholder="Informe o valor da despesa">
                </div>
            </div>

            <!-- <label class="label">Aprovador</label>
            <div class="select is-success is-fullwidth ">
                <select v-model="despesa.executor">
                    <option class="is-success" :value='item' v-for="item in usuarioList" :key="item.id">{{ item.nome }}
                    </option>
                </select>
            </div> -->

            <label class="label">Id do frete</label>
            <div class="select is-success is-fullwidth ">
                <select v-model="frete.id">
                    <option class="is-success" :value='item' v-for="item in freteList" :key="item.id">{{ item.id }}
                    </option>
                </select>
            </div>

            <label class="label">Motorista </label>
            <div class="select is-success is-fullwidth ">
                <select v-model="despesa.motorista">
                    <option class="is-success" :value='item' v-for="item in usuarioList" :key="item.id">{{ item.nome }}
                    </option>
                </select>
            </div>

            <label class="label">Tipo da despesa</label>
            <div class="select is-success is-fullwidth ">
                <select v-model="despesa.tipoDespesa">
                    <option class="is-success"> Manutenção
                    </option>
                </select>
            </div>
        </div>
        <div class="btns">
            <button type="button" btype="submit" @click="onClickCadastrar()"
                class="button is-primary">Cadastrar</button>
            <router-link to="/despesa" class="button is-primary">Voltar</router-link>
        </div>
    </form>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FreteClient } from '@/Client/Frete.client';
import { ProdutoClient } from '@/Client/Produto.client';
import { EstadoClient } from '@/Client/Estado.client';
import { CidadeClient } from '@/Client/Cidade.client';
import { CaminhaoClient } from '@/Client/Caminhao.client';
import { UsuarioClient } from '@/Client/Usuario.client';
import { DespesaClient } from '@/Client/Despesa.client';
import { TipoDespesaClient } from '@/Client/TipoDespesa.client';

import { Frete } from '@/model/Frete';
import { Produto } from '@/model/Produto';
import { Estado } from '@/model/Estado';
import { Cidade } from '@/model/Cidade';
import { Caminhao } from '@/model/Caminhao';
import { Usuario } from '@/model/Usuario';
import { Despesa } from '@/model/Despesa';
import { TipoDespesa } from '@/model/TipoDespesa';

@Component
export default class FreteCreateView extends Vue {

    //Clients
    private freteClient: FreteClient = new FreteClient();
    private caminhaoClient: CaminhaoClient = new CaminhaoClient();
    private usuarioClient: UsuarioClient = new UsuarioClient();
    private tipoDespesaClient: TipoDespesaClient = new TipoDespesaClient();
    private despesaClient: DespesaClient = new DespesaClient();


    //Lists
    public produtoList: Produto[] = []
    public caminhaoList: Caminhao[] = []
    public usuarioList: Usuario[] = []
    public freteList: Frete[] = []
    public tipoDespesaList: TipoDespesa[] = []

    //Models
    public frete: Frete = new Frete()
    public despesa: Despesa = new Despesa()
    public caminhao: Caminhao = new Caminhao()
    public usuario: Usuario = new Usuario()
    public tipoDespesa: TipoDespesa = new TipoDespesa()

    public mounted(): void {
        this.selectCaminhaoList()
        this.selectUsuarioList()
        this.selectFreteList()
        this.selectTipoDespesaList()
    }

    public onClickCadastrar(): void {

        // this.despesaClient.cadastrar(this.despesa).then(
        //     success => {
        //         this.despesa = new Despesa()
        //         console.log('Despesa cadastrado com sucesso!!!')
        //     },
        //     error => {
        //         console.log(error)
        //     }
        // )

        const data = {

            "valor": this.despesa.valor,
            "motorista": {
                "id": this.despesa.motorista.id
            },
            "frete": {
                "id": this.despesa.frete.id
            },
            "tipoDespesa": {
                "id": this.despesa.tipoDespesa.id
            },
            "aprovador": {
                "id": this.despesa.executor.id
            }
        }
        this.despesaClient.cadastrar(data).then(
            success => {
                console.log('Registro cadastrado com sucesso!!!')
            },
            error => {
                console.log(error)
            }
        )
    }


    private selectFreteList(): void {
        this.freteClient.findAll().then(
            suscess => {
                this.freteList = suscess
            },
            error => {
                console.log(error)
            }
        )
    }

    public selectTipoDespesaList(): void {
        this.tipoDespesaClient.findAll().then(
            suscess => {
                this.tipoDespesaList = suscess
            },
            error => {
                console.log(error)
            }
        )
    }

    private selectCaminhaoList(): void {
        this.caminhaoClient.findAll().then(
            suscess => {
                this.caminhaoList = suscess
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

.field {
    margin: auto;
    text-align: left;
    width: 30%;
}

.label {
    margin-top: 20px;
}

.btns {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    margin-right: 25%;
}

.button {
    margin-left: 5%;
}

// .teste {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
// }

.campo {
    width: 47%;
    // margin-right: 10px;
}
</style>