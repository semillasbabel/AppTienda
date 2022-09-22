import { async } from "@firebase/util"
import {userRegister} from "../../../../Data/Services/AuthFirebase/userRegister"

export async function registerController(email,password,name,address){
    return await userRegister(email,password,name,address);
}