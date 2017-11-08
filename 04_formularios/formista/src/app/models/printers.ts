
export interface Printer {
    id: string| number;
    modelo: string;
    tipo: string;

}

export class PrinterModel implements Printer {

    // Equivalente a darle valor dentro del constructor.
    constructor (public id: string | number,
                public modelo: string,
                public tipo: string) {}
}
