import { getCategories } from "../../../data/searches/getCategories"
import { getAllProducts } from "../../../data/searches/getAllProducts"
import { getShoppingCar } from "../../../data/searches/getShoppingCar"
import { getReports } from "../../../data/searches/getReports"

export class SearchOffert {
    getList(){
        return getCategories("offert",true);
    }
}
  
export class SearchCases {
    getList(){
        return getCategories("category","Gabinete");
    }
}
  
export class SearchMemoryRam {
    getList(){
        return getCategories("category","Memoria_Ram");
    }
}
  
export class SearchMotherboards {
    getList(){
        return getCategories("category","Tarjeta_Madre");
    }
}
  
export class SearchPowerSupply {
    getList(){
        return getCategories("category","Fuente_Poder");
    }
}
  
export class SearchProcessors {
    getList(){
        return getCategories("category","Procesador");
    }
}
  
export class SearchStorage {
    getList(){
        return getCategories("category","almacenamiento");
    }
}
  
export class SearchVideoCards {
    getList(){
        return getCategories("category","Tarjeta_Video");
    }
}

export class SearchShoppingCar {
    getList(){
        return getShoppingCar();
    }
}

export class SearchAllProducts {
    getList(){
        return getAllProducts();
    }
}

export class SearchReports {
    getList(){
        return getReports();
    }
}