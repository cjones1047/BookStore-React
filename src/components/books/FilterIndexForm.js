import './FilterIndexForm.css'

import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'

import CreateBook from './CreateBook'

const FilterIndexForm = (props) => {

    const { user, msgAlert } = props

    const [searchValue, setSearchValue] = useState('')
    const [booksToView, setBooksToView] = useState([])
    const [createBookModalShow, setCreateBookModalShow] = useState(false)
    // console.log('\ncurrent search value:\n', searchValue)
    // console.log('\ncurrent books to view:\n', booksToView)

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