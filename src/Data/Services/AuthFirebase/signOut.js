import { signOut } from "firebase/auth";

export async function signOut( auth ){
    return await signOut(auth)
    .then(() => {return true})
    .catch(() => {return false});
}