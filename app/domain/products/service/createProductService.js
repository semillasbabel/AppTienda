import { CreateProductModel } from "../modal/createProduct"
import { createProductServiceData} from "../../../data/products/service/createProduct"

export class CreateProductServiceDomain{
    async create(image, name, description, price, amount, offert, category){
        try {
            const data = new CreateProductModel(image ,name, price, description, amount, offert, category);
            return await createProductServiceData(data);
        } catch{
            return false;
        }
    }
}