import { Request, Response } from 'express';
import Zod from 'zod';
import { AppError } from "../errors/AppError";
import { prismaC } from '../prisma';


export class EnderecoUserController {
  public async create(request: Request, response: Response) {

    const bodySchema = Zod.object({
      cep: Zod.string(),
      estado: Zod.string(),
      cidade: Zod.string(),
      bairro: Zod.string(),
      numero: Zod.number(),
      endereco: Zod.string(),
      complemento: Zod.string(),
      userId: Zod.string()
    }).strict();

    const {cep, estado, cidade, bairro, numero, endereco, complemento, userId} = bodySchema.parse(request.body);
    
    const enderecoUser = await prismaC.enderecoUser.create({
        data: {
            cep, estado, cidade, bairro, numero, endereco, complemento, userId
        },
     });
     return response.status(200).json(enderecoUser);
  }

  public async list(request: Request, response: Response) {
    const enderecoUser = await prismaC.enderecoUser.findMany();
    return response.status(200).json(enderecoUser);
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;
    
    const enderecoUser = await prismaC.enderecoUser.findUnique({
      where: { id },
    });
    if (!enderecoUser){
      throw new AppError("enderecoUser not Found", 404);
    }

  response = response.status(200).json(enderecoUser);
  }

  public async update(request: Request, response: Response) {
    const bodySchema = Zod.object({
        cep: Zod.string().nullish(),
        estado: Zod.string().nullish(),
        cidade: Zod.string().nullish(),
        bairro: Zod.string().nullish(),
        numero: Zod.number().nullish(),
        endereco: Zod.string().nullish(),
        complemento: Zod.string().nullish()
      }).strict();
  
    const {cep, estado, cidade, bairro, numero, endereco, complemento} = bodySchema.parse(request.body);
    const { id } = request.params;
    let data= {}
    if(cep) data = {cep};
    if(estado) data = {...data, estado};
    if(bairro) data = {...data, bairro};
    if(numero) data = {...data, numero};
    if(cidade) data = {...data, cidade};
    if(endereco) data = {...data, endereco};
    if(complemento) data = {...data, complemento};
    const enderecoUser = await prismaC.enderecoUser.findUnique({
      where: { id },
    });
    if (!enderecoUser){
      throw new AppError("enderecoUser not Found", 404);
    }
    const enderecoUserUpdated = await prismaC.enderecoUser.update({
      where:{id},
      data,
   });
    
     return response.status(200).json(enderecoUserUpdated);

  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const enderecoUser = await prismaC.enderecoUser.findUnique({
      where: { id },
    });
    if (!enderecoUser){
      throw new AppError("enderecoUser not Found", 404);
    }
    await prismaC.enderecoUser.delete({
      where: { id },
    });

    return response.status(204).json();
  }
}