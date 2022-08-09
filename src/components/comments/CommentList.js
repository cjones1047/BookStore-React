import { Form, Button, Toast, ToastContainer } from "react-bootstrap"
import { useState, useEffect } from "react"

import { getAllComments, deleteComment } from "../../api/comments"

const CommentList = (props) => {

    const {
      user,
      msgAlert,
      bookInViewModal,
      updatedCommentList,
      setUpdatedCommentList
    } = props

    const [allComments, setAllComments] = useState(bookInViewModal.comments)

    // console.log('Current note input value: ', commentNote)

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

    const listOfComments = allComments.map((comment,i) => {
        return (
            <Toast key={i}>
              <Toast.Header closeButton={false}>
                <strong className="me-auto" style={{margin: 0, padding: '0 5px'}}>&nbsp;</strong>

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
                {comment.note}
              </Toast.Body>
            </Toast>
        )
    }).reverse()

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