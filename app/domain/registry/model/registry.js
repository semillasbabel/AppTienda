import {
    IsEmptyExeption,
    IsNullExeption,
    IsUndefinedExeption,
    StringFormatExeption
} from "../../customExceptions/exceptions";

export class RegistryModel{
    #email
    #password
    #name
    #address

    constructor(email, password, name, address){
        this.#email = email
        this.#password = password
        this.#name = name
        this.#address = address
    }

    validate(){
        this.validateEmail(this.#email)
        this.validatePassword(this.#password)
        this.validateName(this.#name)
        this.validateAddress(this.#address)
    }



    validateEmail(email){
        this.validateStringFormatField(email)
        this.validateIfTheFieldIsEmpty(email)
        this.validateIfTheFieldIsNull(email)
        this.validateIfTheFieldIsUndefined(email)
    }
    validatePassword(password){
        this.validateStringFormatField(password)
        this.validateIfTheFieldIsEmpty(password)
        this.validateIfTheFieldIsNull(password)
        this.validateIfTheFieldIsUndefined(password)
    }
    validateName(name){
        this.validateStringFormatField(name)
        this.validateIfTheFieldIsEmpty(name)
        this.validateIfTheFieldIsNull(name)
        this.validateIfTheFieldIsUndefined(name)
    }
    validateAddress(address){
        this.validateStringFormatField(address)
        this.validateIfTheFieldIsEmpty(address)
        this.validateIfTheFieldIsNull(address)
        this.validateIfTheFieldIsUndefined(address)
    }



    validateStringFormatField(field){
        if (typeof field !== "string") {
            throw new StringFormatExeption();
        }
    }
    validateIfTheFieldIsEmpty(field){
        if (field === "") {
            throw new IsEmptyExeption();
        }
    }
    validateIfTheFieldIsNull(field){
        if (field === null) {
            throw new IsNullExeption();
        }
    }
    validateIfTheFieldIsUndefined(field){
        if (field === undefined) {
            throw IsUndefinedExeption();
        }
    }


}