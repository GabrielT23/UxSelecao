import { Api } from "../axios-config";

interface IAuthenticate{
    email: string;
    password: string;
}

const authenticate = async (dados: IAuthenticate): Promise<string | Error> => {
    try{
        const token = await Api.post(`/authenticate`, dados) as string
        if(token){
            return token;
        }

        return new Error('erro ao tentar fazer login');
    }catch(error){
        console.error(error)
        return new Error((error as {message:string}).message || 'erro ao tentar fazer login');
    } 
}

export const AuthenticateService = {
    authenticate,
}
