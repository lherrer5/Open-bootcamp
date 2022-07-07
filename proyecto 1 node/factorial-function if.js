var result=factorial_function(10);

function factorial_function(n) {
    if (n<0) {
        console.log("Error")
    }
    else if (n<2) {
        return 1;
    }else{
        return n*factorial_function(n-1);
    }
}
console.log(result)

