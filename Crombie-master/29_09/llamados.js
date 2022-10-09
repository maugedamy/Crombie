const { longestParam, encontrarPalabra, sayFullName } = require("./ejer29_09");

console.log(longestParam("caja", "string"));

//-----------------------------------------------------

let array = ["casa", "mesa", "sofa", "veterinaria", "verano"];

console.log(encontrarPalabra(array, "sofa"));

//--------------------------------------------------------------

let nombre = { firstName: "Eugenia", lastName: "Damy" };

console.log(sayFullName(nombre));
