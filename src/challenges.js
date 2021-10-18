
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

let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

let nomes = '';

function concatName(array) {

  nomes = array[array.length - 1] + ', ' + array[0];

  return nomes;

}

// Desafio 5

// footballPoints(14, 8);

function footballPoints(wins, ties) {

  let points = wins * 3;

  let points2 = ties * 1;

  return points + points2;


}

// Desafio 6

// let array2 = [9, 1, 2, 3, 9, 5, 7];


// highestCount(array2); 

function highestCount(array2) {

  let biggerNumber = array2[0];

  for (let index = 0; index < array2.length; index+=1) {

    if (biggerNumber < array2[index]) {

      biggerNumber = array2[index];

    }

  }

  let guarda = 0;

  for (let index = 0; index < array2.length; index +=1){


    if (biggerNumber == array2[index]) {

      guarda = guarda + 1;
    }
  }

  return guarda;

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
