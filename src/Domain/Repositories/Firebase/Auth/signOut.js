

export async function domainSignOut(auth){
    if (_validation(auth)) {
        return true;
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