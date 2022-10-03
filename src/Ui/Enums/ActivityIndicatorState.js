export class ActivityStateEnum {

    static off = new ActivityStateEnum("off")
    static on = new ActivityStateEnum("on")

    constructor(value) {
        this.value = value
    }
}