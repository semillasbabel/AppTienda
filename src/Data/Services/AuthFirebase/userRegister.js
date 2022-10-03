import { firebaseApp, database } from '../../Repositories/FirebaseConfig/fbconfig'; 
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { doc, setDoc} from 'firebase/firestore';
import { dataKeys } from '../../Utils/constants';
import { add } from 'react-native-reanimated';

const auth = getAuth(firebaseApp);

export class Registry{
    #email;
    #password;
    #name;
    #address;
    #registryValidation = [false,false,false,false];
    #registryState = false;

    setEmail(email){
        if (this._attributeValidation(email)) {
            this.#email = email;
            this.#registryValidation[0] = true;
        }
        else this.#registryValidation[0] = false;
        return this;
    }
    setPassword(password){
        if (this._attributeValidation(password)) {
            this.#password = password;
            this.#registryValidation[1] = true;
        }
        else this.#registryValidation[1] = false;
        return this;
    }
    setName(name){
        if (this._attributeValidation(name)) {
            this.#name = name;
            this.#registryValidation[2] = true;
        }
        else this.#registryValidation[2] = false;
        return this;
    }
    setAddress(address){
        if (this._attributeValidation(address)) {
            this.#address = address;
            this.#registryValidation[3] = true;
        }
        else this.#registryValidation[3] = false;
        return this;
    }

    _attributeValidation(atributo){
        switch (atributo) {
            case "": return false;
            case null: return false;
        }
        return true;
    }

    async userRegistry(){
        if (this._registryValidation()) {
            this.#registryState = await createUserWithEmailAndPassword(auth, this.#email, this.#password)
                .then((userFirebase)=>{
                    const usersRef = doc(database, `users/${userFirebase.user.uid}` )
                    setDoc(usersRef, {
                        email: this.#email,
                        name: this.#name,
                        address: this.#address,
                        rol: dataKeys.defaultRegister
                    })
                    // const shoppingCarRef = doc(database, `shoppingCar/${userFirebase.user.uid}` )
                    // setDoc(shoppingCarRef, {
                    //     productos: {

                    //     }
                    // })
                    return true;
                })
                .catch(() => {
                    return false;
                })
        }
        else{
            return false
        }
    }

    _registryValidation(){
        let ret = true; 
        this.#registryValidation.forEach(element => {
            if (element === false) {
                ret = false;
            }
        });

        return ret;
    }

    get getRegistryState(){
        return this.#registryState;
    }
}