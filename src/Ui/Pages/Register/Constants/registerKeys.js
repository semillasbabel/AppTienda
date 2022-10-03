export class StateNoteEnum {

    static inicial = new StateNoteEnum("Una vez ingresado los datos presione el boton registrar")
    static error = new StateNoteEnum("Datos Incorrectos")
    static registroExitoso = new StateNoteEnum("Registro Exitoso")

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