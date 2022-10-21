import React, { useState } from "react";

export const ExibicaoNome = ({ nome: nomeInicial }) => {
  const [nome, setNome] = useState(nomeInicial);
  console.log("componente ExibicaoNome está sendo renderizado: " + nome);
  return (
    <>
      <h1>Olá, {nome}!</h1>
      <button
        onClick={() => {
          setNome("Maria");
        }}
      >
        Alterar nome
      </button>
    </>
  );
};
