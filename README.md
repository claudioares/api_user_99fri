# api_user_99fri

# Documentação da API

## Introdução

Esta documentação descreve as operações disponíveis na API para gerenciamento de usuários. A API oferece funcionalidades para cadastrar usuários, fazer login e editar informações do usuário.

## Base URL

http://localhost:3000/

## Cadastro de Usuário

### Rota

POST /user

### Descrição

Esta rota permite cadastrar um novo usuário na aplicação.

### Parâmetros de Requisição

- **Nome**: `username`

  - **Tipo**: String
  - **Descrição**: Nome de usuário do novo usuário.

- Email: `userEmail`

  - **Tipo**: String
  - **Descrição**: Email de usuário do novo usuário.

- **Nome**: `password`

  - **Tipo**: String
  - **Descrição**: Senha do novo usuário.

### Exemplo de Requisição

```json
{
  "username": "novousuario",
  "email": "novoemail",
  "password": "senhadousuario"
}
```

### Resposta de Sucesso

```json
{
  "message": "Usuário cadastrado com sucesso!",
  "userId": 123
}
```

## Login do Usuário

### Rota

POST /login

### Descrição

Esta rota permite que um usuário faça login na aplicação.

### Parâmetros de Requisição

- **Nome**: `username`
  - **Tipo**: String
  - **Descrição**: Nome de usuário do usuário existente.
- **Nome**: `password`
  - **Tipo**: String
  - **Descrição**: Senha do usuário existente.

### Exemplo de Requisição

```json
{
  "username": "usuariologin",
  "password": "senhalogin"
}
```

### Resposta de Sucesso

```json
{
  "message": "Login bem-sucedido",
  "userId": 456,
  "loginTime": "2023-11-26T12:34:56Z"
}
```

## Atualização de Dados do Usuário

### Rota

PATCH /update

### Descrição

Esta rota permite que um usuário atualize suas informações.

### Parâmetros de Requisição

- **Nome**: `userName`
  - **Tipo**: String
  - **Descrição**: Nome do usuário a ser atualizado.
- **Nome**: `newPassword`
  - **Tipo**: String
  - **Descrição**: Nova senha do usuário.

### Exemplo de Requisição

```json
{
  "name": "novo nome do usuario",
  "newPassword": "novasenha"
}
```

### A autentificação deve ser passada na Headers da aplicação. Ela retorna na resposta de login bem sucedido:

exemplo : Authorization: uHswkelçg1234

## Atividades do Usuário

A API também fornece informações sobre as atividades do usuário, incluindo a hora de login, criação do usuário e a última edição dos dados.

### Exemplo de Resposta

```json
{
  "userId": 456,
  "registrationTime": "2023-11-26T10:00:00Z",
  "lastLoginTime": "2023-11-26T12:34:56Z",
  "lastUpdateTime": "2023-11-26T13:45:00Z"
}
```
