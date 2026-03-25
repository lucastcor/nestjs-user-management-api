<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# CMP2305 - N1 - NestJS

API RESTful desenvolvida para a atividade N1 da disciplina **Tecnologia de Construção de Software II**, utilizando **NestJS**, **Prisma ORM**, **PostgreSQL** e **Swagger**.

O objetivo da atividade foi implementar o gerenciamento de três entidades com operações CRUD completas:

- **Profile**
- **User**
- **Address**

A proposta da prova pede uma API com persistência via Prisma, documentação com Swagger e relacionamento entre as entidades. O sistema implementado atende esse escopo, com estrutura organizada em módulos e integração com banco PostgreSQL. fileciteturn2file0L1-L8

## Objetivo da atividade

Desenvolver uma API RESTful com NestJS para gerenciar usuários, perfis e endereços, implementando operações de criação, leitura, atualização e remoção para cada entidade, com persistência em banco de dados e documentação da API via OpenAPI/Swagger. fileciteturn2file0L1-L8

## Tecnologias utilizadas

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- Swagger / OpenAPI
- class-validator
- class-transformer

## Entidades e relacionamentos

A modelagem segue a estrutura solicitada na atividade:

### Profile
- `id`: identificador UUID
- `name`: nome do perfil
- `createdAt`
- `updatedAt`
- relação **1:N** com `User`

### User
- `id`: identificador UUID
- `email`: único
- `password`
- `name`
- `profileId`: chave estrangeira para `Profile`
- relação **N:1** com `Profile`
- relação **1:1 opcional** com `Address`
- `createdAt`
- `updatedAt`

### Address
- `id`: identificador UUID
- `street`
- `number`
- `city`
- `state`
- `zipCode`
- `userId`: chave estrangeira para `User`
- relação **1:1** com `User`
- `createdAt`
- `updatedAt`

Essa estrutura foi definida no enunciado da prova para implementação no schema do Prisma. fileciteturn2file4L1-L12

## Funcionalidades implementadas

Foram implementadas as operações CRUD para as três entidades:

### Profile
- `POST /profile`
- `GET /profile`
- `GET /profile/:id`
- `PATCH /profile/:id`
- `DELETE /profile/:id`

### User
- `POST /user`
- `GET /user`
- `GET /user/:id`
- `PATCH /user/:id`
- `DELETE /user/:id`

### Address
- `POST /address`
- `GET /address`
- `GET /address/:id`
- `PATCH /address/:id`
- `DELETE /address/:id`

As rotas seguem exatamente o padrão RESTful solicitado no enunciado. fileciteturn2file3L1-L15

## Estrutura do projeto

```text
src/
├── address/
├── profile/
├── prisma/
├── user/
├── app.module.ts
└── main.ts

prisma/
└── schema.prisma
```

## Configuração do ambiente

### 1. Instalar as dependências

```bash
npm install
```

### 2. Configurar o banco de dados

No arquivo `.env`, definir a variável `DATABASE_URL` apontando para o PostgreSQL local.

Exemplo:

```env
DATABASE_URL="postgresql://app_user:156324@localhost:5432/nest_n1?schema=public"
```

### 3. Executar as migrations

```bash
npx prisma migrate dev --name init_entities
```

### 4. Gerar o client do Prisma

```bash
npx prisma generate
```

### 5. Executar a aplicação

```bash
npm run start:dev
```

## Documentação da API

A documentação foi configurada com Swagger, como pedido na atividade. Após iniciar a aplicação, a interface pode ser acessada em:

```text
http://localhost:3000/api/docs
```

A configuração do Swagger também faz parte explícita das tarefas da prova. fileciteturn2file3L13-L15

## Validação e testes

A atividade sugere a seguinte ordem de testes:

1. Criar dois perfis, por exemplo `ADMIN` e `USER`
2. Criar usuários associados a perfis existentes
3. Criar um endereço associado a um usuário
4. Verificar o comportamento do relacionamento 1:1 ao tentar cadastrar mais de um endereço para o mesmo usuário
5. Testar listagem, atualização e remoção das entidades

Essa ordem foi definida no enunciado para validar corretamente as relações entre as tabelas. fileciteturn2file5L1-L16

## Resultado obtido

Ao final da implementação:

- a aplicação compilou sem erros;
- os módulos `Prisma`, `User`, `Profile` e `Address` foram inicializados corretamente;
- as rotas REST foram mapeadas com sucesso;
- a aplicação subiu localmente na porta `3000`;
- o Swagger foi configurado para documentação da API.

