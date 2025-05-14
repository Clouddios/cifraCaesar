import { Request, Response } from 'express';
import crypto from 'crypto';
import Message from '../models/Message';
import { caesarCipher } from '../utils/caesarCipher';

export const encrypt = async (req: Request, res: Response): Promise<void> => {
  const { text, shift } = req.body;



  if (!text || typeof shift !== 'number') {
    res.status(400).json({ error: 'Texto e deslocamento são obrigatórios.' });
    return;
  }

  const hash = crypto.randomBytes(8).toString('hex');

  const encryptedText = caesarCipher(text, shift);

  // Salva o hash, deslocamento e status de uso no banco
  await Message.create({ hash, shift, used: false });

  res.json({ encryptedText, hash });
};
