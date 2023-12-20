import { Api } from "../axios-config";

interface IUser{
    id: string;
    name: string;
    email: string;
    telefone: string;
    cpf: string;
    password: string;
}

type TUserList = {
    data: IUser[];
}
const getAll = async (): Promise<TUserList | Error> => {
    try{
        const {data} = await Api.get('/user/list')
        if(data){
            return data;
        }

        return new Error('erro ao listar os usuários');
    }catch(error){
        console.error(error)
        return new Error((error as {message:string}).message || 'erro ao listar os usuários');
    }
};
const getById = async (id: string): Promise<IUser | Error> => {
       try{
        const {data} = await Api.get(`/user/show/${id}`)
        if(data){
            return data;
        }

        return new Error('erro ao consultar o usuário');
    }catch(error){
        console.error(error)
        return new Error((error as {message:string}).message || 'erro ao consultar o usuário');
    }
};
const create = async (dados: Omit<IUser, 'id'>): Promise<string | Error> => {
    try{
        const {data} = await Api.post<IUser>(`/user/create`, dados)
        if(data){
            return data.id;
        }

        return new Error('erro ao criar o usuário');
    }catch(error){
        console.error(error)
        return new Error((error as {message:string}).message || 'erro ao criar o usuário');
    } 
};
const updateById = async (id: string, dados: IUser): Promise<void | Error> => {
    try{
        await Api.put(`/user/update/${id}`, dados)
    }catch(error){
        console.error(error)
        return new Error((error as {message:string}).message || 'erro ao atualizar o usuário');
    } 
};
const deleteById = async (id: string): Promise<void | Error> => {
    try{
        await Api.delete(`/user/delete/${id}`)
    }catch(error){
        console.error(error)
        return new Error((error as {message:string}).message || 'erro ao deletar o usuário');
    } 
};


export const UsersService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
}