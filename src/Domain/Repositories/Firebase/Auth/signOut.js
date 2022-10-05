

export async function domainSignOut(auth){
    return _validation(auth);
}

function _validation(auth){
    let expreg = /[.a-zA-Z0-9 -]/;

    if (expreg.test(auth)){
        return false;
    }

    return !((auth === "") || (auth === null));

}