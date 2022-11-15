import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import BookForm from '../BookForm/BookForm';

function BookCard() {
    const [books, setBooks] = useState([
        {
            title: "Torto Arado",
            author: "Itamar Vieira Junior",
            cover: "https://m.media-amazon.com/images/I/41fQpp33yUL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
            publisher: "Todavia"
        },
        {
            title: "Se a Casa 8 Falasse",
            author: "Vitor Martins",
            cover: "https://m.media-amazon.com/images/I/51mLReWuzBL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
            publisher: "Alt"
        },
        {
            title: "Mordida",
            author: "Sarah Andersen",
            cover: "https://m.media-amazon.com/images/I/41DozwgWg+S._SX328_BO1,204,203,200_.jpg",
            publisher: "Seguinte"
        },
        {
            title: "Rádio Silêncio",
            author: "Alice Oseman",
            cover: "https://m.media-amazon.com/images/I/41BiGnzfDLL._SY346_.jpg",
            publisher: "Rocco Jovens Leitores"
        }
    ])

    // adicionar um novo item da lista
    const addBook = (newBook) => {
        const updatedBooks = [...books, newBook]
        setBooks(updatedBooks) // books = array de cinco itens
        //books = [...books, newBook] 
    }

    // deletar um item da lista
    const deleteBook = (bookKey) => {
        const newBooks = books.filter((book, index) => {
            return index !== bookKey
        })

        setBooks(newBooks)
    }

    // renderizar todos os itens da lista    
    const renderBooks = books.map((book, index) => {
        return (
            <Col key={index}>
                <Card style={{ width: '15rem' }}>
                    <Card.Img
                        variant="top"
                        src={book.cover}
                    />
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>{book.publisher}</Card.Text>
                        <Button
                            variant="danger"
                            onClick={() => deleteBook(index)}
                        >
                            Excluir este livro
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

    // informa que a função addBook está sendo passada por props para o BookForm
    return (
        <Container>
            <Row>
                <BookForm addBook={ addBook } />
            </Row>
            <Row>
                {renderBooks}
            </Row>
        </Container>
    )
}

export default BookCard