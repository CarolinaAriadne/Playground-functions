// Desafio 10

let tecnologias = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
const name = 'Lucas';
const vazio = 'Vazio!';

var resultado = techList(tecnologias, name);

function techList(tecno, nome) {
  const arrayObjeto = [];
  if (tecno.length === 0) {
    return vazio;
  } else {
    tecno.sort();
    for (let index = 0; index < tecno.length; index++) {
      arrayObjeto.push({
        tech: tecno[index],
        name: nome,
      });
    }
    return arrayObjeto;
  }
}

// Desafio 11

const array = [0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4];

const lengthIncorret = 'Array com tamanho incorreto.';
const numbersImpossible =
  'não é possível gerar um número de telefone com esses valores';

function generatePhoneNumber(array) {
  let numberVezesSeEmQueONumeroAparece = 1;

  if (array.length !== 11) {
    return lengthIncorret;
  }
  for (let index = 0; index < array.length; index++) {
    if (array[index] < 0 || array[index] > 9) {
      return numbersImpossible;
    }
    for (let j = index + 1; j < array.length; j++) {
      if (array[index] === array[j]) {
        numberVezesSeEmQueONumeroAparece += 1;
        if (numberVezesSeEmQueONumeroAparece >= 3) return numbersImpossible;
      }
    }
    numberVezesSeEmQueONumeroAparece = 1;
  }
  const arrayModificado = array.join('');

  let phoneNumber = '';

  for (let index2 = 0; index2 < arrayModificado.length; index2++) {
    if (index2 === 0) {
      phoneNumber += '(';
    } else if (index2 === 2) {
      phoneNumber += ') ';
    } else if (index2 === 7) {
      phoneNumber += '-';
    }
    phoneNumber += arrayModificado[index2];
  }
  return phoneNumber;
}

generatePhoneNumber(array);

// Desafio 12

let lineA = 16;
let lineB = 9;
let lineC = 2;

function triangleCheck(linhaA, linhaB, linhaC) {

  if (linhaA < (linhaB + linhaC)) {
    if (
       Math.abs( (linhaB - linhaC)) < linhaA) 
    {
      return true;
    }
  }
  if (linhaB < (linhaA + linhaC)) {
    if (
      Math.abs((linhaA - linhaC)) <  linhaB)
    {
      return true;
    }
  }
  if (linhaC < (linhaA + linhaB)) {
    if (
      Math.abs((linhaB - linhaA)) < linhaC)
   {
      return true;
    }
  }
  return false;
}

console.log(triangleCheck(lineA, lineB, lineC));


// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
