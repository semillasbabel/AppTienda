import { SignInModel } from "../model/signIn"
import { SignInServiceData } from "../../../data/auth/signInService"


export class SignInServiceDomain{
    async signIn(email, password){
        try {
            const signIn = new SignInModel(email, password);
            signIn.validate();
            return await SignInServiceData(email, password);
        } catch{
            return false;
        }
    }
}