export class RegisterStateNote {

    static inicial = new RegisterStateNote("Una vez ingresado los datos presione el boton registrar")
    static error = new RegisterStateNote("Datos Incorrectos, o el usuario ya se encuentra registrado")
    static registroExitoso = new RegisterStateNote("Registro Exitoso")

    constructor(value) {
        this.value = value
    }
}