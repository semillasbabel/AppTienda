export class RegisterStateNote {

    static inicial = new RegisterStateNote("Una vez ingresado los datos presione el boton registrar")
    static error = new RegisterStateNote("Datos Incorrectos")
    static registroExitoso = new RegisterStateNote("Registro Exitoso")

    constructor(value) {
        this.value = value
    }
}

export class ClearRegisterData {
    static clear = new ClearRegisterData("");
    constructor(value){
        this.value = value;
    }
}