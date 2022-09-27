export class SignInBuilder{

    constructor(){  
        this.email = "email@gmail.com";
        this.password = "password123"
    }

    withEmail(email){
        this.email = email;
        return this;
    }

    withPassword(password){
        this.password = password;
        return this;
    }

    build(){
        return {email: this.email, password: this.password};
    }

}