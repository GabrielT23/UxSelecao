# Pizzaria Ux

## Documentação da API backend

Na parte do backend do projeto, foi utlizado:

- Node.js 18.15.0
- TypeScript
- Zod 3.21.4
- Prisma 4.15.0
- bcrypt 5.1.0
- Express 4.18.2

## Documentação do frontend
Na parte da interface, no frontend foi utilizado:

- TypeScript
- React js
- Material Ui
- React-Router-Dom

## Instalação e configuração na sua máquina

- Faça o clone deste repositório: `git clone`
- Certifique-se de ter o Node.js 18.5 instalados em sua máquina.
- Execute o comando `cd frontend` para ir para entrar na pasta e em seguida `npm install` 
para instalar as dependêcias. Após isso, execute `npm start` para iniciar a interface da aplicação
- Execute o comando `cd Backend` para ir para entrar na pasta e em seguida `npm install` 
para instalar as dependêcias.
- Após subir o banco de dados com sucesso, execute `npx prisma generate` para preparar o banco de dados.
- Após isso, execute `npm start` para iniciar a api da aplicação.

## Endpoints

Alguns dos endpoints oferecidos pela API:



## Autenticação

A API utiliza autenticação por token. Para acessar os endpoints que requerem autenticação, é necessário enviar um token de acesso válido no header Authorization da requisição. O token pode ser obtido através do endpoint /authenticate.

## Licença

Esse projeto é licenciado pela licença MIT.