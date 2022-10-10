import { SignInModel } from "../model/signIn"
import { SignInServiceData } from "../../../data/auth/signInService"


export class SignInServiceDomain{
    async signIn(email, password){
        try {
            const signIn = new SignInModel(email, password);
            return await SignInServiceData(signIn);
        } catch{
            return false;
        }
    }
}