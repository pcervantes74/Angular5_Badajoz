
export interface User {
    id: string| number;
    nombre: string;
    apellidos: string;
    telefono: string;

}

export class UserModel implements User {

    // Equivalente a darle valor dentro del constructor.
    constructor (public id: string | number,
                public nombre: string,
                public apellidos: string,
                public telefono: string) {}
}
