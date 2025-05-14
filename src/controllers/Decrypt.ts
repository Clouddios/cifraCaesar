import { Request, Response } from 'express';
import Message from '../models/Message';
import { caesarCipher } from '../utils/caesarCipher';

export const decrypt = async (req: Request, res: Response): Promise<void> => {
  const { encryptedText, hash } = req.body;

  if (!encryptedText || !hash) {
    res.status(400).json({ error: 'Texto criptografado e hash são obrigatórios.' });
    return;
  }

  const message = await messageExists(hash)

  if (!message) {
    res.status(404).json({ error: 'Hash não encontrado.' });
    return;
  }

  if (message.used) {
    res.status(400).json({ error: 'Este mensagem já foi decifrada' });
    return;
  }

  // Realiza a descriptografia
  const decryptedText = caesarCipher(encryptedText, - message.shift);

  //Marca o hash como usado
  message.used = true;
  await message.save();

  res.json({ decryptedText });


};

const messageExists = async (hash: string) => {
  return await Message.findOne({ hash })
}
