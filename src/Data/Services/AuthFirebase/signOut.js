import { signOut } from "firebase/auth";

export async function signOutUser( auth ){
    if (_validation(auth)) {
        return await signOut(auth)
        .then(() => {return true})
        .catch(() => {return false});
    } else {
        return false;
    }
}

function _validation(auth){
    let expreg = /[.a-zA-Z0-9 -]/;

    if (expreg.test(auth)){
        return false;
    }

    switch (auth) {
        case null: return false
        case "": return false
    }

    return true;
}