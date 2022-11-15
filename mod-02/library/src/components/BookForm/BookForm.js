import { useState } from "react"
import { Button, Form } from "react-bootstrap"

// pega a informação do BookCard por props
function BookForm(props) {
    // seta os estados de todos os inputs
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [publisher, setPublisher] = useState("")
    const [cover, setCover] = useState("")

    // monitoramento dos inputs a cada mudança
    const handleTitleInput = (e) => {
        setTitle(e.target.value)
    }

    const handleAuthorInput = (e) => {
        setAuthor(e.target.value)
    }

    const handlePublisherInput = (e) => {
        setPublisher(e.target.value)
    }

    const handleCoverInput = (e) => {
        setCover(e.target.value)
    }

    //lidar com o evento de enviar e transformar ele em um novo objeto
    const handleSubmit = (e) => {
        // prevenir que a página será carregada
        e.preventDefault()

        // cria um novo objeto
        const newBook = {
            title,
            author,
            publisher,
            cover
        }

        // chama o addBook que está sendo passado por props com o parâmetro
        props.addBook(newBook)

        // limpa os inputs no final do processo
        setTitle("")
        setAuthor("")
        setPublisher("")
        setCover("")
    }

    return (
        <Form onSubmit={ handleSubmit }>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Título do livro</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Escreva o título do livro"
                    value={ title }
                    onChange={ handleTitleInput }
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAuthor">
                <Form.Label>Quem escreveu o livro</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Escreva o nome da pessoa autora"
                    value={ author }
                    onChange={ handleAuthorInput }
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Editora de publicação</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Escreva o nome da editora"
                    value={ publisher }
                    onChange={ handlePublisherInput }
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Capa do livro</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Insira o link da capa do livro"
                    value={ cover }   
                    onChange={ handleCoverInput } 
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Cadastrar livro
            </Button>
        </Form>
    )
}

export default BookForm