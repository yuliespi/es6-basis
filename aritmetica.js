import {sumar , restar, multiplicar,division,potencia} from'./operaciones.js'

const a= 10;
const b= 30;

//manera tradicional de declarar funciones
/*function sumar(a , b){
    console.log(`la suma es ${a+b}`)
}

sumar ( a , b );*/

//manera con identificador:(componentes funcionales)

/*const sumar= function(a , b){
    console.log(`la suma es ${a+b}`)
}
sumar ( a , b );*/

//manera sintaxis flecha

/*const sumar= (a , b) =>{
    console.log(`la suma es ${a+b}`)
}

 sumar ( a , b )*/

console.log(`la suma es ${potencia (a,b)}`)