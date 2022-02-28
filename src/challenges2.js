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
    console.log(tecno,"sooorte")
    for (let index = 0; index < tecno.length; index++) {
      arrayObjeto.push({
        tech: tecno[index],
        name: nome,
      });
    }
    return arrayObjeto;
  }
}
console.log(resultado);

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

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
