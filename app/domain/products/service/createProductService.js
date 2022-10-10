import { CreateProductModel } from "../modal/createProduct"
import { createProductServiceData} from "../../../data/products/service/createProduct"

export class CreateProductServiceDomain{
    async create(image, name, description, price, amount, offert){
        try {
            const data = new CreateProductModel(image ,name, price, description, amount, offert);
            return await createProductServiceData(data);
        } catch{
            return false;
        }
    }
}