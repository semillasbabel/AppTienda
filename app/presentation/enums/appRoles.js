export class AppRoles {

    static admin = new AppRoles("Admin")
    static client = new AppRoles("Client")

    constructor(value) {
        this.value = value
    }
}