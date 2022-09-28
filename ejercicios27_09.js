let notas = [1, 3, 6, 9, 2, 10, 5];
let peorNota = 10;

for (let i = 0; i < notas.length; i++) {
  if (notas[i] < peorNota) {
    peorNota = notas[i];
    console.log(peorNota);
  }
}

let alumnos = [
  { nombre: "eugenia", nota: 10 },
  { nombre: "maria", nota: 9 },
  { nombre: "Lorena", nota: 8 },
  { nombre: "Florencia", nota: 7 },
  { nombre: "Pablo", nota: 6 },
  { nombre: "Juan", nota: 5 },
  { nombre: "Joaquin", nota: 3 },
  { nombre: "Agustina", nota: 6 },
];

let mejorAlumno = [
  {
    nombre: "mejor",
    nota: 0,
  },
];

for (let i = 0; i < alumnos.length; i++) {}