Em execução, o Nest exibiu o mapeamento das rotas de `user`, `profile` e `address`, indicando que a base da atividade ficou funcional.

## Observações

- O projeto utiliza **UUID** como identificador das entidades.
- O módulo do Prisma foi configurado para disponibilizar o `PrismaService` na aplicação.
- Os DTOs foram ajustados com validação e integração com Swagger.
- O banco utilizado foi **PostgreSQL local**, em vez de SQLite.

## Possíveis testes manuais no Swagger

### Criar perfil
```json
{
  "name": "ADMIN"
}
```

### Criar usuário
```json
{
  "email": "admin@email.com",
  "password": "123456",
  "name": "Administrador",
  "profileId": "UUID_DO_PROFILE"
}
```

### Criar endereço
```json
{
  "street": "Rua 10",
  "number": 123,
  "city": "Goiania",
  "state": "GO",
  "zipCode": "74000-000",
  "userId": "UUID_DO_USER"
}
```

## Autor

**Lucas Teixeira Correia**

Disciplina: **CMP2305 - Tecnologia de Construção de Software II**
# NestJS User Management API

REST API for user, profile and address management built with NestJS, Prisma, PostgreSQL and Swagger.

This project was developed as an academic backend exercise, but it was organized as a portfolio-style API with modular architecture, database integration, validation and interactive documentation.

## Overview

The application provides CRUD operations for three main entities:

- **Profile**
- **User**
- **Address**

It uses **NestJS** for the application structure, **Prisma ORM** for database access, **PostgreSQL** for persistence and **Swagger** for API documentation.

## Tech Stack

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- Swagger / OpenAPI
- class-validator
- class-transformer

## Data Model

### Profile
- `id`: UUID identifier
- `name`
- `createdAt`
- `updatedAt`
- **One-to-many** relationship with `User`

### User
- `id`: UUID identifier
- `email` (unique)
- `password`
- `name`
- `profileId`
- `createdAt`
- `updatedAt`
- **Many-to-one** relationship with `Profile`
- **One-to-one** relationship with `Address`

### Address
- `id`: UUID identifier
- `street`
- `number`
- `city`
- `state`
- `zipCode`
- `userId`
- `createdAt`
- `updatedAt`
- **One-to-one** relationship with `User`

## Features

The API exposes full CRUD operations for all entities.

### Profile routes
- `POST /profile`
- `GET /profile`
- `GET /profile/:id`
- `PATCH /profile/:id`
- `DELETE /profile/:id`

### User routes
- `POST /user`
- `GET /user`
- `GET /user/:id`
- `PATCH /user/:id`
- `DELETE /user/:id`

### Address routes
- `POST /address`
- `GET /address`
- `GET /address/:id`
- `PATCH /address/:id`
- `DELETE /address/:id`

## Project Structure

```text
src/
├── address/
├── profile/
├── prisma/
├── user/
├── app.module.ts
└── main.ts

prisma/
└── schema.prisma
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure the database

Create a `.env` file and define `DATABASE_URL` with your local PostgreSQL connection.

Example:

```env
DATABASE_URL="postgresql://app_user:156324@localhost:5432/nest_n1?schema=public"
```

### 3. Run database migrations

```bash
npx prisma migrate dev --name init_entities
```

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Start the development server

```bash
npm run start:dev
```

## API Documentation

Swagger documentation is available at:

```text
http://localhost:3000/api/docs
```

## Example Requests

### Create profile

```json
{
  "name": "ADMIN"
}
```

### Create user

```json
{
  "email": "admin@email.com",
  "password": "123456",
  "name": "Administrator",
  "profileId": "UUID_OF_PROFILE"
}
```

### Create address

```json
{
  "street": "Rua 10",
  "number": 123,
  "city": "Goiania",
  "state": "GO",
  "zipCode": "74000-000",
  "userId": "UUID_OF_USER"
}
```

## Validation Notes

Recommended manual test flow:

1. Create two profiles, for example `ADMIN` and `USER`
2. Create users linked to existing profiles
3. Create an address linked to one user
4. Try creating a second address for the same user to validate the one-to-one constraint
5. Test list, update and delete operations

## Current Result

The application compiles successfully and starts without dependency errors. The modules for `Prisma`, `User`, `Profile` and `Address` are initialized correctly, and the REST routes are mapped and available locally on port `3000`.

## Author

**Lucas Teixeira Correia**