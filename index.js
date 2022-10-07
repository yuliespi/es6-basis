//let:variables e identificadores simples: number, string y booleans
//let lenguaje = "angular"

//const:funciones, arreglos, objetos
//console.log(`la re mala para ${lenguaje}`)

import { materias } from "./materias.js";
import pkg from 'colors'

//funciones de arreglos foreach:Permite recorrer un arreglo

/*materias.forEach(function(materia){
    console.log(`materia:${materia.nombre}`.rainbow);
    console.log(`profesor:${materia.instructor}`.rainbow);
})*/

// materias.forEach((materia)=>{
//     if(materia.tipo === 'tecnica'){
//         console.log(`materia:${materia.nombre}`.rainbow);
//         console.log(`profesor:${materia.instructor}`.bgBlue);

//     }
// })

//map: construye un arreglo com base en otro
// const profesores = materias.map((materia)=>{
//     return materia.instructor
// })

/*console.log(profesores)*/

//find: Encontrar la primera ocurrencia(elemento) , que cumpla con un criterio

// const php = materias.find((materia)=>{
//     return materia.instructor === "Jhonatan Espitia"
// })

/*console.log(php)*/

//push: Agrega un elemento a un arreglo:

// materias.push({
//     id:1,
//         nombre:"Diseño",
//         instructor:"Adriana",
//         tipo: "tecnica",
//         notas: [
//             4.0,
//             3.8,
//             4,
//             3,5
//         ]
// })


//slice:delete
 /*const eliminar =materias.slice(2)
console.log(eliminar)*/

//findIndex:actualizar

const actualizar = materias.findIndex((materia) => materia.id===1)
materias[actualizar].instructor="Cristian Buitrago"
console.log(materias)


