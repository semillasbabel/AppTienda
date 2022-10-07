import { IsEmptyExeption, IsNullExeption, IsUndefinedExeption, StringFormatExeption } from "../../customExceptions/exceptions";

export class GetRolModel{

    validateUid(uid){
        this.validateIfTheFieldIsUndefined(uid);
        this.validateIfTheFieldIsEmpty(uid);
        this.validateIfTheFieldIsNull(uid);
    }

    validateStringFormatField(field){
        if (typeof field !== "string") {
            throw new StringFormatExeption();      
        }
    }

    validateIfTheFieldIsEmpty(uid){
        if (uid === "") {
            throw new IsEmptyExeption();
        }
    }

    validateIfTheFieldIsNull(uid){
        if (uid === null) {
            throw new IsNullExeption();
        }
    }

    validateIfTheFieldIsUndefined(uid){
        if (typeof uid === undefined) {
            throw IsUndefinedExeption();           
        }
    }

}