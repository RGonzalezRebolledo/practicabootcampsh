// var Resutaldo = Math.floor(Math.random() * (max - min + 1)) + min
// var Resutaldo = Math.floor(Math.random() * (9 - 5 + 1)) + 5
// console.log (Resutaldo);
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    var countArray = countup(n - 1);
    console.log (countArray);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));


const countArrayr = [];

function countdown(n){
  if (n < 1) {
    return [];
  } else {    
    const countArrayr = countdown(n - 1) ;
    countArrayr.unshift(n);
    console.log (countArrayr);
    return countArrayr;
 
  }
}
console.log(countdown(5)); 

function rangeOfNumbers(startNum, endNum) {
  if (startNum >= endNum){
  return [];
} else {
  const arrayNew = rangeOfNumbers(startNum, endNum - 1 );
 arrayNew.push(endNum)
 console.log (arrayNew);
 return arrayNew;
 }
};

console.log(rangeOfNumbers(2,10)); 

var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);

function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScope();


var array = [2,3,5,7,8,9];
var newArray = []; 

for (let index = 0; index < array.length; index++) {

  if (array[index] % 3 === 0 && index !== 0) {
     newArray.push(array[index]);
     console.log(newArray);
  }

}

var cadena = 'hola bebe';

var arraycadena = cadena.split ('');
console.log (arraycadena);

arraycadena.reverse();
console.log (arraycadena);

arraycadena = arraycadena.join('')
console.log (arraycadena);

var stringnuevo = '';
for (let index = cadena.length - 1; index >= 0; index--) {
   stringnuevo += cadena[index];  
}

console.log(stringnuevo);


function invertirCadena(cad) {
  if (cad === "")
    return "";
  else
  
  return invertirCadena(cad.substr(1)) + cad.charAt(0);

}
// invertirCadena("hola");
console.log (invertirCadena("hola"));