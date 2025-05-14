import { User_MongoDB_Model } from "../models/User"

export const userExists = async (email: string) => {
    return await User_MongoDB_Model.findOne({email})
}