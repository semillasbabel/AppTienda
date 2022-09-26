import { SignInBuilder } from "../dataBuilder/SignInDataBuilder";
import { domainSignIn } from "../../Domain/Repositories/Firebase/Auth/SignIn"

var data = new SignInBuilder;

describe("TestToDomainSignIn", ()=>{

    it("IfEmailIsEmptythenReturnFalse", async ()=>{
        data.withEmail("");
        expect(await domainSignIn(data.email, data.password))
        .toBe(false);
    })

    it("IfEmailIsNullthenReturnFalse", async ()=>{
        data.withEmail(null);
        expect(await domainSignIn(data.email, data.password))
        .toBe(false);
    })

    it("IfPasswordIsEmptythenReturnFalse", async ()=>{
        data.withPassword("");
        expect(await domainSignIn(data.email, data.password))
        .toBe(false);
    })

    it("IfPasswordIsNullthenReturnFalse", async ()=>{
        data.withPassword(null);
        expect(await domainSignIn(data.email, data.password))
        .toBe(false);
    })
})

// // Estructura Basica 
// describe("",()=>{

//     it("", async ()=>{
//         expect()
//         .toBe();
//     });

// })



