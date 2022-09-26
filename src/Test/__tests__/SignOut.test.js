import { domainSignOut } from "../../Domain/Repositories/Firebase/Auth/signOut";
import { signOutUser } from "../../Data/Services/AuthFirebase/signOut"


describe("TestToDomainSignOut",()=>{

    it("IfAuthIsNullThenReturnfalse", async ()=>{
        let auth = null;
        expect(await domainSignOut(auth))
        .toBe(false);
    });

    it("IfAuthIsEmptyThenReturnfalse", async ()=>{
        let auth = "";
        expect(await domainSignOut(auth))
        .toBe(false);
    });

    it("IfAuthIsCaracterThenReturnfalse", async ()=>{
        let auth = "asdasd";
        expect(await domainSignOut(auth))
        .toBe(false);
    });

    it("IfAuthIsNumberThenReturnfalse", async ()=>{
        let auth = 3232;
        expect(await domainSignOut(auth))
        .toBe(false);
    });
})

describe("TestToDataSignOut",()=>{

    it("IfAuthIsNullThenReturnfalse", async ()=>{
        let auth = null;
        expect(await signOutUser(auth))
        .toBe(false);
    });

    it("IfAuthIsEmptyThenReturnfalse", async ()=>{
        let auth = "";
        expect(await signOutUser(auth))
        .toBe(false);
    });

    it("IfAuthIsCaracterThenReturnfalse", async ()=>{
        let auth = "asdasd";
        expect(await signOutUser(auth))
        .toBe(false);
    });

    it("IfAuthIsNumberThenReturnfalse", async ()=>{
        let auth = 3232;
        expect(await signOutUser(auth))
        .toBe(false);
    });
})
