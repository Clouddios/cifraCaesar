import { Request, Response } from 'express';
import Message from '../models/Message';

export const decrypt = async (req: Request, res: Response) => {
    const { encryptedText, hash } = req.body;

    if (!encryptedText || !hash) {
        res.status(400).send({ error: 'Texto criptografado e chave são obrigatórios.' });
        return;
    }
    const message = await messageExists(hash)

    if (message) {

        const shift = message.shift

        // Lógica de descriptografia (exemplo simples)
        const decryptedText = encryptedText.split('').map((char: string) => {
            return String.fromCharCode(char.charCodeAt(0) - shift);
        }).join('');

        res.status(200).send({ decryptedText });
    }
    else{
        res.status(404).send({error: "Hash não existente"})
    }
};


const messageExists = async (hash: string) => {
    return await Message.findOne({ hash })
}