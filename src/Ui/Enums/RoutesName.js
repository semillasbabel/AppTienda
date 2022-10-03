export class MainRoutesEnum {

    static admin = new MainRoutesEnum("Admin")
    static client = new MainRoutesEnum("Client")
    static register = new MainRoutesEnum("Register")
    static Loggin = new MainRoutesEnum("Loggin")

    constructor(value) {
        this.value = value
    }
}

export class ClientRoutesName {

    static shop = new ClientRoutesName("Tienda")
    static shoppingCar = new ClientRoutesName("Carrito")
    static exit = new ClientRoutesName("Salir")

    constructor(value) {
        this.value = value
    }
}
