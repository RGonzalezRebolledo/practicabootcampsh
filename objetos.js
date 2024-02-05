// crear un ojeto 
let estudiantes = {
    nombre: 'ramon',
    edad: 24,
    activo: true,
    idiomas: {
        nativo: 'español',
        extranjero:{
            ingles: 'medio',
            frances: 'bajo',
            aleman: 'avanzado'
        }
    }
}

// mostrar objeto
console.log (estudiantes);

// mostrar propiedad
console.log (estudiantes['edad'])
console.log (estudiantes.activo)

// agregar propiedad
estudiantes.carrera = 'medicina'

console.log (estudiantes)

// borrar propiedad
delete estudiantes.carrera;

console.log (estudiantes)

// chequear si una propiedad existe
console.log(estudiantes.hasOwnProperty('nombre'))

console.log (estudiantes.idiomas.extranjero.frances)