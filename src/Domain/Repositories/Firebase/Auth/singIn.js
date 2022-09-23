import { handleSingIn } from "../../../../Data/Services/AuthFirebase/singIn";

export async function controllerSingIn(user, password){
    console.log(user, "<-----------------------------------------------");
    if(user === null){
        return false
    }
    return await handleSingIn(user, password)
}
