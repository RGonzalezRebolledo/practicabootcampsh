// crear una clase 

class Player{

    // defino contructor del objeto, es una funcion
    constructor(altura,colorojo){
      this._altura = altura;
      this._colorojo = colorojo;  
    }
// defino los metodos de la clase 
    saltar(){}
    correr(){}
    saludar(){
        return `hola mido ${this._altura} y mis ojos son de color ${this._colorojo} `
    }
    // get muestra el valor de un atributo o propiedad del objeto
    get alto(){
     return this._altura;   
    }

    // set cambia el valor de un atributo o propiedad del objeto
    set alto(newaltura){
        return this._altura = newaltura;   
       }
}

// creo el objeto
let Player1 = new Player(1.90,'azul');
console.log (Player1);

// accedo al metodo de la clase del objeto creado
console.log (Player1.saludar());

// veo el valor de altura con el metodo get
console.log (Player1.alto) 

// cambio el valor de un atributo con set
Player1.alto = 2.1;

console.log (Player1.alto) 

