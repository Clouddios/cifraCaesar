# Cifra de César API

API REST para criptografia e descriptografia de mensagens usando o algoritmo da Cifra de César.

## 🚀 Funcionalidades

- Criptografia de mensagens usando Cifra de César
- Descriptografia de mensagens
- Autenticação de usuários via JWT
- Registro de usuários
- Login de usuários

## 🛠️ Tecnologias

- Node.js
- TypeScript
- Express
- MongoDB (com Mongoose)
- JWT para autenticação
- bcrypt para hash de senhas

## 📋 Pré-requisitos

- Node.js 16.20.1 ou superior
- MongoDB
- NPM ou Yarn

## ⚙️ Configuração

1. Clone o repositório:
```bash
git clone https://github.com/Clouddios/cifraCaesar.git
cd cifraCaesar
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto:
```env
PORT=3000
MONGO_URI=sua_uri_do_mongodb
JWT_SECRET_KEY=sua_chave_secreta
```

## 🚀 Executando

Para rodar em ambiente de desenvolvimento:

```bash
npm run dev
```

## 📌 Endpoints

### Autenticação

- `POST /auth/registro` - Registrar novo usuário
  ```json
  {
    "email": "usuario@email.com",
    "senha": "senha123"
  }
  ```

- `POST /auth/login` - Login de usuário
  ```json
  {
    "email": "usuario@email.com",
    "senha": "senha123"
  }
  ```

### Criptografia

- `POST /encrypt` - Criptografar mensagem
  ```json
  {
    "text": "mensagem",
    "shift": 3
  }
  ```

- `POST /decrypt` - Descriptografar mensagem
  ```json
  {
    "encryptedText": "mensagem_criptografada",
    "key": "chave"
  }
  ```

## 🔒 Segurança

- Senhas são hasheadas usando bcrypt
- Autenticação via JWT
- Validação de rotas protegidas
- Tratamento de erros centralizado

## 📦 Estrutura do Projeto

```
src/
├── app.ts                 # Arquivo principal
├── controllers/           # Controladores
├── middleware/           # Middlewares
├── models/               # Modelos do MongoDB
├── routes/               # Rotas da API
├── service/             # Lógica de negócio
├── types/               # Tipos TypeScript
└── utils/               # Utilitários
```

## 📄 Licença

Este projeto está sob a licença MIT.
