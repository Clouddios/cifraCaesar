import { Request, Response } from 'express';
import crypto from 'crypto';
import Message from '../models/Message';
import { caesarCipher } from '../utils/caesarCipher';

export const encrypt = async (req: Request, res: Response): Promise<void> => {
  const { text, shift } = req.body;
  
  const hash = crypto.randomBytes(8).toString('hex');

  await Message.create({ hash, shift, used: true });
  
  if (!text || typeof shift !== 'number') {
    res.status(400).json({ error: 'Texto e deslocamento são obrigatórios.' });
    return;
  }

  const encryptedText = caesarCipher(text, shift);

  // Salva o hash, deslocamento e status de uso no banco
  await Message.create({ hash, shift, used: false });

  res.json({ encryptedText, hash });
};

export const decrypt = async (req: Request, res: Response) => {
  const { encryptedText, hash } = req.body;

  if (!encryptedText || !hash) {
    return res.status(400).json({ error: 'Texto criptografado e hash são obrigatórios.' });
  }

  // Busca o hash no banco de dados
  const message = await Message.findOne({ hash });

  if (!message) {
    return res.status(404).json({ error: 'Hash não encontrado.' });
  }

  if (message.used) {
    return res.status(400).json({ error: 'Este hash já foi usado.' });
  }

  // Realiza a descriptografia
  const decryptedText = caesarCipher(encryptedText, -message.shift);

  // Marca o hash como usado
  message.used = true;
  await message.save();

  res.json({ decryptedText });
};
