export class SearchesEnums {

    static nameProductsCollection = new SearchesEnums("product")
    static nameReportsCollection = new SearchesEnums("report")
    static OrderReportsBy = new SearchesEnums("createAt")
    static OrderReportsWay = new SearchesEnums("asc")


    constructor(value) {
        this.value = value
    }
}