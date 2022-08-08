/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hola desde la consola!");
  document.querySelector("#dru").innerHTML = name;
};

let adjetivo = ["little", "great", "big", "smart", "natural", "wild", "bored"];
let sustantivo = ["horse", "name", "cat", "facts", "true", "mouls"];
let extns = [".com", ".es", ".net", ".io", ".org"];
let name = "";
for (let k = 0; k < extns.length; k++) {
  for (let i = 0; i < adjetivo.length; i++) {
    for (let j = 0; j < sustantivo.length; j++) {
      name += adjetivo[i] + sustantivo[j] + extns[k] + "<br>"; //salto linea
    }
  }
}
