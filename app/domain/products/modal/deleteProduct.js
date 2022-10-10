import { IsEmptyExeption, IsNullExeption, IsUndefinedExeption, StringFormatExeption } from "../../customExceptions/exceptions";

export class DeleteProductModel{
    #Id
    constructor(Id){
        this.#Id = Id
        this.validate();
    }

    get id(){
        return this.#Id
    }

    validate(){
        this.validateId(this.#Id);
    }

    validateId(Id){
        this.validateStringFormatField(Id)
        this.validateIfTheFieldIsEmpty(Id);
        this.validateIfTheFieldIsNull(Id);
        this.validateIfTheFieldIsUndefined(Id);
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