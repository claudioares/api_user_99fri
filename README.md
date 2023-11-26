# api_user_controll

# Documentação da API

## Introdução

Esta documentação descreve as operações disponíveis na API para gerenciamento de usuários. A API oferece funcionalidades para cadastrar usuários, fazer login e editar informações do usuário.

- [ ] Base URL

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
  "username": "Novo Usuario",
  "email": "novo.usuario@email.com",
  "password": "senhadousuario"
}
```

### Resposta de Sucesso

```json
{
  "messege": "User successfully registered!",
  "userDetail": {
    "id": "6c2a61da-c36f-465b-a61f-66b11c53f54e",
    "name": "Novo Usuario",
    "email": "novo.usuarion@email.com",
    "createdAt": "2023-11-26T18:48:31.611Z",
    "updateAt": "2023-11-26T18:48:31.611Z"
  }
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
- **Password**: `password`
  - **Tipo**: String
  - **Descrição**: Senha do usuário existente.

### Exemplo de Requisição

```json
{
  "email": "novo.usuario@email.com",
  "password": "senhalogin"
}
```

### Resposta de Sucesso

```json
{
  "messege": {
    "id": "6c2a61da-c36f-465b-a61f-66b11c53f54e",
    "name": "Novo Usuario",
    "email": "novo.usuario@email.com",
    "createdAt": "2023-11-26T18:48:31.611Z",
    "updateAt": "2023-11-26T18:48:31.611Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZjMmE2MWRhLWMzNmYtNDY1Yi1hN"
  }
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
- **Password**: `newPassword`
  - **Tipo**: String
  - **Descrição**: Nova senha do usuário.

### Exemplo de Requisição

```json
{
  "name": "novo nome do usuario",
  "password": "novasenha"
}
```

### A autentificação deve ser passada na Headers da aplicação. Ela retorna na resposta de login bem sucedido:

exemplo : Authorization: uHswkelçg1234

## Atividades do Usuário

A API também fornece informações sobre as atividades do usuário, incluindo a hora de login, criação do usuário e suas tentativas de login

### Rota

GET /user/history

### Exemplo de Resposta

```json
{
	"messege": [
		{
			"id": "136c77d4-938f-4915-b341-94515e44c692",
			"userName": "Novo nome do usuario",
			"timestamp": "2023-11-26T18:48:31.760Z",
			"action": "Created new user",
			"userId": "6c2a61da-c36f-465b-a61f-66b11c53f54e"
		},
		{
			"id": "598a10b6-3ffe-4c16-8aff-e0d00892b27c",
			"userName": "Tovo nome do usuario",
			"timestamp": "2023-11-26T18:51:44.183Z",
			"action": "Created new login",
			"userId": "6c2a61da-c36f-465b-a61f-66b11c53f54e"
		},
		{
			"id": "f37563e6-649b-41af-9ea6-d539ddd80ea1",
			"userName": "Tovo nome do usuario"",
			"timestamp": "2023-11-26T19:53:37.233Z",
			"action": "Created new login",
			"userId": "6c2a61da-c36f-465b-a61f-66b11c53f54e"
		}
	    ]
}
```
