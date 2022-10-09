const person = {
  age: parseInt(prompt("¿Cuantos años tenés?")),
};

if (person.age < 18) {
  alert("No podés pasar");
} else if (person.age > 20) {
  alert("Podés pasar");
}

if (person.age >= 18 && person.age < 21) {
  person.gotID = parseInt(
    prompt("¿Tenés tu documento?: Escribí: 1 si lo tenés o 0 si no lo tenés")
  );
  if (person.gotID) {
    alert("Podés pasar");
  } else if (!person.gotID) {
    alert("No podés pasar");
  }
}
