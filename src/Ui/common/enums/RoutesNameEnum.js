export class RoutesNameEnum {
    static admin = new RoutesNameEnum("Admin")
    static client = new RoutesNameEnum("client")

    constructor(value) {
        this.value = value
    }
}
