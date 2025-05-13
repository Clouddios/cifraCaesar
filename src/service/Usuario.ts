import { Usuario_MongoDB_Model } from "../models/Usuario"

export const usuarioCadastrado = async (email: string) => {
    return await Usuario_MongoDB_Model.findOne({email})
}