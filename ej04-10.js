let products = [{
    name: "macbook",
    brand: "apple",
    stock: true,
    price: 500
},
            {
    name: "macbook pro",
    brand: "apple",
    stock: false,
    price: 400
},
            {
    name: "macbook air",
    brand: "apple",
    stock: true,
    price:600
},
            {
    name: "lenovo t580",
    brand: lenovo,
    stock: false,
    price: 800
}]


const over500 = products.filter((item) => {
  if(item.price>500) return true  
});

console.log(over500);

const renamed = products.map(product => {
    product.name = `PREMIUM ${product.name}`
    return product});



const apple = products.filter((item) => {
    if(item.brand !== "apple") return true
    return false
});

console.log(apple);

//const result = products.filter(product => product.marca !== "apple")


/*gitbash
npm install
git init

para comenzar proyecto: poner start en package json .. scripts dependency
start test, will, install -- los toma x defecto
dev es un script fuera de los que estan x defecto

npm i express
npm i moment -- libreria para fechas
usar importando: const moment = require("moment")

npm i -d typescript
ts-node dev
ts-node -d






