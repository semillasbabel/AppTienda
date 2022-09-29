import { SignInBuilder } from "../dataBuilder/signInDataBuilder";
import { domainSignIn, domainGetRol } from "../../Domain/Repositories/Firebase/Auth/SignIn"
import { handleSignIn, GetRol  } from "../../Data/Services/AuthFirebase/signIn"

var data = new SignInBuilder();

describe("TestToDomainSignIn", ()=>{

    const logIn = new domainSignIn();

    it("WithoutpassingparametersthenReturnFalse", async ()=>{
        expect(await logIn.signIn())
        .toBe(false)
    })

    it("IfEmailIsEmptythenReturnFalse", async ()=>{
        data.withEmail("");
        expect(await logIn.setEmail(data.email).setPassword(data.password).signIn())
        .toBe(false);
    })

    it("IfEmailIsNullthenReturnFalse", async ()=>{
        data.withEmail(null);
        expect(await logIn.setEmail(data.email).setPassword(data.password).signIn())
        .toBe(false);
    })

    it("IfPasswordIsEmptythenReturnFalse", async ()=>{
        data.withPassword("");
        expect(await logIn.setEmail(data.email).setPassword(data.password).signIn())
        .toBe(false);
    })

    it("IfPasswordIsNullthenReturnFalse", async ()=>{
        data.withPassword(null);
        expect(await logIn.setEmail(data.email).setPassword(data.password).signIn())
        .toBe(false);
    })
})



describe("TestToDomainGetRol", ()=>{

    const domainGetRolUser = new domainGetRol();

    it("WithoutpassingUidparametersthenReturnFalse", async ()=>{
        expect(await domainGetRolUser.search())
        .toBe(false)
    })

    it("IfUidIsEmptythenReturnFalse", async ()=>{
        let uid = "";
        expect(await domainGetRolUser.setUid(uid).search())
        .toBe(false);
    })

    it("IfUidIsNullthenReturnFalse", async ()=>{
        let uid = null;
        expect(await domainGetRolUser.setUid(uid).search())
        .toBe(false);
    })

})



describe("TestToDataSignIn",()=>{

    it("WithoutpassingparametersthenReturnFalse", async ()=>{
        expect(await handleSignIn())
        .toBe(false)
    })

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

describe("TestToDataGetRol", ()=>{

    const domainGetRolUser = new domainGetRol();
    const dataGetRol = new GetRol();

    it("WithoutpassingUidparametersthenReturnFalse", async ()=>{
        expect(await dataGetRol.search())
        .toBe(false)
    })

    it("IfUidIsEmptythenReturnFalse", async ()=>{
        const uid = "";
        dataGetRol.setUid(uid)
        expect(await dataGetRol.search())
        .toBe(false)
    })

    it("IfUidIsNullthenReturnFalse", async ()=>{
        const uid = null;
        dataGetRol.setUid(uid)
        expect(await dataGetRol.search())
        .toBe(false)
    })

})