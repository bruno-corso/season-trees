import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Galeria from './componentes/Galeria/index';
import MenuImagem from './componentes/MenuImagem/MenuImagem';
import Rodape from './componentes/Rodape';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <MenuImagem />
      <Galeria />
      <Rodape />
    </div>
  );
}

export default App;
