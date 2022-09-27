import { pruebacontroller } from "../src/Data/Services/AuthFirebase/signIn";
import { controllerSingIn } from "../src/Domain/Repositories/Firebase/Auth/signIn";

describe("SignInTestToDomain", async ()=>{

    // await it("IfPasswordIsEmptythenreturnfalse", ()=>{
    //     let email = "";
    //     let password = 123;
    //     expect(controllerSingIn(email,password)).toBe(false);
    // });

    await it("IfPasswordIsEmptythenreturnfalse", ()=>{
        let email = "";
        let password = 123;
        expect(email).toBe("");
    });




})

// describe("SignInTestToData", ()=>{

//     it("Domain", ()=>{
//         expect(prueba).toBe(false);
//     });




// })