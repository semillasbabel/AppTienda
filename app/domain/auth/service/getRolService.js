import { getRolServiceData } from "../../../data/auth/getRolService";
import { GetRolModel } from "../model/getRol"

export class GetRolServiceDomain{
    async getRol(uid){
        try {
            const rol = new GetRolModel;
            rol.validateUid(uid);
            return await getRolServiceData(uid);
        } catch{
            return false;
        }
    }
}