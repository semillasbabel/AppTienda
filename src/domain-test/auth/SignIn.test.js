// GWT
// Give When Then

import { controllerSingIn } from "../../Domain/Repositories/Firebase/Auth/singIn"

// dadoAlgo_cuandoAlgo_entoncesAlgo
describe('AuthTest', async () => {
    it("dadaLaCreacionDeElLogin_cuandoElUsernameSeaNulo_entonceRetornarFalso", async ()=>{
        let nullUsername = null
        let password = "example123"
        let signIn = await controllerSingIn(nullUsername, password)
        expect(signIn).toBe(false)
    })
})