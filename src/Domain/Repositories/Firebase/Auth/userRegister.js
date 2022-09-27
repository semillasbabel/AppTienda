import { async } from "@firebase/util"
import {userRegister} from "../../../../Data/Services/AuthFirebase/userRegister"

export async function domainRegister(email,password,name,address){
    try {
        if (_validation(email,password, name, address)) {
            return await userRegister(email,password,name,address);
        }
        else{
            return false
        }
    } catch (error) {
        return false;
    }
}

function _validation(email, password, name, address){
    //Validation Email
    switch (email) {
        case "": return false;
        case null: return false;
    }

    //Validation Password
    switch (password) {
        case "": return false;
        case null: return false;
    }

    //Validation Name
    let expreg = /[a-zA-Z -]/;

    if (!expreg.test(auth)){
        return false;
    }

    switch (name) {
        case "": return false;
        case null: return false;
    }

    // Validation Address
    switch (address) {
        case "": return false;
        case null: return false;
    }

    return true;
}