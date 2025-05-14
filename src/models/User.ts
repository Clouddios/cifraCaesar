import { getModelForClass, prop } from "@typegoose/typegoose";

class User {

    @prop({ required: true })
    public email: string

    @prop({ required: true })
    public password: string


    constructor(email: string, senha: string) {
        this.email = email
        this.password = senha
    }
}

const User_MongoDB_Model = getModelForClass(User)

export { User, User_MongoDB_Model }