function llamarAlumno( alumno, callback ){
    let llamadaAlumno= `llamando a alumno: ${alumno}`
    //ejecutar la funcion callback
    callback(llamadaAlumno)
}

//definir funcion callback
const imprimir = (texto) =>{
    console.log(texto)
}

//invocar la funcion principal llamarAlumno
llamarAlumno("Yuliani Salamanca", imprimir)