//Este archivo debe calcular el factorial de 10 utilizando un bucle while

let product= 1
const num=10
let i=1

while (i<=num) {
    product= product*i;
    i++;
    console.log(product)
}

// segunda opcion

let n=10
let resul=1

    while(true){
        if(n<=1){
            break
        };
        resul=resul*n;
        n=n-1;
    }

    console.log(resul)