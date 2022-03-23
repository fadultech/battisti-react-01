import logo from './logo.svg';
import './App.css';

function App() {
    // Constantes e variáveis
    const nome = 'Fadul'
    const novoNome = nome.toUpperCase()
    const url = 'https://th.bing.com/th/id/OIP.D6HCOVmx9jTLN66NXHUeEgHaHa?w=220&h=220&c=7&r=0&o=5&pid=1.7'
    const idade = 18
    const vetor = [2, 4, 6, 8]

    // Função soma
    function soma(a, b) {
        return a + b
    }
    // Função Olá
    function ola() {
        console.log('Olá, tudo bem?')
    }

    // Renderizando o componente
    return (
        <div className="App">
            <h1>Olá, React!!</h1>

            {/* mostrando variáveis */}
            <div>Olá, {nome}!</div>
            <p>Olá, {novoNome}!</p>

            {/* chamando funções/mostrando imagem */}
            <p>A soma é: {soma(6, 5)}</p>
            <button onClick={ola}>Bem vindo</button><br /><br />
            <img src="{url}" alt="Imagem" />

            {/* renderização condicional */}
            {idade >= 18 && <p>{nome} é maior de {idade}</p>}

            {/* renderização de listas (vetor) */}
            {/* usando a função map do JS      */}
            <ul>
                {vetor.map((item) => (<li>{item}</li>))}
            </ul>
        </div>
    );
}

export default App;
