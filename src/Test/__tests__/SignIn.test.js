import { SignInBuilder } from "../dataBuilder/signInDataBuilder";
import { domainSignIn } from "../../Domain/Repositories/Firebase/Auth/SignIn"
import { handleSignIn  } from "../../Data/Services/AuthFirebase/signIn"

var data = new SignInBuilder();

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

describe("TestToDataSignIn",()=>{

    it("IfEmailIsEmptythenReturnFalse", async ()=>{
        data.withEmail("");
        expect(await handleSignIn(data.email, data.password))
        .toBe(false);
    })

    it("IfEmailIsNullthenReturnFalse", async ()=>{
        data.withEmail(null);
        expect(await handleSignIn(data.email, data.password))
        .toBe(false);
    })

    it("IfPasswordIsEmptythenReturnFalse", async ()=>{
        data.withPassword("");
        expect(await handleSignIn(data.email, data.password))
        .toBe(false);
    })

    it("IfPasswordIsNullthenReturnFalse", async ()=>{
        data.withPassword(null);
        expect(await handleSignIn(data.email, data.password))
        .toBe(false);
    })

    it("IfEmailAndPasswordAreCorrectThenReturnTrue", async ()=>{
        data.withEmail("hugo@gmail.com").withPassword("hugo123");
        expect(await handleSignIn(data.email, data.password))
        .toBe(true);
    })

})
