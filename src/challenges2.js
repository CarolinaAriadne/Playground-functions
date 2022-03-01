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
// console.log(resultado);

// Desafio 11

//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
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

console.log(generatePhoneNumber(array));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

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
