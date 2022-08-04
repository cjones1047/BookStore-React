import { Form, Button } from 'react-bootstrap'

const FilterIndexForm = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-success">
                Search
            </Button>
        </Form>
	)
}

export default FilterIndexForm