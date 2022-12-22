import { StatusDespesa } from "@/model/StatusDespesa";
import axios, { AxiosInstance } from "axios";

export class ProdutoClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: "http://localhost:8080/api/statusDespesa",
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    public async findById(id: number): Promise<StatusDespesa> {
        try {
            return (await this.axiosClient.get<StatusDespesa>(`/${id}`)).data;
        }
        catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async findAll(): Promise<StatusDespesa[]> {
        try {
            return (await this.axiosClient.get<StatusDespesa[]>(``)).data;
        }
        catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(produto: StatusDespesa): Promise<void> {
        try {
            return (await this.axiosClient.post(``, produto)).data;
        }
        catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async atualizar(produto: StatusDespesa): Promise<void> {
        try {
            return (await this.axiosClient.put(`/${produto.id}`, produto)).data;
        }
        catch (error: any) {
            return Promise.reject(error.response);
        }
    }

    public async excluir(produto: StatusDespesa): Promise<void> {
        try {
            return (await this.axiosClient.delete(`/${produto.id}`)).data;
        }
        catch (error: any) {
            return Promise.reject(error.response);
        }
    }
}