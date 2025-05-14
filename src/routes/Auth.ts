import { Router } from 'express'
import { login, signUp } from '../controllers/Auth'

const authRouter = Router()

authRouter.post("/signUp", async (req, res, next) => {
    try {
        const { email, password } = req.body
        await signUp(email, password)
        res.status(201).send({ msg: `Usuário cadastrado com sucesso!` })

    } catch (error) {
        next(error)
    }

})

authRouter.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body
        const token = await login(email, password)
        res.status(201).send({ token })
    } catch (error) {
        next(error)
    }
});


export default authRouter