import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { createBookSuccess, createBookFailure } from "../shared/AutoDismissAlert/messages";

import BookListModal from "./BookListModal";
import BookViewModal from "./BookViewModal";

const CreateBook = (props) => {
    const {
        user, 
        show,
        booksToView, 
        handleClose, 
        // updateBook, 
        msgAlert, 
        // triggerRefresh
    } = props

    // const [showBookListModal, setShowBookListModal] = useState(false)
    // const [booksInModal, setBooksInModal] = useState(props.booksToView)

    const [showBookViewModal, setShowBookViewModal] = useState(false)
    const [bookInViewModal, setBookInViewModal] = useState({})

    // console.log('book being viewed:',bookInViewModal)

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

        console.log(user)
        console.log(e.target.name)

        // createBook(user, bookInViewModal)
        //     // if we're successful, navigate to the show page for the new book
        //     .then(res => {
        //         console.log(res)
        //         // navigate(`/books/${res.data.book._id}`)
        //     })
        //     // send a success message to the user
        //     // .then(() => {
        //     //     msgAlert({
        //     //         heading: 'Oh Yeah!',
        //     //         message: createBookSuccess,
        //     //         variant: 'success'
        //     //     })
        //     // })
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