import './App.css';
import HelloWorld from './components/HelloWorld'  // importando o componente
import Frase from './components/Frase'  // reutilizando um componente

function App() {

  // Renderizando o componente App
  return (
    <div className="App">
      {/* Usando um componente */}
      <HelloWorld />

      {/* Reutilizando um componente */}
      <Frase />
    </div>
  );
}

export default App;
