const inputTexto = document.getElementById("inputTexto");
const btInserir = document.getElementById("btInserir");
const tabelaTextos = document.getElementById("tabelaTextos");

const countVowels = (str) => {
  const m = str.match(/[aáãâàeéêiíoóôõuúuü]/gi);
  return m === null ? 0 : m.length;
};

const countConsonants = (str) => {
  const m = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  return m === null ? 0 : m.length;
};

const handleClickBtInserir = () => {
  let texto = inputTexto.value.trim();
  if (!texto) {
    alert("Favor digitar um texto!");
    return;
  }

  const textNodeTexto = document.createTextNode(texto);
  const tdTexto = document.createElement("td");
  tdTexto.appendChild(textNodeTexto);

  const textNodeVogais = document.createTextNode(countVowels(texto));
  const tdVogais = document.createElement("td");
  tdVogais.appendChild(textNodeVogais);

  const textNodeConsoantes = document.createTextNode(countConsonants(texto));
  const tdConsoantes = document.createElement("td");
  tdConsoantes.appendChild(textNodeConsoantes);

  const tr = document.createElement("tr");
  tr.appendChild(tdTexto);
  tr.appendChild(tdVogais);
  tr.appendChild(tdConsoantes);

  tabelaTextos.appendChild(tr);
};

btInserir.onclick = handleClickBtInserir;
