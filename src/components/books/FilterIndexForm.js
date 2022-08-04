import './FilterIndexForm.css'

import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'

const FilterIndexForm = (props) => {

    const [searchValue, setSearchValue] = useState('')
    console.log('\ncurrent input value:', searchValue)

    const handleChange = (e) => {
        setSearchValue(() => {
            let updatedSearchValue = e.target.value

            return (updatedSearchValue)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(`\nsubmitted value:\n${searchValue}`)

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&langRestrict:en&orderBy:relevance`)
            .then((res) => {
                const data = res.data.items
                console.log(data)
                // let book = {

                // }
                
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