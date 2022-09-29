import { UserRegisterBuilder } from "../dataBuilder/userRegisterDataBuilder";
import { domainRegistry } from "../../Domain/Repositories/Firebase/Auth/userRegister"
import { Registry } from "../../Data/Services/AuthFirebase/userRegister"

var data = new UserRegisterBuilder();
var domainreg = new domainRegistry();
var datareg = new Registry();


describe("TestToDomainUserRegister",()=>{

    it("WithoutpassingparametersthenReturnFalse", async ()=>{
        expect(await domainreg.userRegistry())
        .toBe(false)
    })

    it("IfEmailIsEmptythenReturnFalse", async ()=>{
        data.withEmail("");
        expect(await domainreg.setEmail(data.email).setPassword(data.password).setName(data.name).setAddress(data.address).userRegistry())
        .toBe(false);
    })

    it("IfEmailIsNullthenReturnFalse", async ()=>{
        data.withEmail(null);
        expect(await domainreg.setEmail(data.email).setPassword(data.password).setName(data.name).setAddress(data.address).userRegistry())
        .toBe(false);
    })

    it("IfPasswordIsEmptythenReturnFalse", async ()=>{
        data.withPassword("");
        expect(await domainreg.setEmail(data.email).setPassword(data.password).setName(data.name).setAddress(data.address).userRegistry())
        .toBe(false);
    })

    it("IfPasswordIsNullthenReturnFalse", async ()=>{
        data.withPassword(null);
        expect(await domainreg.setEmail(data.email).setPassword(data.password).setName(data.name).setAddress(data.address).userRegistry())
        .toBe(false);
    })

    it("IfNameIsANumbersThenReturnFalse", async ()=>{
        data.withName(456);
        expect(await domainreg.setEmail(data.email).setPassword(data.password).setName(data.name).setAddress(data.address).userRegistry())
        .toBe(false);
    })

    it("IfNameContainedNumbersThenReturnFalse", async ()=>{
        data.withName("789");
        expect(await domainreg.setEmail(data.email).setPassword(data.password).setName(data.name).setAddress(data.address).userRegistry())
        .toBe(false);
    })

    it("IfAddresIsEmptythenReturnFalse", async ()=>{
        data.withAddress("");
        expect(await domainreg.setEmail(data.email).setPassword(data.password).setName(data.name).setAddress(data.address).userRegistry())
        .toBe(false);
    })

    it("IfEmailIsNullthenReturnFalse", async ()=>{
        data.withAddress(null);
        expect(await domainreg.setEmail(data.email).setPassword(data.password).setName(data.name).setAddress(data.address).userRegistry())
        .toBe(false);
    })

})

describe("TestToDataUserRegister",()=>{

    it("WithoutpassingparametersthenReturnFalse", async ()=>{
        expect(await datareg.userRegistry())
        .toBe(false)
    })

    it("IfEmailIsEmptythenReturnFalse", async ()=>{
        data.withEmail("");
        expect(await datareg.setEmail(data.email).setPassword(data.password).setName(data.name).setAddress(data.address).userRegistry())
        .toBe(false);
    })

    it("IfEmailIsNullthenReturnFalse", async ()=>{
        data.withEmail(null);
        expect(await datareg.setEmail(data.email).setPassword(data.password).setName(data.name).setAddress(data.address).userRegistry())
        .toBe(false);
    })

    it("IfPasswordIsEmptythenReturnFalse", async ()=>{
        data.withPassword("");
        expect(await datareg.setEmail(data.email).setPassword(data.password).setName(data.name).setAddress(data.address).userRegistry())
        .toBe(false);
    })

    it("IfPasswordIsNullthenReturnFalse", async ()=>{
        data.withPassword(null);
        expect(await datareg.setEmail(data.email).setPassword(data.password).setName(data.name).setAddress(data.address).userRegistry())
        .toBe(false);
    })

    it("IfNameIsANumbersThenReturnFalse", async ()=>{
        data.withName(456);
        expect(await datareg.setEmail(data.email).setPassword(data.password).setName(data.name).setAddress(data.address).userRegistry())
        .toBe(false);
    })

    it("IfNameContainedNumbersThenReturnFalse", async ()=>{
        data.withName("789");
        expect(await datareg.setEmail(data.email).setPassword(data.password).setName(data.name).setAddress(data.address).userRegistry())
        .toBe(false);
    })

    it("IfAddresIsEmptythenReturnFalse", async ()=>{
        data.withAddress("");
        expect(await datareg.setEmail(data.email).setPassword(data.password).setName(data.name).setAddress(data.address).userRegistry())
        .toBe(false);
    })

    it("IfEmailIsNullthenReturnFalse", async ()=>{
        data.withAddress(null);
        expect(await datareg.setEmail(data.email).setPassword(data.password).setName(data.name).setAddress(data.address).userRegistry())
        .toBe(false);
    })

})