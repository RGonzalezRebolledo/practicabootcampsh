var mayormenor = [9,17,6,2,4];

var newArray = []

let menor = Infinity;
let mayor = - Infinity;

for (let index = 0; index < mayormenor.length; index++) {
        
    if (mayormenor[index] > mayor) mayor = mayormenor[index];

    // if (menor === 0) {
    //     menor = mayormenor[index] 
    // } else if (menor > mayormenor[index]) {
        if (mayormenor[index] < menor ) {
        menor = mayormenor[index]
    }

}

newArray.push(menor) 
newArray.push(mayor)   

console.log (menor);

console.log (mayor);

console.log (newArray);
