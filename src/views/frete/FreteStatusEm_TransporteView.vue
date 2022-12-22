<template>
    <div>
        <div class="box">

            <div class="column is-4">
                <h2 class="title is-5">Em Transporte</h2>
            </div>
            <button class="button is-primary" type="submit" @click="onClickCadastrar()">Salvar</button>
        </div>
        <form class="form">
            <input class="input is-primary" v-model="frete.quilometragemInicial" type="number"
                placeholder="KM inicial" />
            <input class="input is-primary" v-model="frete.pesoInicial" type="number" placeholder="Peso inicial" />
            <!-- <input class="input is-primary" type="date" /> -->
        </form>
    </div>
</template>

<script lang="ts">
import { FreteClient } from '@/Client/Frete.client';
import { Frete } from '@/model/Frete';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FreteStatusEm_Transporte extends Vue {
    private freteClient: FreteClient = new FreteClient();
    public frete: Frete = new Frete();
    public freteList: Frete[] = [];

    public mountet(): void {
        this.findFrete();
    }

    private async findFrete(): Promise<void> {
        try {
            this.frete = await this.freteClient.findById(parseInt(this.$route.params.id))

            if (this.frete.id == null) {
                alert('Frete não encontrado')
                window.location.href = "/frete/"
            }

        } catch (error: any) {
            console.log(error)
        }
    }

    private atualizarStatus(): void {
        this.freteClient.statusEmTransporte(this.frete).then(
            success => {
                window.location.href = "/frete/"
            },
            error => {
                console.log(error)
            }
        )
    }

    public onClickCadastrar(): void {
        this.atualizarStatus();
    }

}

</script>
<style lang="scss">
@import "~bulma/bulma.sass";

.box {
    display: flex;
    align-items: center;
}

.form {
    margin: auto;
    justify-content: center;
    align-items: center;
    width: 50%;
}
</style> 