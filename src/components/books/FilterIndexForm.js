import './FilterIndexForm.css'

import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

const FilterIndexForm = (props) => {

    const [searchValue, setSearchValue] = useState('')
    console.log('current input value:', searchValue)

    const handleChange = (e) => {
        setSearchValue(prevSearchValue => {
            let updatedSearchValue = e.target.value

            return (updatedSearchValue)
        })
    }

	return (
		<Form className="d-flex" style={{maxWidth: '550px', width: '100%', padding: '10px'}}>
            <Form.Control
                id='search-book-field'
                type="search"
                placeholder="Any book title here..."
                className="me-2"
                aria-label="Search the web"
                value={searchValue}
                onChange={handleChange}
            />
            <Button style={{whiteSpace: 'nowrap'}} variant="outline-secondary">
                Search the web
            </Button>
        </Form>
	)
}

export default FilterIndexForm