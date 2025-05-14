import { getModelForClass, prop } from "@typegoose/typegoose";

class User {

    @prop({ required: true })
    public email: string

    @prop({ required: true })
    public password: string


    constructor(email: string, password: string) {
        this.email = email
        this.password = password
    }
}

const User_MongoDB_Model = getModelForClass(User)

export { User, User_MongoDB_Model }