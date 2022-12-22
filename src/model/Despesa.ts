import { AbstractEntity } from "./AbstractEntity"
import { Frete } from "./Frete"
import { TipoDespesa } from "./TipoDespesa"
import { Usuario } from "./Usuario"


export class Despesa extends AbstractEntity {
  [x: string]: any

  tipoDespesa!: TipoDespesa
  valor!: number
  motorista!: Usuario
  data!: Date
  executor !: Usuario
  frete!: Frete

  constructor() {
    super()
    this.tipoDespesa = new TipoDespesa()
    this.motorista = new Usuario()
    this.executor = new Usuario()
    this.frete = new Frete()
  }
}