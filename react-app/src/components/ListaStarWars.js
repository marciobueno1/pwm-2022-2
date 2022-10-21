import React, { useState, useEffect } from "react";
import { Pessoa } from "./Pessoa";

export const ListaStarWars = () => {
  const [url, setUrl] = useState("https://swapi.dev/api/people");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("executando o useEffect");
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, [url]);

  if (!data) {
    return <h1>Carregando valores...</h1>;
  }

  const handleClickBtAnterior = () => {
    setUrl(data.previous);
  };

  const handleClickBtProximo = () => {
    setUrl(data.next);
  };

  return (
    <div>
      <button
        onClick={handleClickBtAnterior}
        disabled={isLoading || !data.previous}
      >
        Anterior
      </button>
      {" - "}
      <button onClick={handleClickBtProximo} disabled={isLoading || !data.next}>
        Próximo
      </button>
      {data.results.map((pessoa) => (
        <Pessoa key={pessoa.url} pessoa={pessoa} />
      ))}
    </div>
  );
};
