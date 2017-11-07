interface Autor{
    autor: string;
    pais: string;
    nacim: Date;
}

interface Editorial {
    nombre: string;
    lugar: string;
}

class Libro  implements Autor {
    public autor: string;
    public pais;
    public nacim;
    private titulo: string;
    public editorial: Editorial;

    constructor (autor, titulo){
        this.autor = autor;
        this.titulo = titulo;

        this.editorial = {nombre: "", lugar: ""};  // Al estar definido asi, no es un objeto del tipo editorial, es un objeto

    }

    mostrarAutor () {
        console.log(this.autor)
    }
}

class LibroTecnico extends Libro {
    public tema: string;
    constructor (autor, titulo, tema) {
        super(autor, titulo)
        this.tema = tema
    }

    mostrar() {console.log(this)}

}

let oLibro = new LibroTecnico("Pepe", "Angular", "Programación");
// Imposible en TS oLibro.editorial = "Anaya"; //a pesar de tener la apariencia de clases, si le ponemos esto a piñon, se lo traga y lo trata de la misma manera que el resto

oLibro.mostrar();