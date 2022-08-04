import './FilterIndexForm.css'

import { Form, Button } from 'react-bootstrap'

const FilterIndexForm = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<Form className="d-flex" style={{maxWidth: '550px', width: '100%', padding: '10px'}}>
            <Form.Control
                id='search-book-field'
                type="search"
                placeholder="Any book title here..."
                className="me-2"
                aria-label="Search the web"
            />
            <Button style={{whiteSpace: 'nowrap'}} variant="outline-secondary">
                Search the web
            </Button>
        </Form>
	)
}

export default FilterIndexForm