export class KeyRoutesEnum {

    static store = new KeyRoutesEnum("Tienda")
    static shoppingCar = new KeyRoutesEnum("Carrito")
    static exit = new KeyRoutesEnum("Exit")

    constructor(value) {
        this.value = value
    }
}
