import { handleSignIn, GetRol } from "../../../../Data/Services/AuthFirebase/signIn"

export class DomainSignIn{
    #email;
    #password;
    #validateEmail = false;
    #validatePassword = false;
    #signInState = false;
    
    setEmail(email){
        if (this._attributeValidation(email)) {
            this.#email = email;
            this.#validateEmail = true;
        }
        else this.#validateEmail = false;
        return this;
    }

    setPassword(password){
        if (this._attributeValidation(password)) {
            this.#password = password;
            this.#validatePassword = true;
        }
        else this.#validatePassword = false;
        return this;
    }

    _attributeValidation(atributo){
        return !((atributo === "") || (atributo === null));
    }

    async signIn(){
        if (this.#validateEmail) {
            if (this.#validatePassword) {
                this.#signInState = await handleSignIn(this.#email,this.#password);
            }
            else this.#signInState = false;
        }
        else this.#signInState = false;
        return false;
    }

    get getSignIn(){
        return this.#signInState;
    }
}

//-------------------------------------------------- Separador -------------------------------------------------

export class DomainGetRol{
    #uid;
    #validateSearch = false;
    #rol;

    setUid(uid){
        if (this._uidValidate(uid)) {
            this.#uid = uid;
            this.#validateSearch = true
        } else {
            this.#validateSearch = false
        }
        return this;
    }
    _uidValidate(uid){
        return !((uid === "") || (uid === null) || (!isNaN(uid)));
    }

    async search(){
        if (this.#validateSearch) {
            const dataGetRol = new GetRol();
            await dataGetRol.setUid(this.#uid).search();
            this.#rol = dataGetRol.getRol;
        } else {
            this.#rol = "false"
            return false
        }
        return this;
    }

    get getRol(){
        return this.#rol;
    }
}