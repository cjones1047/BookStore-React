import './CommentList.css'
import { Form, Button, Toast, ToastContainer } from "react-bootstrap"
import { useState, useEffect } from "react"

import { getAllComments, deleteComment, updateComment } from "../../api/comments"

const CommentList = (props) => {

    const {
      user,
      msgAlert,
      bookInViewModal,
      updatedCommentList,
      setUpdatedCommentList
    } = props

    const [allComments, setAllComments] = useState(bookInViewModal.comments)
    const [commentToEdit, setCommentToEdit] = useState({
        id: null,
        note: null,
        showEditBox: false
    })
    // const [commentNoteBeingEdited, setCommentNoteBeingEdited] = useState(commentToEdit.note)

    // console.log(commentToEdit)

    // console.log('Current note input value: ', commentNote)

    const handleChange = (e) => {
        setCommentToEdit((prev) => {
            let updatedTextBoxValue = e.target.value

            return {
                id: prev.id,
                note: updatedTextBoxValue,
                showEditBox: prev.showEditBox
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        updateComment(user, bookInViewModal._id, commentToEdit)
            // on success, send a success message
            // .then(() => {
            //     msgAlert({
            //         heading: 'Success',
            //         message: messages.removeBookSuccess,
            //         variant: 'success'
            //     })
            // })
            // then navigate to index
            .then(setUpdatedCommentList)
            // .then(() => {
            //     navigate('/')
            // })
            // on failure, send a failure message
            .then(setCommentToEdit({
                    id: null,
                    note: null,
                    showEditBox: false
                })
            )
            .catch(err => {
                // navigate('/')
                // navigate back to home page if there's an error fetching
                msgAlert({
                    heading: 'Error editing comment',
                    message: "Couldn't edit that comment for you...",
                    variant: 'danger'
                })
            })
    }

    const deleteThisComment = (e) => {
        e.preventDefault()

        const commentId = e.target.id

        deleteComment(user, bookInViewModal._id, commentId)
            .then(setUpdatedCommentList)
            .catch(err => {
                msgAlert({
                    heading: 'Error deleting comment',
                    message: 'Could not delete that comment for some reason...',
                    variant: 'danger'
                })
            })
    }

    const editThisComment = (e) => {
        e.preventDefault()

        console.log(e)

        const thisId = e.target.id
        const thisNote = e.target.lang

        setCommentToEdit((prev) => {
            return {id: thisId, note: thisNote, showEditBox: !prev.showEditBox}
        })
    }

    let listOfComments
    if(allComments) {
        listOfComments = allComments.map((comment,i) => {
            return (
                <Toast key={i}>
                <Toast.Header closeButton={false}>
                    {user && comment.owner && comment.owner === user._id
                    ?
                        user && comment.owner && comment.owner === user._id && commentToEdit.showEditBox && commentToEdit.id === comment._id
                        ?

                            <strong
                                id={comment._id}
                                lang={comment.note}
                                className="me-auto edit-button" 
                                onClick={editThisComment} 
                                style={{margin: 0, padding: '0 5px', color: 'red'}}
                                >
                                    Cancel Editing
                            </strong>
                        
                        :

                            <strong
                                id={comment._id}
                                lang={comment.note}
                                className="me-auto edit-button" 
                                onClick={editThisComment} 
                                style={{margin: 0, padding: '0 5px'}}
                                >
                                    Edit
                            </strong>
                    
                    :
                    <strong
                            id={comment._id}
                            lang={comment.note}
                            className="me-auto edit-button" 
                            onClick={editThisComment} 
                            style={{margin: 0, padding: '0 5px'}}
                            >
                                &nbsp;
                        </strong>
                    }
                    

                    {user && comment.owner && comment.owner === user._id
                    ?
                        <Button 
                            variant="light"
                            id={comment._id}
                            onClick={deleteThisComment}
                            style={{height: 'fit-content', margin: 0, padding: '0 5px', fontFamily: 'Times'}}
                            >
                                X
                        </Button>
                    :
                        null
                    }
                    
                </Toast.Header>
                <Toast.Body style={{color: 'black'}}>
                    {commentToEdit.showEditBox && commentToEdit.id === comment._id
                    ?
                        <Form onSubmit={handleSubmit}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control
                                    placeholder="Post a comment"
                                    value={commentToEdit.note}
                                    name="note"
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
                            >
                                Confirm Edit
                            </Button>

                        </Form>
                    :
                        comment.note
                    }
                    
                </Toast.Body>
                </Toast>
            )
        }).reverse()
    }

    useEffect(() => {
        // console.log('use effect works for CommentList')
        // console.log('props:\n',props)
        getAllComments(bookInViewModal._id)
            .then(res => {
                setAllComments(res.data.comments)
                return
            })
            .catch(err => {
                msgAlert({
                    heading: 'Error getting comments',
                    message: 'Could not get all comments for this book...',
                    variant: 'danger'
                })
            })
        
    },[updatedCommentList])

    // const handleChange = (e) => {
    //   const note = e.target.value
    //   setCommentNote(note)
    // }

    // const handleSubmit = (e) => {
    //   e.preventDefault()

    //   console.log('Submitted comment: ', commentNote)

    //   setCommentNote('')

    //   createComment(user._id, bookInViewModal._id, commentNote)
    //       // if we're successful in the modal, we want to refreshComments
    //       // .then(() => refreshComments())
    //       // send a success message to the user
    //       .then(() => {
    //           msgAlert({
    //               heading: 'Oh Yeah!',
    //               message: `Your comment was posted `,
    //               variant: 'success'
    //           })
    //       })
    //       .catch(() => {
    //           msgAlert({
    //               heading: 'Oh no!',
    //               message: 'Something went wrong...please try that again',
    //               variant: 'danger'
    //           })
    //       })
    // }
  
    return (
      <div style={{marginTop: '10px', marginBottom: '30px'}}>

          <ToastContainer className="p-3 m-auto" >
            {listOfComments}
          </ToastContainer>

      </div>
    )
}

export default CommentList