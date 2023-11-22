let seed = [
    { id: 1, nombre: "Platano", precio: 2 },
    { id: 2, nombre: "Tomate", precio: 3 },
    { id: 3, nombre: "Huevos", precio: 5 }
]

let product = null;

export default function getProduct() {
    // if (users)
    //     return users;
    // if (!global._users) {
    //     users = seed;
    //     global._users = users;
    // } else {
    //     users = global._users;
    // }

    // Sólo cargamos valores iniciales una sóla vez
    if (!product) 
        product = seed;
    
    return product;
}

