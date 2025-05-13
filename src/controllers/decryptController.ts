import { Request, Response } from 'express';

export const decrypt = (req: Request, res: Response): void => {
    const { encryptedText, key } = req.body;

    if (!encryptedText || !key) {
        res.status(400).send({ error: 'Texto criptografado e chave são obrigatórios.' });
        return;
    }

    // Lógica de descriptografia (exemplo simples)
    const decryptedText = encryptedText.split('').map((char: string) => {
        return String.fromCharCode(char.charCodeAt(0) - parseInt(key));
    }).join('');

    res.status(200).send({ decryptedText });
};
