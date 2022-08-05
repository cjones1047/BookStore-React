import { Button, Card, Col, Form, Row, Container } from 'react-bootstrap';

// style for book cards container
const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const BookForm = (props) => {
    const { 
        booksToView, 
        handleSubmit, 
        heading 
    } = props
    
    const searchedBooks = booksToView.map((book, i) => 
        <Card bg={'secondary'} text={'light'} style={{width: 'fit-content', margin: '15px', justifyContent: 'center'}} key={i}>
            <Card.Img variant="top" src={book.image} style={{height: '225px', width: '180px'}}/>
            <Card.Body>
                {/* <Card.Text>
                    by {book.authors}
                </Card.Text> */}
                <Button variant="light">Tag</Button>
            </Card.Body>
        </Card>
    )
    // return (
    //     <div style={cardContainerStyle}>
    //         {supeCards}
    //     </div>    
    // )
    
    return (
        <>
            {/* <Container className='justify-content-center' style={{color:'white', textShadow: '3px 3px 3px black', marginTop: '20px'}}>
                <h3>{heading}</h3>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                placeholder="Enter supe's name here"
                                value={ supe.name }
                                name='name'
                                type='text'
                                onChange={ handleChange } />
                                
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Rating</Form.Label>
                            <Form.Control 
                                placeholder="Supe's rating (1 to 100)"
                                value={ supe.rating }
                                name="rating"
                                type="number"
                                min="1"
                                max="100"
                                onChange={ handleChange } />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                placeholder="Enter supe's description"
                                value={ supe.description }
                                name="description"
                                type="text"
                                onChange={ handleChange } />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Check name='hero' type="checkbox" defaultChecked={ supe.hero }label="Is this supe a hero?" 
                            onChange={ handleChange }/>
                        </Form.Group>
                    </Row>

                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container> */}
            <div style={cardContainerStyle} >
                {searchedBooks}
            </div>
        </>
    );
}

export default BookForm