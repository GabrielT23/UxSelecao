import { Api } from "../axios-config";

interface IEndereco{
    id: string;
    cep: string;
    estado: string;
    cidade: string;
    bairro: string;
    numero: number;
    endereco: string;
    complemento: string;
    userId: string;
}

type TEnderecoList = {
    data: IEndereco[];
}
const getAll = async (): Promise<TEnderecoList | Error> => {
    try{
        const {data} = await Api.get('/endereco/list')
        if(data){
            return data;
        }

        return new Error('erro ao listar os usuários');
    }catch(error){
        console.error(error)
        return new Error((error as {message:string}).message || 'erro ao listar os usuários');
    }
};
const getById = async (id: string): Promise<IEndereco | Error> => {
       try{
        const {data} = await Api.get(`/endereco/show/${id}`)
        if(data){
            return data;
        }

        return new Error('erro ao consultar o usuário');
    }catch(error){
        console.error(error)
        return new Error((error as {message:string}).message || 'erro ao consultar o usuário');
    }
};
const create = async (dados: Omit<IEndereco, 'id'>): Promise<string | Error> => {
    try{
        const {data} = await Api.post<IEndereco>(`/endereco/create`, dados)
        if(data){
            return data.id;
        }

        return new Error('erro ao criar o usuário');
    }catch(error){
        console.error(error)
        return new Error((error as {message:string}).message || 'erro ao criar o usuário');
    } 
};
const updateById = async (id: string, dados: IEndereco): Promise<void | Error> => {
    try{
        await Api.put(`/endereco/update/${id}`, dados)
    }catch(error){
        console.error(error)
        return new Error((error as {message:string}).message || 'erro ao atualizar o usuário');
    } 
};
const deleteById = async (id: string): Promise<void | Error> => {
    try{
        await Api.delete(`/endereco/delete/${id}`)
    }catch(error){
        console.error(error)
        return new Error((error as {message:string}).message || 'erro ao deletar o usuário');
    } 
};


export const EnderecoService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
}