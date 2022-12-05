import { AbstractEntity } from "./AbstractEntity";
import { Frete } from "./Frete";
import { StatusFrete} from "./enum/StatusFrete";
import { Usuario } from "./Usuario";


export class HistoricoFrete extends AbstractEntity{

    data!: Date
    statusFrete!: StatusFrete
    frete!: Frete
    executor!: Usuario
}