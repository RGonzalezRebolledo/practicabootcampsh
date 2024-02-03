function mismacantidadcaracter (arreglo,caracteres){
 let newarreglo = []; 
for (let i = 0; i < arreglo.length; i++) {
    
    if (arreglo[i].length === caracteres ){
        newarreglo.push( arreglo[i])
    }  
}
return newarreglo;
}

mismacantidadcaracter (['hola','mama','sol','sombra'],4);
console.log (mismacantidadcaracter (['hola','mama','sol','sombra'],4));