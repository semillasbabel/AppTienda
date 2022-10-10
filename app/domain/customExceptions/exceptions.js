export class StringFormatExeption extends Error {
    message = "El campo no es de tipo String";
 }

export class NumberFormatExeption extends Error {
   message = "El campo no es de tipo Number";
}

export class BoolFormatExeption extends Error {
   message = "El campo no es de tipo Boolean";
}

 export class IsEmptyExeption extends Error {
    message="El campo no puede ser vacío";
 }

 export class IsNullExeption extends Error {
    message="El campo no puede ser null"
 }

 export class IsUndefinedExeption extends Error {
    message="El campo no puede ser undefined"
 }