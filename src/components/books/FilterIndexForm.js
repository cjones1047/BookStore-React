import './FilterIndexForm.css'

import { Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import messages from '../shared/AutoDismissAlert/messages'
import axios from 'axios'

import { getAllBooks } from '../../api/books'
import CreateBook from './CreateBook'

const FilterIndexForm = (props) => {

    const { user, msgAlert } = props

    const [books, setBooks] = useState(null)
    const [searchValue, setSearchValue] = useState('')
    const [booksToView, setBooksToView] = useState([])
    const [createBookModalShow, setCreateBookModalShow] = useState(false)
    // console.log('\ncurrent search value:\n', searchValue)
    // console.log('\ncurrent books to view:\n', booksToView)

    useEffect(() => {
        // console.log('use effect works')
        console.log('props:\n',props)
        getAllBooks()
            .then(res => setBooks(res.data.books))
            .catch(err => {
                msgAlert({
                    heading: 'Error getting books',
                    message: messages.getBooksFailure,
                    variant: 'danger'
                })
            })
    }, [])

    // show a prompt to Tag books if no books exist, or an error message if database cannot be connected to
    if(!books) {
        return (
            <h1 
                style={{fontFamily: 'Times', color: 'white', textShadow: '0.25px 0.25px 4px black, -0.25px -0.25px 4px black'}}>
                    Error connecting to database...
            </h1>
            
        )
    } 
    // else if (books.length === 0) {
    //     return (
    //         <h1 
    //             style={{fontFamily: 'Times', color: 'white', textShadow: '0.25px 0.25px 4px black, -0.25px -0.25px 4px black'}}>
    //                 No one has tagged that yet, <br></br>
    //                 Search it and be the first!
    //         </h1>
    //     )
    // }

    const handleChange = (e) => {
        setSearchValue(() => {
            let updatedSearchValue = e.target.value

            return (updatedSearchValue)
        })
    }

    const handleViewBooksInModal = (data) => {
        setCreateBookModalShow(true)
        setBooksToView(() => {
            return (data.map(book => {
                // if(book.volumeInfo.imageLinks.thumbnail === undefined) return({})
                return({
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors ? book.volumeInfo.authors.map((author,i) => {
                        if(i === 0) return author
                        else return ', '+author
                    }) : null,
                    image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null,
                    description: book.volumeInfo.description,
                    publisher: book.volumeInfo.publisher,
                    isbn: book.volumeInfo.industryIdentifiers ? book.volumeInfo.industryIdentifiers[0].identifier : null
                })
            }))
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(`\nsubmitted value:\n${searchValue}`)

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&langRestrict:en&printType=books`)
            .then((res) => {
                const data = res.data.items
                // console.log(data)
                
                handleViewBooksInModal(data)
                
            })
            .catch(err => console.log(err))
    }

	return (
		<>
            <Form
                onSubmit={handleSubmit}
                className="d-flex" 
                style={{maxWidth: '550px', width: '100%', padding: '10px'}}
                >
                <Form.Control
                    id='search-book-field'
                    autoComplete='off'
                    type="search"
                    placeholder="Any book title here..."
                    className="me-2"
                    aria-label="Search the web"
                    value={searchValue}
                    onChange={handleChange}
                    required
                />
                <Button type='submit' style={{whiteSpace: 'nowrap'}} variant="outline-secondary">
                    Search the web
                </Button>
            </Form>

            {books.length === 0 ? 
                <>
                    <h1 
                        style={{fontFamily: 'Times', color: 'white', textShadow: '0.25px 0.25px 4px black, -0.25px -0.25px 4px black'}}>
                            No one has tagged that yet,
                    </h1>
                    <h1 
                        style={{fontFamily: 'Times', color: 'white', textShadow: '0.25px 0.25px 4px black, -0.25px -0.25px 4px black'}}>
                            Search it and be the first!
                    </h1>
                </>
            :
                <h1 style={{fontFamily: 'Times', color: 'white', textShadow: '0.25px 0.25px 4px black, -0.25px -0.25px 4px black'}}>All tagged books:</h1>
            }

            <CreateBook 
                user={user}
                booksToView={booksToView}
                show={createBookModalShow}
                // updateSupe={updateSupe}
                msgAlert={msgAlert}
                // triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setCreateBookModalShow(false)}
            />
        </>

	)
}

export default FilterIndexForm