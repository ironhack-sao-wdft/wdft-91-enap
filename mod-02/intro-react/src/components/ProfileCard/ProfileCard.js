function ProfileCard(props) {
    return (
            <article>
                <p>Nome: <span>{ props.nome }</span></p>
                <p>Idade: <span>{ props.idade }</span></p>
                <p>Cidade: <span>{ props.cidade }</span></p>
            </article>
    )
}

export default ProfileCard;
