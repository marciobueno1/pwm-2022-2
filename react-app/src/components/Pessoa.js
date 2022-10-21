export const Pessoa = ({ pessoa }) => {
  return (
    <div>
      <h1>Nome = {pessoa.name}</h1>
      <h3>Altura = {pessoa.height} cm</h3>
      <h3>Peso = {pessoa.mass} kg</h3>
    </div>
  );
};
