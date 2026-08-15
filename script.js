// Efeito de "digitação" no terminal do hero.
// Troque o texto abaixo pela sua própria frase de apresentação.
const frase = "Hola que tal? Soy Cirillo, un desarrollador principiante que está aprendiendo a crear e desarrollar cosas...";

const alvo = document.getElementById("typed-text");
let i = 0;

function digitar() {
  if (i < frase.length) {
    alvo.textContent += frase.charAt(i);
    i++;
    setTimeout(digitar, 60); // velocidade da digitação em milissegundos
  }
}

// Começa a digitar assim que a página carrega
window.addEventListener("DOMContentLoaded", digitar);
