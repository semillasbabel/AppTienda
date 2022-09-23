import { singOut } from "../../../../Data/Services/AuthFirebase/singOut";

export async function singOutController(auth){
    return await singOut(auth)
}