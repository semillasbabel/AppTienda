import { getToFirebase, getShoppingCar, getAllProducts, getReports } from "../../../../../Data/Services/ApiFirebase/Read/read";

export class SearchOffert {
    getList(){
        return getToFirebase("offert",true);
    }
}
  
export class SearchCases {
    getList(){
        return getToFirebase("category","Gabinete");
    }
}
  
export class SearchMemoryRam {
    getList(){
        return getToFirebase("category","Memoria_Ram");
    }
}
  
export class SearchMotherboards {
    getList(){
        return getToFirebase("category","Tarjeta_Madre");
    }
}
  
export class SearchPowerSupply {
    getList(){
        return getToFirebase("category","Fuente_Poder");
    }
}
  
export class SearchProcessors {
    getList(){
        return getToFirebase("category","Procesador");
    }
}
  
export class SearchStorage {
    getList(){
        return getToFirebase("category","almacenamiento");
    }
}
  
export class SearchVideoCards {
    getList(){
        return getToFirebase("category","Tarjeta_Video");
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