export class SearchManager{
    constructor(){
        this._search = null
    }

    setSearch(search){
        this._search = search
    }
  
    get getSearch(){
        return this._search
    } 
  
    getList(){
        return this._search.getList()
    }
}