
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

  for (let index = 0; index < array2.length; index += 1) {

    if (biggerNumber < array2[index]) {

      biggerNumber = array2[index];

    }

  }

  let guarda = 0;

  for (let index = 0; index < array2.length; index += 1) {


    if (biggerNumber == array2[index]) {

      guarda = guarda + 1;
    }
  }

  return guarda;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  //  mouse = 5, cat = 3
  let distancie = Math.abs(mouse - cat1);
  let distancie2 = Math.abs(mouse - cat2);

  if (distancie > distancie2) {

    return 'cat2';

  }

  else if (distancie2 > distancie) {

    return 'cat1';

  } else {

    return 'os gatos trombam e o rato foge';

  }

}

// Desafio 8

let array3 = [9, 25];

function fizzBuzz(array3) {

  let returnArray = [];

  for (let index = 0; index < array3.length; index += 1) {


    if (array3[index] % 3 == 0 && array3[index] % 5 !== 0 && array3[index] % 7 !== 0) {

      returnArray.push('fizz');

    }

    if (array3[index] % 5 == 0 && array3[index] % 3 !== 0 && array3[index] % 7 !== 0) {


      returnArray.push('buzz');

    }


    if (array3[index] % 3 == 0 && array3[index] % 5 == 0) {


      returnArray.push('fizzBuzz');
    }

    if (array3[index] % 3 !== 0 && array3[index] % 5 !== 0) {

      returnArray.push('bug!');

    }

  }

  return returnArray;

}

// Desafio 9

let valor1 = 'hi there';

function encode(valor1) {

  let valor2 = valor1;

  for (let index = 0; index < valor1.length; index += 1) {

    valor2 = valor1.replace(/e/g, '2').replace(/a/g, '1').replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5');
  }

  return valor2;
}

let valor3 = 'h3 th2r2';

function decode(valor3) {

  let valor4 = valor3;
  for (let index2 = 0; index2 < valor3.length; index2 += 1) {

    valor4 = valor3.replace(/2/g, 'e').replace(/1/g, 'a').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');

  }
  return valor4;
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
