import { async } from "@firebase/util"
import { Registry } from "../../../../Data/Services/AuthFirebase/userRegister"

export async function domainRegister(email,password,name,address){
    try {
        if (await _validation(email,password, name, address)) {
            const reg = new Registry();
            await reg.setEmail(email).setPassword(password).setName(name).setAddress(address).userRegistry();
            return reg.getRegistryState;
        }
        else{
            return false
        }
    } catch (error) {
        console.log("verificador",error)
        return false;
    }
}

async function _validation(email, password, name, address){
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

    if (!expreg.test(name)){
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