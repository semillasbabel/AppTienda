import { IsEmptyExeption, IsNullExeption, IsUndefinedExeption, StringFormatExeption } from "../../customExceptions/exceptions";

export class SignInModel{
    #email
    #password
    constructor(email, password){
        this.#email = email
        this.#password = password
    }

    validate(){
        this.validateEmail(this.#email);
        this.validatePassword(this.#password);
    }

    validateEmail(email){
        this.validateStringFormatField(email)
        this.validateIfTheFieldIsEmpty(email);
        this.validateIfTheFieldIsNull(email);
        this.validateIfTheFieldIsUndefined(email);
    }

    validatePassword(password){
        this.validateStringFormatField(password)
        this.validateIfTheFieldIsEmpty(password);
        this.validateIfTheFieldIsNull(password);
        this.validateIfTheFieldIsUndefined(password);
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