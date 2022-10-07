export class AppActivityIndicator {

    static off = new AppActivityIndicator("off")
    static on = new AppActivityIndicator("on")

    constructor(value) {
        this.value = value
    }
}