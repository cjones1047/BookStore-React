import React, { useState } from "react";
import { Modal, Card } from "react-bootstrap";
// import SupeForm from "../shared/SupeForm";
import { createBookSuccess, createBookFailure } from "../shared/AutoDismissAlert/messages";
import BookListModal from "./BookListModal";
import BookViewModal from "./BookViewModal";

const CreateBook = (props) => {
    const {
        user, 
        show,
        booksToView, 
        handleClose, 
        // updateSupe, 
        msgAlert, 
        // triggerRefresh
    } = props

    // const [showBookListModal, setShowBookListModal] = useState(false)
    // const [booksInModal, setBooksInModal] = useState(props.booksToView)

    const [showBookViewModal, setShowBookViewModal] = useState(false)
    const [bookInViewModal, setBookInViewModal] = useState({})

    // console.log('book being viewed:',bookInViewModal)

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

    const bookToShow = (e) => {
        setShowBookViewModal(true)
        console.log(e.target.id)
        const bookIsbn = e.target.id
        setBookInViewModal(() => {
            const viewedBook = booksToView.filter(book => book.isbn === bookIsbn)
            console.log('book view modal being updated to:', viewedBook[0])
            return (
                viewedBook[0]
            )
        })
        
    }

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
        <>
            <Modal
                size="lg" 
                show={show} 
                onHide={() => {
                        handleClose()
                    }
                }
                >
                <Modal.Header closeButton 
                style={{backgroundColor: 'rgb(177, 177, 177)'}}/>
                <Modal.Body 
                    style={{backgroundColor: 'whitesmoke'}}
                    >
                        <BookListModal
                            booksToView={booksToView}
                            // handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            heading="Any of these what you're looking for?"
                            setShowBookViewModal={bookToShow}
                        />
                </Modal.Body>
            </Modal>

            <Modal
                fullscreen={true} 
                show={showBookViewModal} 
                onHide={() => setShowBookViewModal(false)}
                >
                <Modal.Header 
                    closeButton
                    closeVariant="white"
                    style={{backgroundColor: 'black', color: 'white'}}
                    />
                <Modal.Body 
                    style={{backgroundColor: 'black', color: 'white'}}
                    >
                        <BookViewModal
                            bookInViewModal={bookInViewModal}
                        />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CreateBook