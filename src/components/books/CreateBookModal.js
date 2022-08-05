import React, { useState } from "react";
import { Modal } from "react-bootstrap";
// import SupeForm from "../shared/SupeForm";
import { createBookSuccess, createBookFailure } from "../shared/AutoDismissAlert/messages";
import BookForm from "../shared/BookForm";

const CreateBookModal = (props) => {
    const {
        user, 
        show,
        booksToView, 
        handleClose, 
        // updateSupe, 
        msgAlert, 
        // triggerRefresh
    } = props

    // const [booksInModal, setBooksInModal] = useState(props.booksToView)

    // const handleChange = (e) => {
    //     setSupe(prevSupe => {
    //         let updatedValue = e.target.value
    //         const updatedName = e.target.name

    //         console.log('supe in edit modal', supe)
    //         console.log('this is the input type', e.target.type)

    //         if (e.target.type === 'number') {
    //             // this is looking at the input type, and changing it from the default, which is the string, into an actual number
    //             updatedValue = parseInt(e.target.value)
    //         }

    //         // this handles the checkbox, changing on to true, etc.
    //         if (updatedName === "hero" && e.target.checked) {
    //             updatedValue = true
    //         } else if (updatedName === "hero" && !e.target.checked) {
    //             updatedValue = false
    //         }

    //         const updatedSupe = { [updatedName]: updatedValue}
    //         return {
    //             ...prevSupe,
    //             ...updatedSupe
    //         }
    //     })
    // }

    const handleSubmit = (e) => {
        // e equals event
        e.preventDefault()

        // updateSupe(user, supe)
        //     // if we're successful in the modal, we want the  modal to close
        //     .then(() => handleClose())
        //     // send a success message to the user
        //     .then(() => {
        //         msgAlert({
        //             heading: 'Alright!',
        //             message: createBookSuccess,
        //             variant: 'success'
        //         })
        //     })
        //     // if everything is successful, we need to run triggerRefresh received as a prop from 'ShowSupe' component
        //     .then(() => triggerRefresh())
        //     // if there is an error, tell the user about it
        //     .catch(() => {
        //         msgAlert({
        //             heading: 'Oh no!',
        //             message: createBookFailure,
        //             variant: 'danger'
        //         })
        //     })
    }

    return (
        <Modal
            size="lg" 
            show={show} 
            onHide={handleClose}
            // style={{opacity: '0.7'}}
            >
            <Modal.Header closeButton 
            style={{backgroundColor: 'rgb(177, 177, 177)'}}/>
            <Modal.Body style={{backgroundColor: 'whitesmoke'}}>
                <BookForm
                    booksToView={booksToView}
                    // handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Any of these what you're looking for?"
                />
            </Modal.Body>
        </Modal>
    )
}

export default CreateBookModal