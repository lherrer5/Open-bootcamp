//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break


let product= 1
const num=10
let i=1

while (i<=num) {
    if (i<1){
        break;
    }
    product= product*i;
    i++;
    console.log(product)
}