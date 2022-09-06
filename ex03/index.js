const inputNome = document.getElementById("inputNome");
const preInfo = document.getElementById("info");

preInfo.innerHTML = "<h3>Meu Texto</h3>";
setTimeout(() => {
  preInfo.innerHTML = "<h3>Novo Texto</h3>";
}, 5000);
console.log(location);
console.log(navigator);

const handleBlurNome = () => {
  console.log("saiu de foco");
  inputNome.focus();
};

inputNome.onblur = handleBlurNome;

// window.alert("Olá");

// let nome = prompt("Digite seu nome");
// console.log(nome);

// let resposta = confirm("Tem mais de 18 anos?");
// console.log(resposta);
