import { ToastContainer, Toast, Button, Form } from "react-bootstrap"
import { useState } from "react"
import { updateBook } from "../../api/books"

const ReasonTagged = (props) => {
    const {
        user,
        msgAlert,
        bookInViewModal
    } = props

    const [bookToEdit, setBookToEdit] = useState({
        id: null,
        reasonTagged: bookInViewModal.reasonTagged,
        showEditBox: false
    })

    console.log('Book we are editing: ', bookToEdit)

    const openTextBox = (e) => {
        setBookToEdit((prev) => {
            return {id: bookInViewModal._id, reasonTagged: prev.reasonTagged, showEditBox: true}
        })
    }

    const closeTextBox = (e) => {
        setBookToEdit((prev) => {
            return {id: null, reasonTagged: bookInViewModal.reasonTagged, showEditBox: false}
        })
    }

    const handleChange = (e) => {
        setBookToEdit((prev) => {
            let updatedTextBoxValue = e.target.value

            return {
                id: prev.id,
                reasonTagged: updatedTextBoxValue,
                showEditBox: prev.showEditBox
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        bookInViewModal.reasonTagged = bookToEdit.reasonTagged

        updateBook(user, bookInViewModal)
            // on success, send a success message
            // .then(() => {
            //     msgAlert({
            //         heading: 'Success',
            //         message: messages.removeBookSuccess,
            //         variant: 'success'
            //     })
            // })
            // then navigate to index
            // .then(setUpdatedCommentList)
            // .then(() => {
            //     navigate('/')
            // })
            // on failure, send a failure message
            .then(setBookToEdit({
                    id: null,
                    reasonTagged: bookInViewModal.reasonTagged,
                    showEditBox: false
                })
            )
            .catch(err => {
                // navigate('/')
                // navigate back to home page if there's an error fetching
                msgAlert({
                    heading: 'Error setting reason Tagged',
                    message: "Couldn't edit that for you...",
                    variant: 'danger'
                })
            })
    }

    return (
        <>
        {bookInViewModal.owner
        ?
            <ToastContainer className="m-auto">
                <Toast>
                    <Toast.Header closeButton={false}>

                        {!user
                        ?
                            <strong
                                className="me-auto"
                                style={{margin: 0, padding: '0 5px'}}
                                >
                                    Why'd they Tag it?
                            </strong>
                        :
                            user._id === bookInViewModal.owner
                            ?
                            <>
                                <strong
                                    className="me-auto"
                                    style={{margin: 0, padding: '0 5px'}}
                                    >
                                        Reason you Tagged
                                </strong>
                                {bookToEdit.showEditBox 
                                ?
                                    null
                                :
                                    <Button 
                                        variant="danger"
                                        onClick={openTextBox}
                                        style={{height: 'fit-content', margin: 0, padding: '3px 7px'}}
                                        >
                                            Edit
                                    </Button>
                                }
                                
                            </>
                            :
                                <strong
                                    className="me-auto"
                                    style={{margin: 0, padding: '0 5px'}}
                                    >
                                        Why'd they Tag it?
                                </strong>
                        }

                    </Toast.Header>

                    <Toast.Body style={{color: 'black'}}>
                        {bookInViewModal.reasonTagged && user && user._id === bookInViewModal.owner
                        ?
                            <>
                            {bookToEdit.showEditBox
                            ?
                                null
                            :
                                <h6>{bookInViewModal.reasonTagged}</h6>
                            } 
                            </>
                        :
                            !bookInViewModal.reasonTagged && user && user._id === bookInViewModal.owner
                            ?
                                <>
                                    {bookToEdit.showEditBox
                                    ?
                                        null
                                    :
                                        <h6>Tell everyone why you tagged it here</h6>
                                    }
                                        
                                </>
                            :
                                <h6>The one who Tagged it hasn't revealed why yet...</h6>
                        }
                            
                        {bookToEdit.showEditBox 
                        ?
                            <Form onSubmit={handleSubmit}>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control
                                        placeholder="Tell us why you Tagged it..."
                                        value={bookToEdit.reasonTagged}
                                        name="reasonTagged"
                                        type="text"
                                        onChange={handleChange}
                                        as="textarea"
                                        rows={3}
                                        required
                                    />
                                </Form.Group>

                                <Button
                                    type="submit"
                                    variant="success"
                                    style={{marginRight: '10px'}}
                                    >
                                        Confirm
                                </Button>

                                <Button
                                    variant="danger"
                                    onClick={closeTextBox}
                                    >
                                        Cancel
                                </Button>

                            </Form>
                        :
                            null
                        }
                        
                    </Toast.Body>

                </Toast>
            </ToastContainer>
        :
            null
        }
        </>
    )
}

export default ReasonTagged