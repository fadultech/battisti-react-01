import Frase from './Frase'
{/* importando um componente dentro de outro */ }

function HelloWorld() {
    return (
        <div>
            <Frase />   {/* usando o componente */}
            <h1>Alô meu primeiro componente!</h1>
            <Frase />   {/* reutilizando o componente */}
        </div>
    )
}

export default HelloWorld

