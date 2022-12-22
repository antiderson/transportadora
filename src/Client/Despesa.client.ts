import { Despesa } from './../model/Despesa';
import axios, { AxiosInstance } from 'axios';

export class DespesaClient {

    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/despesas',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public async findById(id: number): Promise<Despesa> {
        try {
            return (await this.axiosClient.get<Despesa>(`/${id}`)).data
        }
        catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async findAll(): Promise<Despesa[]> {
        try {
            return (await this.axiosClient.get<Despesa[]>(``)).data
        }
        catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(despesa: any): Promise<void> {
        try {
            return (await this.axiosClient.post(``, despesa)).data
        }
        catch (error: any) {
            console.error(error)
            return Promise.reject(error.response)
        }
    }

    public async atualizar(despesa: Despesa): Promise<void> {
        try {
            return (await this.axiosClient.put(`/${despesa.id}`, despesa)).data
        }
        catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async excluir(despesa: Despesa): Promise<void> {
        try {
            return (await this.axiosClient.delete(`/${despesa.id}`)).data
        }
        catch (error: any) {
            return Promise.reject(error.response)
        }
    }

}