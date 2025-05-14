import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'

import authRouter from './routes/Auth';
import encryptRoutes from './routes/encryptRoutes';
import decryptRoutes from './routes/decryptRoutes';
import { autenticarToken } from './midddleware/Auth';
import { errorHandler } from './midddleware/ErrorHandler';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
app.use(cors())
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error('A variável MONGO_URI não está definida no arquivo .env');
}

// Conexão com o MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB!'))
  .catch((err) => console.error('Erro ao conectar no MongoDB:', err));

// Middleware para interpretar JSON
app.use(express.json());

app.use('/auth', authRouter);
app.use('/encrypt', autenticarToken, encryptRoutes);
app.use('/decrypt', autenticarToken, decryptRoutes);


app.use(errorHandler)

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
