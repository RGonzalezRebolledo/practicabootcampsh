' define si una string se lee igual de ambas formas'

function palindromo (cadena){

cadena = cadena.replace(/ /g, '').toLowerCase();

var j = cadena.length - 1;

for (let i = 0; i < cadena.length; i++) {

    if (cadena[j] !== cadena[i] ){

        return false
    }
      j-- 
}
return true

}

// l a  r u t a  n o s  a p o r t o  o t r o  p a s o  n a t u r a l  

console.log (palindromo('La ruta nos aporto otro paso naturaL'));

// la ruta nos aporto otro paso natural