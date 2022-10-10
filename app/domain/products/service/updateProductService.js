import { UpdateProductModel } from "../modal/updateproduct"
import { updateProductServiceData } from "../../../data/products/service/updateProduct"

export class UpdateProductServiceDomain{
    async update(id, name, description, price, amount, offert){
        try {
            const data = new UpdateProductModel(id, name, price, description, amount, offert);
            return await updateProductServiceData(data);
        } catch{
            return false;
        }
    }
}