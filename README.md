# NestJS User Management API

REST API for user, profile and address management built with NestJS, Prisma, PostgreSQL and Swagger.

This project was developed as an academic backend exercise and organized as a portfolio-style API with modular architecture, database integration, validation and interactive documentation.

## Overview

The application provides CRUD operations for three main entities:

- **Profile**
- **User**
- **Address**

It uses **NestJS** for the application structure, **Prisma ORM** for database access, **PostgreSQL** for persistence, and **Swagger** for API documentation.

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

1. Create two profiles, such as `ADMIN` and `USER`
2. Create users linked to existing profiles
3. Create an address linked to one user
4. Try creating a second address for the same user to validate the one-to-one constraint
5. Test list, update, and delete operations

## Current Status

The application compiles successfully and starts without dependency errors. The `Prisma`, `User`, `Profile`, and `Address` modules are initialized correctly, and the REST routes are mapped and available locally on port `3000`.

## Author

**Lucas Teixeira Correia**