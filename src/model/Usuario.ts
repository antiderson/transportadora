import { AbstractEntity } from "./AbstractEntity";
import { Grupo } from "./enum/Grupo";


export class Usuario extends AbstractEntity {

    percemGanho!: number
    login!: string
    senha!: string
    grupo!: Grupo
    nome!: string
    cpf!: string
    telefone!: string
    dataNascimento!: Date
    endereco!: string
    observacao!: string
}