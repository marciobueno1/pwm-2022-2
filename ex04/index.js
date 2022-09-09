const inputNome = document.getElementById("inputNome");
const inputIdade = document.getElementById("inputIdade");
const inputPropriedade = document.getElementById("inputPropriedade");
const inputValor = document.getElementById("inputValor");
const preInfo = document.getElementById("info");
const ulInfo2 = document.getElementById("info2");
const btDefinirObjeto = document.getElementById("btDefinirObjeto");
const btDefinirPropriedade = document.getElementById("btDefinirPropriedade");

let pessoa = {};

const exibirPessoa = () => {
  console.log(pessoa);
  // preInfo.innerHTML = JSON.stringify(pessoa);
  preInfo.innerHTML = "";
  for (let propriedade in pessoa) {
    preInfo.innerHTML += `${propriedade} = ${pessoa[propriedade]}\n`;
    // preInfo.innerHTML += propriedade + " = " + pessoa[propriedade];
  }

  ulInfo2.innerHTML = Object.values(pessoa).reduce(
    (acc, value) => acc + "<li>" + value + "</li>\n",
    ""
  );
};

const handleClickBtDefinirObjeto = () => {
  const nome = inputNome.value.trim();
  if (!nome) {
    alert("É necessário digitar um nome!");
    return;
  }

  const idade = parseInt(inputIdade.value.trim());
  if (isNaN(idade)) {
    alert("É necessário digitar um valor inteiro para idade!");
    return;
  }

  pessoa = { nome: nome, idade: idade };
  // pessoa = { nome, idade };

  exibirPessoa();
};

const handleClickBtDefinirPropriedade = () => {
  const propriedade = inputPropriedade.value.trim();
  if (!propriedade) {
    alert("É necessário digitar o nome da propriedade!");
    return;
  }

  const valor = inputValor.value.trim();
  if (!valor) {
    alert("É necessário digitar o valor da proprieade!");
    return;
  }

  pessoa[propriedade] = valor;
  exibirPessoa();
};

btDefinirObjeto.onclick = handleClickBtDefinirObjeto;
btDefinirPropriedade.onclick = handleClickBtDefinirPropriedade;
