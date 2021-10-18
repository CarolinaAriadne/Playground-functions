
let positivo = true;
let negativo = false;

compareTrue(false, false)

function compareTrue(valorA, valorB) {

  if (valorA == true && valorB == true) {

    return true;

  } else {

    return false;
  }

}

// Desafio 2

calcArea(5, 2);
function calcArea(base, height) {

  let result = 0;

  result = (base * height) / 2;

  return result;

}

// Desafio 3

let frase = 'go Trybe';

splitSentence(frase);

function splitSentence(frase) {

  let array = frase.split(" ");

  return array;

}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
