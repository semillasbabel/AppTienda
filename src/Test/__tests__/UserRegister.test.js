import { UserRegisterBuilder } from "../dataBuilder/userRegisterDataBuilder";
import { domainRegister } from "../../Domain/Repositories/Firebase/Auth/userRegister"
import { userRegister } from "../../Data/Services/AuthFirebase/userRegister"

describe("TestToDomainUserRegister",()=>{

    var data = new UserRegisterBuilder();

    it("WithoutpassingparametersthenReturnFalse", async ()=>{
        expect(await domainRegister())
        .toBe(false)
    })

    it("IfEmailIsEmptythenReturnFalse", async ()=>{
        data.withEmail("");
        expect(await domainRegister(data.email, data.password, data.name, data.address))
        .toBe(false);
    })

    it("IfEmailIsNullthenReturnFalse", async ()=>{
        data.withEmail(null);
        expect(await domainRegister(data.email, data.password, data.name, data.address))
        .toBe(false);
    })

    it("IfPasswordIsEmptythenReturnFalse", async ()=>{
        data.withPassword("");
        expect(await domainRegister(data.email, data.password, data.name, data.address))
        .toBe(false);
    })

    it("IfPasswordIsNullthenReturnFalse", async ()=>{
        data.withPassword(null);
        expect(await domainRegister(data.email, data.password, data.name, data.address))
        .toBe(false);
    })

    it("IfNameIsANumbersThenReturnFalse", async ()=>{
        data.withName(456);
        expect(await domainRegister(data.email, data.password, data.name, data.address))
        .toBe(false);
    })

    it("IfNameContainedNumbersThenReturnFalse", async ()=>{
        data.withName("789");
        expect(await domainRegister(data.email, data.password, data.name, data.address))
        .toBe(false);
    })

    it("IfAddresIsEmptythenReturnFalse", async ()=>{
        data.withAddress("");
        expect(await domainRegister(data.email, data.password, data.name, data.address))
        .toBe(false);
    })

    it("IfEmailIsNullthenReturnFalse", async ()=>{
        data.withAddress(null);
        expect(await domainRegister(data.email, data.password, data.name, data.address))
        .toBe(false);
    })

})

describe("TestToDataUserRegister",()=>{

    var data = new UserRegisterBuilder();

    it("WithoutpassingparametersthenReturnFalse", async ()=>{
        expect(await userRegister())
        .toBe(false)
    })

    it("IfEmailIsEmptythenReturnFalse", async ()=>{
        data.withEmail("");
        expect(await userRegister(data.email, data.password, data.name, data.address))
        .toBe(false);
    })

    it("IfEmailIsNullthenReturnFalse", async ()=>{
        data.withEmail(null);
        expect(await userRegister(data.email, data.password, data.name, data.address))
        .toBe(false);
    })

    it("IfPasswordIsEmptythenReturnFalse", async ()=>{
        data.withPassword("");
        expect(await userRegister(data.email, data.password, data.name, data.address))
        .toBe(false);
    })

    it("IfPasswordIsNullthenReturnFalse", async ()=>{
        data.withPassword(null);
        expect(await userRegister(data.email, data.password, data.name, data.address))
        .toBe(false);
    })

    it("IfNameIsANumbersThenReturnFalse", async ()=>{
        data.withName(456);
        expect(await userRegister(data.email, data.password, data.name, data.address))
        .toBe(false);
    })

    it("IfNameContainedNumbersThenReturnFalse", async ()=>{
        data.withName("789");
        expect(await userRegister(data.email, data.password, data.name, data.address))
        .toBe(false);
    })

    it("IfAddresIsEmptythenReturnFalse", async ()=>{
        data.withAddress("");
        expect(await userRegister(data.email, data.password, data.name, data.address))
        .toBe(false);
    })

    it("IfEmailIsNullthenReturnFalse", async ()=>{
        data.withAddress(null);
        expect(await userRegister(data.email, data.password, data.name, data.address))
        .toBe(false);
    })

})