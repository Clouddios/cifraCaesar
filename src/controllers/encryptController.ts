import { Request, Response } from 'express';
import crypto from 'crypto';
import Message from '../models/Message';
import { caesarCipher } from '../utils/caesarCipher';

export const encrypt = async (req: Request, res: Response) => {
  const { text, shift } = req.body;
  const encryptedText = caesarCipher(text, shift);
  const hash = crypto.randomBytes(16).toString('hex');

  await Message.create({ hash, shift, used: false });
  res.json({ encryptedText, hash });
};
