export const PI = Math.PI;

export let usuario = "wilson";
let password = "qwerty";
//export default password; para exportar por defecto una variable o constante primero se inicializa y luego de exporta

export default function saludar() {
    console.log("Hola Modulos +ES6");
}

export class Saludar{
    constructor(){
      console.log("Hola Clases +ES6");
    }
}
