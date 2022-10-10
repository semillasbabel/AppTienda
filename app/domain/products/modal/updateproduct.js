import { BoolFormatExeption, IsEmptyExeption, IsNullExeption, IsUndefinedExeption, NumberFormatExeption, StringFormatExeption } from "../../customExceptions/exceptions";

export class UpdateProductModel{
    #id
    #name
    #price
    #description
    #amount
    #offert

    constructor(id, name, price, description, amount, offert){
        this.#id = id;
        this.#name = name;
        this.#price = price;
        this.#description = description;
        this.#amount = amount;
        this.#offert = offert;
        this.validate();
    }

    get id(){return this.#id;}
    get name(){ return this.#name; }
    get price(){ return this.#price; }
    get description(){ return this.#description; }
    get amount(){ return this.#amount; }
    get offert(){ return this.#offert; }

    validate(){
        this.validateFieldsStrings(this.#id);
        this.validateFieldsStrings(this.#name);
        this.validateFieldsStrings(this.#description);
        this.validateFieldsNumbers(this.#price);
        this.validateFieldsNumbers(this.#amount);
        this.validateFieldsBools(this.#offert);
    }

    validateFieldsStrings(field){
        this.validateStringFormatField(field)
        this.validateIfTheFieldIsEmpty(field);
        this.validateIfTheFieldIsNull(field);
        this.validateIfTheFieldIsUndefined(field);
    }

    validateFieldsNumbers(field){
        this.validateNumberFormatField(field);
        this.validateIfTheFieldIsEmpty(field);
        this.validateIfTheFieldIsNull(field);
        this.validateIfTheFieldIsUndefined(field);
    }

    validateFieldsBools(field){
        this.validateBoolFormatField(field)
        this.validateIfTheFieldIsEmpty(field);
        this.validateIfTheFieldIsNull(field);
        this.validateIfTheFieldIsUndefined(field);
    }

    validateStringFormatField(field){
        if (typeof field !== "string") {
            throw new StringFormatExeption();      
        }
    }

    validateNumberFormatField(field){
        if (typeof field !== "number") {
            throw new NumberFormatExeption();      
        }
    }

    validateBoolFormatField(field){
        if (typeof field !== "boolean") {
            throw new BoolFormatExeption();      
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