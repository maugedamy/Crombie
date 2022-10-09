const yo = { nombre: "maria eugenia", apellido: "damy", edad: 28 };

console.log(yo);

const alumnos = ["Ana", "Euge", "Mari", "Anto"];

console.log(alumnos);

console.log(alumnos[2]);

const alumnosEdad = [33, 28, 30, 20];

const sumaEdad = alumnosEdad.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  (inititalValue = 0)
);

console.log(sumaEdad / alumnosEdad.length);
