import { RegistryServiceData } from "../../../data/registry/registryService";
import {RegistryModel} from "../model/registry";

export class RegistryServiceDomain{
    async registry(email, password, name, address){
        try {
            const model = new RegistryModel(email,password,name,address)
            model.validate();
            return await RegistryServiceData(email, password, name, address)
        }catch {
            return false
        }
    }
}