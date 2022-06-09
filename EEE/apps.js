// sumar dos numeros 

let numerito = parseInt(prompt("Ingrese numero"))
let numerito2 = parseInt(prompt("Ingrese otro numero"))
let resultado = numerito + numerito2 
document.write(resultado)



//forma corta 

//function suma(num1, num2){
    //return num1 + num2
//}

//suma(10, 5 )


let nombre= prompt("Ingrese nombre")
console.log(nombre)

//funcion flecha 

let suma = (numero1, numero2) => {
    return numero1 + numero2;
}

// nombre
let usuario = (nombre, apellido) => ({nombre: nombre, apellido: apellido})
console.log(usuario("Noba", "SINCASCO:("));

let resta = (numero3, numero4) => {
    return numero3 - numero4;
}

console.log(resta(100,40))

function ver (num){
    if ((num) > 0) {
        document.write("es positivo")
    } else {
        document.write("es negativo ")
    }
}

document.write(ver(-9))