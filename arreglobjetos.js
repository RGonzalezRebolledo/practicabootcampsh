'agregar una propiedad a un arreglo de objetos en caso que no exista y colocar valor null'


const array = [{nombre: 'ramon', edad: '20 años' }, {nombre: 'roberto'}]
console.log (array); 

function agregopropiedad (array,propiedad){

    for (let amigo of array){
if (!amigo[propiedad]) amigo[propiedad] = null
}

return array
}

console.log (agregopropiedad(array,'edad'))