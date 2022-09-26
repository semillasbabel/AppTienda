export class UserRegisterBuilder{

    constructor(){  
        this.email = "email@gmail.com";
        this.password = "password123";
        this.name = "nombre";
        this.address = "direccion";
    }

    withEmail(email){
        this.email = email;
        return this;
    }

    withPassword(password){
        this.password = password;
        return this;
    }

    withName(name){
        this.name = name;
        return this;
    }

    withAddress(address){
        this.address = address;
        return this;
    }

    build(){
        return {
            email: this.email, 
            password: this.password,
            name: this.name,
            address: this.address,
        };
    }

}