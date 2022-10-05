import { Registry } from "../../../../Data/Services/AuthFirebase/userRegister"



export class DomainRegistry{
    #email;
    #password;
    #name;
    #address;
    #registryValidation = [false,false,false,false];
    #registryState = false;

    setEmail(email){
        if (this._attributeValidation(email)) {
            this.#email = email;
            this.#registryValidation[0] = true;
        }
        else this.#registryValidation[0] = false;
        return this;
    }
    setPassword(password){
        if (this._attributeValidation(password)) {
            this.#password = password;
            this.#registryValidation[1] = true;
        }
        else this.#registryValidation[1] = false;
        return this;
    }
    setName(name){
        if (this._attributeValidation(name)) {
            this.#name = name;
            this.#registryValidation[2] = true;
        }
        else this.#registryValidation[2] = false;
        return this;
    }
    setAddress(address){
        if (this._attributeValidation(address)) {
            this.#address = address;
            this.#registryValidation[3] = true;
        }
        else this.#registryValidation[3] = false;
        return this;
    }

    _attributeValidation(atributo){
        return !((atributo === "") || (atributo === null));
    }

    async userRegistry(){
        if (this._registryValidation()) {
            const reg = new Registry();
            await reg.setEmail(this.#email).setPassword(this.#password).setName(this.#name).setAddress(this.#address).userRegistry();
            this.#registryState = reg.getRegistryState;
        }
        else{return false}
    }

    _registryValidation(){
        let ret = true; 
        this.#registryValidation.forEach(element => {
            if (element === false) {
                ret = false;
            }
        });

        return ret;
    }

    get getRegistryState(){
        return this.#registryState;
    }
}