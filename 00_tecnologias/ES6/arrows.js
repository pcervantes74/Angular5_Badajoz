
let oPrueba = {
    precio: 12,
    iva : 1.16,
};

/*
// Da error porque no esta activa en el momento de su utilizacion
oPrueba.calculaIvaAsiync = function () {    
    setTimeout (function () {
        let precioFinal = this.precio * this.iva
        console.log (`
            Usando una funcion clásica:
            El precio final es ${precioFinal}
        `);

    }, 1000)
}
*/

// No da error al utilizarlo mediante arrows.
oPrueba.calculaIvaAsiync = function () {
    setTimeout (() => {
        let precioFinal = this.precio * this.iva
        console.log (`
            Usando una funcion clásica:
            El precio final es ${precioFinal}
        `);

    }, 1000)
}

oPrueba.calculaIvaAsiync ();