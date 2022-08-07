import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap'

import messages from './AutoDismissAlert/messages';
import { createBook } from '../../api/books';


const BookForm = (props) => {
    const { user, msgAlert, book, handleChange, heading, handleSubmit } = props

    // this form will conditionally render a button based on whether the book exists on the index page (FilterIndexForm.js) or not

        // if book does NOT exist in FilterIndexForm (and therefore does NOT exist in the database) this component will render as a 'Tag' button (linked to the hidden form element in side the 'div below)
        // if book DOES exist in FilterIndexForm (and therefore DOES exist in the database) this component will render as an 'Untag' button (linked to a 'delete' route by importing 'books.js')

    // this allows all creation or deletion for a single book document in our database to be tied into one reuseable, shareable component that only takes up the space of one little button

    const onTagOrUntagClick = (e) => {
        e.preventDefault()
        // console.log('Here is the book you are creating:')
        // console.log(book)

        createBook(user, book)
        // promise handling for createBook here:
            // send a success message to the user
            .then(() => {
                msgAlert({
                    heading: 'Nice!',
                    message: messages.createBookSuccess,
                    variant: 'success'
                })
            })
            // if there is an error, tell the user about it
            .catch(() => {
                msgAlert({
                    heading: 'Oh no...',
                    message: messages.createBookFailure,
                    variant: 'danger'
                })
            })
    }

    return (
      <>
        <Form onSubmit={onTagOrUntagClick}>

            <Button 
                variant="light" 
                type="submit"
                style={{ marginRight: '10px' }}
                >
                    Tag
            </Button>

        </Form>
      </>
    );
}

export default BookForm


// IN CASE WE NEED IT LATER:

{/* <div style={{display: 'none'}}>
    <Row className="mb-3">
        <Form.Group as={Col}>
            <Form.Control 
                placeholder="Book's title"
                value={ book.title }
                name='title'
                type='text'
                />
        </Form.Group>

        <Form.Group as={Col}>
            <Form.Control 
                placeholder="Book's author(s)"
                value={ book.authors }
                name="authors"
                type="text"
                />
        </Form.Group>
    </Row>

    <Row className="mb-3">
        <Form.Group as={Col}>
            <Form.Control 
                placeholder="Book's description"
                value={ book.description }
                name="description"
                type="text"
                />
        </Form.Group>
    </Row>

    <Row className="mb-3">
        <Form.Group as={Col}>
            <Form.Control 
                placeholder="Book's image"
                value={ book.image }
                name="image"
                type="text"
                />
        </Form.Group>
    </Row>

    <Row className="mb-3">
        <Form.Group as={Col}>
            <Form.Control 
                placeholder="Book's ISBN number"
                value={ book.isbn }
                name="isbn"
                type="text"
                />
        </Form.Group>
    </Row>

    <Row className="mb-3">
        <Form.Group as={Col}>
            <Form.Control 
                placeholder="Book's publisher"
                value={ book.publisher }
                name="publisher"
                type="text"
                />
        </Form.Group>
    </Row>
</div> */}