import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User, User_MongoDB_Model } from '../models/User';
import { HttpError } from '../utils/HttpError';
import { userExists } from './User';


export const login = async (email: string, password: string) => {

    const user = await userExists(email)

    if (!user) {
        throw new HttpError(
            `Dados incorretos`,
            404
        )
    }

    const passwordMatchs = await bcrypt.compare(password, user.password)

    if (!passwordMatchs) {
        throw new HttpError(
            `Senha incorreta`,
            401
        )
    }

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET_KEY!,
        { expiresIn: "5h" }
    )

    console.log(token)

    return token

}

export const signUp = async (email: string, password: string) => {

    if (await userExists(email)) {
        throw new HttpError(
            `Usuário já cadastrado`,
            400
        )
    }
    console.log(password)

    const hash = await bcrypt.hash(password, 10)
    
    console.log(hash, "este é o hash")

    const newUser = new User(email, hash)
    return await User_MongoDB_Model.create(newUser)

}