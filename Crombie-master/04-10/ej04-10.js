let products = [
  {
    name: "macbook",
    brand: "apple",
    stock: true,
    price: 500,
  },
  {
    name: "macbook pro",
    brand: "apple",
    stock: false,
    price: 400,
  },
  {
    name: "macbook air",
    brand: "apple",
    stock: true,
    price: 600,
  },
  {
    name: "lenovo t580",
    brand: "lenovo",
    stock: false,
    price: 800,
  },
];

const over500 = products.filter((item) => {
  if (item.price > 500) return true;
});

console.log(over500);

const renamed = products.map((product) => {
  product.name = `PREMIUM ${product.name}`;
  return product;
});

console.log(renamed);

const apple = products.filter((item) => {
  if (item.brand !== "apple") return true;
  else return false;
});

console.log(apple);

//const result = products.filter(product => product.marca !== "apple")

let objeto = { items: [], total: 0 };

for (let i = 0; i < 3; i++) {
  objeto.items[i] = products[i];
  objeto.total += products[i].price;

  console.log(objeto);
}
