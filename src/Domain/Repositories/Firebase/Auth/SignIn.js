import { handleSignIn } from "../../../../Data/Services/AuthFirebase/signIn"

export async function domainSignIn(email, password){
    if (_validation(email, password)) {
        return await handleSignIn(email, password);
    } else {
        return false;
    }
}

function _validation(email, password){
    switch (email) {
        case "": return false;
        case null: return false;
    }

    switch (password) {
        case "": return false;
        case null: return false;
    }

    return true;
}