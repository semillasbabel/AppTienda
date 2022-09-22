import { handleSingIn } from "../../../../Data/Services/AuthFirebase/singIn";

export async function controllerSingIn(user, password){
    return await handleSingIn(user, password)
}
