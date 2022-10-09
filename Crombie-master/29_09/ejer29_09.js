function longestParam(string1, string2) {
  if (string2.length < string1.length) {
    return string1;
  } else return string2;
}

//---------------------------------------------------------------------

function encontrarPalabra(array, palabra) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == palabra) {
      return i;
    }
  }
  return -1;
}

//------------------------------------------------------------------------

function sayFullName(nombre) {
  let fullName = `${nombre.firstName} ${nombre.lastName} `;
  return fullName;
}

module.exports = { longestParam, encontrarPalabra, sayFullName };
