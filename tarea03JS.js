/*
Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe calcular el factorial del número recibido utilizando recursión.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
*/
let n = parseInt(prompt("escribe un número n"), 10);

function factorial(n){
    if (n < 0){
        return "N no puede ser menor que 0";
    } else if (n === 0 || n === 1){
        return 1;
    } else{
        return n * factorial(n - 1);
    }
}

console.log(factorial(n));