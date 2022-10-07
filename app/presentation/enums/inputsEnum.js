
export class PlaceholdersEnum {

    static logginEmail = new PlaceholdersEnum("Correo Electronico")
    static logginPassword = new PlaceholdersEnum("Contraseña")
    static registerEmail = new PlaceholdersEnum("Correo Electronico")
    static registerPassword = new PlaceholdersEnum("Contraseña")
    static registerName = new PlaceholdersEnum("NombreCompleto")
    static registerAddress = new PlaceholdersEnum("Domicilio")

    constructor(value) {
        this.value = value
    }
}

export class TextInputEnum{

    static logginEmail = new TextInputEnum("Correo Electronico")
    static logginPassword = new TextInputEnum("Contraseña")
    static registerEmail = new TextInputEnum("emailAddress")
    static registerPassword = new TextInputEnum("password")
    static registerName = new TextInputEnum("name")
    static registerAddress = new TextInputEnum("addressCityAndState")

    constructor(value) {
        this.value = value
    }
}

export class RegisterInputsIcons{

    static registerEmail = new RegisterInputsIcons("at")
    static registerPassword = new RegisterInputsIcons("lock")
    static registerName = new RegisterInputsIcons("user")
    static registerAddress = new RegisterInputsIcons("home")

    constructor(value) {
        this.value = value
    }
}