
import { onSnapshot } from "firebase/firestore";

import { SearchManager } from "./manager";
import { 
  SearchOffert,
  SearchCases,
  SearchMemoryRam,
  SearchMotherboards,
  SearchPowerSupply,
  SearchProcessors,
  SearchStorage,
  SearchVideoCards
} from "./searches";

const manager = new SearchManager();

export class ManagerRead{
  constructor(){
    this.query;
  }

  searchOfferts(){
    const search = new SearchOffert();
    manager.setSearch(search);
    this.query = manager.getList();
    return this;
  }

  searchCases(){
    const search = new SearchCases();
    manager.setSearch(search);
    this.query = manager.getList();
    return this;
  }

  SearchPowerSupply(){
    const search = new SearchPowerSupply();
    manager.setSearch(search);
    this.query = manager.getList();
    return this;
  }

  SearchMemoryRam(){
    const search = new SearchMemoryRam();
    manager.setSearch(search);
    this.query = manager.getList();
    return this;
  }

  SearchProcessors(){
    const search = new SearchProcessors();
    manager.setSearch(search);
    this.query = manager.getList();
    return this;
  }

  SearchVideoCards(){
    const search = new SearchVideoCards();
    manager.setSearch(search);
    this.query = manager.getList();
    return this;
  }

  SearchStorage(){
    const search = new SearchStorage();
    manager.setSearch(search);
    this.query = manager.getList();
    return this;
  }

  SearchMotherboards(){
    const search = new SearchMotherboards();
    manager.setSearch(search);
    this.query = manager.getList();
    return this;
  }

  async search(setProductos){
    if (this._validation(this.query)){
      return onSnapshot(this.query, (querySnapshot) => {
        setProductos(
          querySnapshot.docs.map((x) => ({
            id: x.id,
            category: x.data().category,
            description: x.data().description,
            imageurl: x.data().imageurl,
            name: x.data().name,
            offert: x.data().offert,
            amount: x.data().amount,
            price: x.data().price,
          }))
        );
      });
    } else {
      return null
    }
  }

  _validation(query){
    switch (query) {
      case "": return false;
      case null: return false;
    }
    return true;
  }

}

