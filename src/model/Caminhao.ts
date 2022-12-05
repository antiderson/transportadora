import { AbstractEntity } from "./AbstractEntity"
import { Cor } from "./enum/Cor"
import { Modelo } from "./Modelo"

export class Caminhao extends AbstractEntity {
  placa!: string
  modelo!: Modelo
  ano!: number
  cor!: Cor
  observacao!: string
}