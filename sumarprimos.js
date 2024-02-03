 function sumaprimos (arreglo){
// un numero primo es divisible por si mismo y por 1, 1 y 0 no son numeros primos
// debo sumar los primos
// arreglo.forEach(element => {
//    if () 
// });
suma = 0 ;
// for (let i = 0; i < arreglo.length; i++) {
//     console.log (arreglo[i])
     
//     if (esprimo(arreglo[i])) {
//         suma += arreglo[i];
//     }

//     console.log (suma)
// }

arreglo.forEach(num => {
    if (esprimo(num)) suma += num
    console.log (suma)
});


return suma; 

}

function esprimo (numero){

    if (numero <= 1){
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false
        }  
    }
    return true
}

console.log (esprimo());

console.log (sumaprimos([1,5,2,9,3,4,11]))