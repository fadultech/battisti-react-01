// function Pessoa(nome, idade, profissao, foto) {
// o parâmetro props foi reestruturado
function Pessoa(props) {
    return (
        <div>
            {/* repetição do nome props eliminada */}
            <img src={props.foto} alt={props.nome} />
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>
            <p>Teste</p>
        </div>
    )
}

export default Pessoa
