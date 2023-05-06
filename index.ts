// Import stylesheets
import './style.css';

console.log("Hi")

function parOImpar(numero:Number):String{
  if (numero%2 == 0) {
    return "par"
  } else {
    return "impar"
  }
}

console.log(parOImpar(20))

let numeros : Number[] = [1,2,3]
let mensaje: String = `Mis numero son ${numeros}`
console.log(mensaje )