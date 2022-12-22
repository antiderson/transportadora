<template>
    <form>
        <h2 class="title is-3">Cadastro de frete</h2>
        <div class="field">
            <div class="teste"><!-- Frete Origem -->
                <div class="campo">
                    <label class="label">Estado de Origem</label>
                    <div class=" select is-fullwidth is-success">
                        <select @change="selectEtadoOrigemList($event)">
                            <option>Selecione um Estado</option>
                            <option class="is-success" :value='item.id' v-for="item in estadoList" :key="item.id">
                                {{ item.nome }}</option>
                        </select>
                    </div>
                </div>
                <div class="campo">
                    <label class="label">Cidade de Origem</label>
                    <div class="select is-fullwidth is-success">
                        <select v-model="frete.cidadeOrigem">
                            <option class="is-success" :value='item' v-for="item in cidadeInicialList" :key="item.id">
                                {{ item.nome }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="teste"> <!-- Frete Destino -->
                <div class="campo">
                    <label class="label">Estado de Destino</label>
                    <div class="select is-fullwidth is-success">
                        <select @change="selectEstadoDestinoList($event)">
                            <option class="is-success" :value='item.id' v-for="item in estadoList" :key="item.id">
                                {{ item.nome }}</option>
                        </select>
                    </div>
                </div>
                <div class="campo">
                    <label class="label">Cidade de Destino</label>
                    <div class="select is-fullwidth is-success">
                        <select v-model="frete.cidadeDestino">
                            <option class="is-success" :value='item' v-for="item in cidadeDestinoList" :key="item.id">
                                {{ item.nome }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <label class="label">Produto</label>
            <div class="select is-success is-fullwidth ">
                <select v-model="frete.produto">
                    <option class="is-success" :value='item' v-for="item in produtoList" :key="item.id">{{ item.nome }}
                    </option>
                </select>
            </div>

            <label class="label">Caminhão</label>
            <div class="select is-success is-fullwidth ">
                <select v-model="frete.caminhao">
                    <option class="is-success" :value='item' v-for="item in caminhaoList" :key="item.id">{{ item.placa
                    }}
                    </option>
                </select>
            </div>

            <label class="label">Motorista</label>
            <div class="select is-success is-fullwidth ">
                <select v-model="frete.motorista">
                    <option class="is-success" :value='item' v-for="item in usuarioList" :key="item.id">{{ item.nome }}
                    </option>
                </select>
            </div>

            <label class="label">Preço</label>
            <div class="control">
                <input class="input is-success" type="text" v-model="frete.precoTonelada"
                    placeholder="Informe o preço por tonelada">
            </div>
        </div>
        <div class="btns">
            <button type="button" btype="submit" @click="onClickCadastrar()"
                class="button is-primary">Cadastrar</button>
            <router-link to="/frete" class="button is-primary">Voltar</router-link>
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

import { Frete } from '@/model/Frete';
import { Produto } from '@/model/Produto';
import { Estado } from '@/model/Estado';
import { Cidade } from '@/model/Cidade';
import { Caminhao } from '@/model/Caminhao';
import { Usuario } from '@/model/Usuario';

@Component
export default class FreteCreateView extends Vue {

    //Clients
    private freteClient: FreteClient = new FreteClient();
    private produtoClient: ProdutoClient = new ProdutoClient();
    private cidadeClient: CidadeClient = new CidadeClient();
    private estadoClient: EstadoClient = new EstadoClient();
    private caminhaoClient: CaminhaoClient = new CaminhaoClient();
    private usuarioClient: UsuarioClient = new UsuarioClient();

    //Lists
    public cidadeInicialList: Cidade[] = []
    public cidadeDestinoList: Cidade[] = []
    public produtoList: Produto[] = []
    public estadoList: Estado[] = []
    public caminhaoList: Caminhao[] = []
    public usuarioList: Usuario[] = []
    public freteList: Frete[] = []

    //Models
    public frete: Frete = new Frete()
    public cidade: Cidade = new Cidade()
    public estado: Estado = new Estado()
    public caminhao: Caminhao = new Caminhao()
    public usuario: Usuario = new Usuario()

    public mounted(): void {
        this.selectEstadoList()
        this.selectCidadeInicialList()
        this.selectCidadeDestinoList()
        this.selectProdutoList()
        this.selectCaminhaoList()
        this.selectUsuarioList()
    }

    public onClickCadastrar(): void {
        // debugger

        this.freteClient.cadastrar(this.frete).then(
            success => {
                this.frete = new Frete()
                console.log('Registro cadastrado com sucesso!!!')
            },
            error => {
                console.log(error)
            }
        )
    }

    private selectEstadoList(): void {
        this.estadoClient.findAll().then(
            suscess => {
                this.estadoList = suscess
            },
            error => {
                console.log(error)
            }
        )
    }

    public selectEtadoOrigemList(event: any) {
        this.cidadeClient.findByEstado(event.target.value).then(
            suscess => {
                this.cidadeInicialList = suscess
            },
            error => {
                console.log(error)
            }
        )
    }

    private selectCidadeInicialList(): void {
        this.cidadeClient.findAll().then(
            suscess => {
                this.cidadeInicialList = suscess
            },
            error => {
                console.log(error)
            }
        )
    }

    public selectEstadoDestinoList(event: any): void {
        this.cidadeClient.findByEstado(event.target.value).then(
            suscess => {
                this.cidadeDestinoList = suscess
            },
            error => {
                console.log(error)
            }
        )
    }

    private selectCidadeDestinoList(): void {
        this.cidadeClient.findAll().then(
            suscess => {
                this.cidadeDestinoList = suscess
            },
            error => {
                console.log(error)
            }
        )
    }

    private selectProdutoList(): void {
        this.produtoClient.findAll().then(
            suscess => {
                this.produtoList = suscess
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

.teste {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.campo {
    width: 47%;
    // margin-right: 10px;
}
</style>