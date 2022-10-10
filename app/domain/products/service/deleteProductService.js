import { DeleteProductModel } from "../modal/deleteProduct"
import { deleteProductServiceData } from "../../../data/products/service/deleteProduct"

export class DeleteProductServiceDomain{
    async delete(id){
        try {
            const deleteId = new DeleteProductModel(id);
            return await deleteProductServiceData(deleteId);
        } catch{
            return false;
        }
    }
}