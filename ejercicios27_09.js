let notas = [1, 3, 6, 9, 2, 10, 5];
let peorNota = 10;

for (let i = 0; i < notas.length; i++) {
  if (notas[i] < peorNota) {
    peorNota = notas[i];
    console.log(peorNota);
  }
}

//-----------------------------------------------------------------
let alumnos = [
  { nombre: "Eugenia", nota: 10 },
  { nombre: "maria", nota: 9 },
  { nombre: "Lorena", nota: 8 },
  { nombre: "Florencia", nota: 7 },
  { nombre: "Pablo", nota: 6 },
  { nombre: "Juan", nota: 5 },
  { nombre: "Joaquin", nota: 3 },
  { nombre: "Agustina", nota: 10 },
];

let mejoresAlumnos = [
  {
    nombre: "mejor",
    nota: 0,
  },
];

for (let i = 0; i < alumnos.length; i++) {
  if (alumnos[i].nota > mejoresAlumnos[0].nota) {
    mejoresAlumnos = [alumnos[i]];
  } else if (alumnos[i].nota == mejoresAlumnos[0].nota) {
    mejoresAlumnos.push(alumnos[i]);
  }
}

mejoresAlumnos.forEach((mejorAlumno) => {
  console.log(mejorAlumno);
});

//-----------------------------------------------------------------------------

let array = [6, 8, 5, 1, 7, 3, 2, 4, 10, 9];

function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    array.forEach((number, index) => {
      if (number > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]];
        swapped = true;
      }
    });
  } while (swapped);
  return array;
}

console.log(bubbleSort(array));

//------------------------------------------------------------------------------------------

let letters = ["a", "F", "d", "n", "S", "N", "O", "c"];

letters.forEach((letter) => {
  if (letter.toUpperCase() === letter) {
    console.log(`${letter} es mayúscula`);
  }
});
