# Pizzaria Ux

## Descrição 

Pizzaria Ux é um projeto de web site de delivery. Foi desenvolvido
utilizando React js na parte do Frontend e Node Js na parte do
Backend. Vale ressaltar que o objetivo inicial deste projeto não é ter 
aplicação prática, mas apenas colocar em práticas tecnicas de desenvolvimento
de software

## Documentação da API backend

Na parte do backend do projeto, foi utlizado:

- Node.js
- TypeScript
- Zod
- Prisma
- bcrypt
- Express

## Documentação do frontend
Na parte da interface, no frontend foi utilizado:

- TypeScript
- React js
- Material Ui
- React-Router-Dom
- unform

## Instalação e configuração na sua máquina

- Faça o clone deste repositório: `git clone`
- Certifique-se de ter o Node.js 18.5 instalado na sua maquina
- Execute o comando `cd frontend` para entrar na pasta e em seguida `npm install` 
para instalar as dependêcias. Após isso, execute `npm start` para iniciar a interface da aplicação
- Execute o comando `cd Backend` para entrar na pasta e em seguida `npm install` 
para instalar as dependêcias
- Execute `npx prisma generate` para preparar o banco de dados
- Após isso, execute `npm start` para iniciar a api da aplicação
- Execute também o comando `npx prisma studio` para iniciar a visualização do banco de dados

## Endpoints

Alguns dos endpoints oferecidos pela API:

http://localhost:3333/authenticate/


http://localhost:3333/user/list

http://localhost:3333/user/show/:id

http://localhost:3333/user/update:id

http://localhost:3333/user/create

http://localhost:3333/user/delete/:id


http://localhost:3333/endereco/list

http://localhost:3333/endereco/show/:id

http://localhost:3333/endereco/update:id

http://localhost:3333/endereco/create

http://localhost:3333/endereco/delete/:id

## Autenticação

A API utiliza autenticação por token. Para acessar os endpoints que requerem autenticação, é necessário enviar um token de acesso válido no header Authorization da requisição. O token pode ser obtido através do endpoint /authenticate.

## Funcionalidades Desenvolvidas
Backend
- Crud completo de user
- Crud completo de endereco
- Rota de autenticação e Login
- Inteceptação e tratamento de erros e excessões

Frontend
- Tela inicial com Home, Contatos e Sobre
- Menu Lateral navegar entre as paginas
- Cardapio interativo com menu de seleção
- Formulario de Cadastro e Login
  
## Licença

Esse projeto é licenciado pela licença MIT.
