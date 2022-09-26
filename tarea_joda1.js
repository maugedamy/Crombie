const person = {
  age: parseInt(prompt("¿Cuantos años tenés?")),
  gotID: parseInt(
    prompt("¿Tenés tu documento?: Escribí: 1 si lo tenés o 0 si no lo tenés")
  ),
};

if (person.age >= 18 && person.age < 21) {
  if (person.gotID) {
    console.log("Podés pasar");
  } else if (!person.gotID) {
    console.log("No podés pasar");
  }
} else if (person.age > 20) {
  console.log("Podés pasar");
} else {
  console.log("No podés pasar");
}
