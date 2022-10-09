function longestParam(string1, string2) {
  if (string2.length < string1.length) {
    return string1;
  } else return string2;
  //
}

console.log(longestParam("caja", "string"));

//---------------------------------------------------------------------

let array = ["casa", "mesa", "sofa", "veterinaria", "verano"];

function encontrarPalabra(array, palabra) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == palabra) {
      return i;
    }
  }
  return -1;
}

console.log(encontrarPalabra(array, "sofa"));

//------------------------------------------------------------------------
let nombre = { firstName: "Eugenia", lastName: "Damy" };

function sayFullName(nombre) {
  fullName = `${nombre.firstName} ${nombre.lastName} `;
  return fullName;
}

console.log(sayFullName(nombre));
