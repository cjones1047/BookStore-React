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
        heading,
        toggleViewBookModal
    } = props
    
    const searchedBooks = () => {
        // for(const book of booksToView) {
        //     for (const property in book) {
        //         if(property === null || property === undefined) continue
        //         else return ()
        //     }
        // }

        return booksToView.map((book, i) => {
            let filteredBook = {}
            let undefinedProperty = false
            for (const property in book) {
                // console.log(property,'in index ',i,': ',book[property])
                if(book[property] === null || book[property] === undefined) {
                    console.log('undefined or null property:', property)
                    undefinedProperty = true
                    break
                } 
                else filteredBook = {...filteredBook,
                    ...(
                        <Card bg={'secondary'} text={'light'} style={{ width: 'fit-content', margin: '15px', justifyContent: 'center' }} key={i}>
                            <Card.Img variant="top" src={book.image} style={{ height: '225px', width: '180px' }} />
                            <Card.Body>
                                {/* <Card.Text>
                                by {book.authors}
                                </Card.Text> */}
                                <div style={{ textAlign: 'center' }}>
                                    <Button style={{ marginRight: '15px' }} variant="light">Tag</Button>
                                    <Button onClick={toggleViewBookModal} variant="light">View</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                } 
            }
            return undefinedProperty ? null : filteredBook
            
            // return (
            //     <Card bg={'secondary'} text={'light'} style={{width: 'fit-content', margin: '15px', justifyContent: 'center'}} key={i}>
            //         <Card.Img variant="top" src={book.image} style={{height: '225px', width: '180px'}}/>
            //         <Card.Body>
            //             {/* <Card.Text>
            //                 by {book.authors}
            //             </Card.Text> */}
            //             <div style={{textAlign: 'center'}}>
            //                 <Button style={{marginRight: '15px'}} variant="light">Tag</Button>
            //                 <Button variant="light">View</Button>
            //             </div>
            //         </Card.Body>
            //     </Card>
            // )
        })
    }
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
            {heading}
            <div style={cardContainerStyle} >
                {searchedBooks()}
            </div>
        </>
    );
}

export default BookForm