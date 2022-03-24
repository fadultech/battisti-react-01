import './App.css';
import HelloWorld from './components/HelloWorld'  // importando o componente
import SayMyName from './components/SayMyName'    // importando o componente
import Pessoa from './components/Pessoa'    // importando o componente

function App() {
  const referencia = 'Maria'

  return (
    <div className="App">
      <SayMyName nome="Jairo" />  {/* inserindo a propriedade nome repassada como props */}
      <SayMyName nome="Fadul" />  {/* reaproveitamento dinâmico do componente com props */}
      <SayMyName nome={referencia} />  {/* passando dados dinâmicos (variável) para props */}
      <Pessoa
        nome='Jairo'
        idade='65'
        profissao='Analista/Programador'
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
