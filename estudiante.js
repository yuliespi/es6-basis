let colors = require('colors');



const g1 =[
            "Laura",
            "Carlos",
            "Ana"
            ]

const g2 =[
            "Enrique",
            "Jairo",
            "Valeria"
]

const g3 =[
            ...g1,
            "Diana",
            ...g2,
            "Duvan"
]

const estudiante = {
    id: 1,
    nombre: 'Yuliani',
    apellido:'Salamanca',
    identificacion: 105456,
    amigos: g3
}


//desestructurar objeto estudiante
/*let {nombre , identificacion}= estudiante

console.log(nombre.rainbow);
console.log(identificacion);*/

console.log(estudiante);