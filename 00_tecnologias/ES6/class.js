class Libro {
    constructor (autor, titulo){
        this.autor = autor;
        this.titulo = titulo;
    }

    mostrarAutor () {
        console.log(this.autor)
    }
}

class LibroTecnico extends Libro {
    constructor (autor, titulo, tema) {
        super(autor, titulo)
        this.tema = tema
    }

    mostrar() {console.log(this)}

}

let oLibro = new LibroTecnico("Pepe", "Angular", "Programación");
oLibro.editorial = "Anaya"; //a pesar de tener la apariencia de clases, si le ponemos esto a piñon, se lo traga y lo trata de la misma manera que el resto

oLibro.mostrar();