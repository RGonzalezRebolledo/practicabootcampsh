' Determinar si la suma de 2 numeros de un arreglo es === n'

function sumarray (array,n){

for (let i = 0; i < array.length; i++) {
 
    for (let j = i + 1 ; j < array.length; j++) {
            console.log (array[i] + array[j])
        if (n === array[i] + array[j]) return 'la suma es igual a n'        
    }
    
return 'no existe suma que sea igual a n'
}
}

console.log(sumarray([2,5,7,10,11,15,20], 13));