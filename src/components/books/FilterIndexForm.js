import './FilterIndexForm.css'

import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'

const FilterIndexForm = (props) => {

    const [searchValue, setSearchValue] = useState('')
    const [booksToView, setBooksToView] = useState([])
    const [createBookModalShow, setCreateBookModalShow] = useState(false)
    console.log('\ncurrent search value:\n', searchValue)
    console.log('\ncurrent books to view:\n', booksToView)

    const handleChange = (e) => {
        setSearchValue(() => {
            let updatedSearchValue = e.target.value

            return (updatedSearchValue)
        })
    }

    const handleViewBooksInModal = (data) => {
        setBooksToView(() => {
            return (data.map(book => {
                return({
                    title: book.volumeInfo.title,
                    author: book.volumeInfo.authors,
                    image: book.volumeInfo.imageLinks.thumbnail,
                    description: book.volumeInfo.description,
                    publisher: book.volumeInfo.publisher,
                    isbn: book.volumeInfo.industryIdentifiers[0].identifier
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
                />
                <Button type='submit' style={{whiteSpace: 'nowrap'}} variant="outline-secondary">
                    Search the web
                </Button>
            </Form>

	)
}

export default FilterIndexForm