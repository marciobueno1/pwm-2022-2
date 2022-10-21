import "./App.css";
import { ExibicaoNome } from "./components/ExibicaoNome";
import { ListaStarWars } from "./components/ListaStarWars";

const App = () => {
  return (
    <div className="App">
      <ListaStarWars />
      <hr />
      <ExibicaoNome nome="Márcio" />
      <hr />
      <ExibicaoNome nome="Ana" />
      <hr />
      <ExibicaoNome nome="Marcos" />
    </div>
  );
};

export default App;
